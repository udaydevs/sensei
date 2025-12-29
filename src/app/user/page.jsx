'use client'
import { useState, useEffect, Children } from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import Markdown from "react-markdown";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [ws, setws] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket('ws://127.0.0.1:8000/response/');
    setws(websocket)

    websocket.onopen = () => console.log('ws opened');
    websocket.onmessage = (event) => {
      setMessages((prevMessage) => [...prevMessage, event.data]);
    }
    websocket.onclose = () => console.log('ws.closed')

    return () => websocket.close()
  }, []);

  const sendPrompt = () => {
    if (ws && ws.readyState == WebSocket.OPEN){
      ws.send(input)
      setInput('')
    }
  };

  return (
    <div style={styles.container} className="text-left">
      <h1>LLM Live Streaming</h1>

      {messages.map((value) => (
        <Markdown
          remarkPlugins={[remarkBreaks, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]} 
        >{value}</Markdown>
      ))}
      {/* <textarea
        style={styles.textarea}
        value={messages}
        readOnly
        placeholder="AI response will appear here..."
      /> */}

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
        />
        <button style={styles.button} onClick={sendPrompt}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  textarea: {
    width: "100%",
    height: "750px",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
