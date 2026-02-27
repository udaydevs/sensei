'use client'
import { useState, useEffect, Children } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown"


function App() {
  const [input, setInput] = useState("");
  const [resp, setResp] = useState('')
  const [messages, setMessages] = useState([]);
  const [ws, setws] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket('ws://127.0.0.1:8000/chatbot/talk');
    setws(websocket)

    websocket.onopen = () => console.log('ws opened');
    websocket.onmessage = (event) => {
      setResp((prevMessage) => (prevMessage + event.data));
    }
    websocket.onclose = () => console.log('ws.closed')

    return () => websocket.close()
  }, []);

  const sendPrompt = () => {
    if (ws && ws.readyState == WebSocket.OPEN) {
      ws.send(input)
      setMessages((prev) => [...prev, resp]);
      setResp('')
      setInput('')
    }
  };

  return (
    <div className="h-screen flex flex-col items-center p-5 bg-purple-100">
      <h1>LLM Live Streaming</h1>
      <div className="bg-red-500 p-1">
        {messages && messages.map((item, index) => (
          <div key={index} className="my-2 p-4 rounded-xl shadow-md">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {item}
            </ReactMarkdown>
          </div>
        ))}

        {resp && resp.length > 1 && (
          <div className="my-2 p-4 rounded-xl shadow-md opacity-80">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {resp}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {/* <div className=" bg-white overflow-y-auto w-4/5 p-5 h-4/5">
          {messages.map((value) => (
            <div className="bg-amber-200 py-1"><Markdown
            remarkPlugins={[remarkBreaks, remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]} 
            >{value}</Markdown></div>
            
            ))}
            </div> */}
      <div className=" flex">
        <input
          className="w-100 border p-3.5 rounded-md outline-0 m-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
        />
        <button className="border p-3.5 rounded-md" onClick={sendPrompt}>
          Send
        </button>
      </div>
    </div>
  );
}


export default App;
