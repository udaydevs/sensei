"use client"
import { useRef, useState,useEffect } from "react"
import remarkGfm from "remark-gfm"
import ReactMarkdown from "react-markdown"

export default function Dashboard() {
  const [prompt, setPrompt] = useState("")
  const [defPrompt, setDefPrompt] = useState('How can I assist you today?')
  const [responses, setResponses] = useState([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef(null)
  const messagesEndRef = useRef(null)


  useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
}, [responses])

  if (typeof window !== "undefined" && !recognitionRef.current) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = "en-US"

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ")
      setPrompt(transcript)
    }

    recognition.onend = () => {
      if (isListening) recognition.start()
    }

    recognitionRef.current = recognition
  }

  const toggleMic = () => {
    if (!recognitionRef.current) return
    if (!isListening) {
      recognitionRef.current.start()
    } else {
      recognitionRef.current.stop()
    }
    setIsListening(!isListening)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isStreaming) return
    if (!prompt.trim()) return

    setDefPrompt('Thinking...')
    setIsStreaming(true)
    setResponses(prev => [...prev, { type: 'user', content: prompt }])
    setPrompt('')

    try {
      const res = await fetch("https://sensei-backend-104839152918.europe-west1.run.app/prompt/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      console.log(data)
      setResponses(prev => [...prev, { type: 'ai', content: data }])
    } catch (err) {
      console.error("Error:", err)
      setResponses(prev => [...prev, { type: 'ai', content: { Japanese_Output: "Error", English_Output: err.message } }])
    } finally {
      setIsStreaming(false)
    }
  }


  return (
    <div className="w-full h-screen flex p-4">
      <div className="w-full flex flex-col items-center h-full">
        <div className="flex-1 w-full sm:w-4/5   p-2 overflow-auto scrollbar sm:py-6 sm:px-2 flex flex-col">
          {responses.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="font-bold text-4xl">Hello, <span className="text-primary">Man</span></div>
              <div className="text-2xl">{defPrompt}</div>
            </div>
          )}

          {responses.map((item, index) => (
            <div
              key={index}
              className={`my-2 p-4  rounded-xl shadow-md max-w-[95%]  sm:max-w-[90%] ${item.type === 'user' ? 'self-end bg-primary' : 'self-start bg-white'}`}
            >
              {item.type === 'user' ? item.content : (
                <div className="prose prose prose-sm sm:prose overflow-auto lg:prose-lg px-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.content.result}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          ))}
           <div ref={messagesEndRef} />
        </div>


        <div className="w-full  sm:w-4/5 bg-white border py-2 rounded-2xl shadow-xl shadow-gray-200 h-auto mb-4">
          <form onSubmit={handleSubmit}  className="h-full px-4 py-3">
            <input
              placeholder="Ask anything..."
              required
              className="w-full px-4 h-1/2 bg-white border-0 outline-none overflow-scroll overflow-y-auto p-2 rounded-xl "
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></input>
            <div className="flex justify-between py-2 my-2">
              <div>
                <button
                  type="submit"
                  className="mx-2 p-2 w-fit border rounded-4xl text-white "
                >
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                    <span className="text-black font-bold hidden px-1 sm:block sm:px-0 ">Upload</span>
                  </div>
                </button>
              </div>
              <div className="flex">
                <button
                  onClick={toggleMic}
                  type="button"
                  style={{ backgroundColor: isListening ? "red" : "" }}
                  className="mx-2 p-2 w-fit border rounded-[50%] text-white "
                >
                  {isListening ? (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m710-362-58-58q14-23 21-48t7-52h80q0 44-13 83.5T710-362ZM480-594Zm112 112-72-72v-206q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v126l-80-80v-46q0-50 35-85t85-35q50 0 85 35t35 85v240q0 11-2.5 20t-5.5 18ZM440-120v-123q-104-14-172-93t-68-184h80q0 83 57.5 141.5T480-320q34 0 64.5-10.5T600-360l57 57q-29 23-63.5 39T520-243v123h-80Zm352 64L56-792l56-56 736 736-56 56Z" /></svg>
                    </div>
                  ) : (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" /></svg>
                    </div>
                  )}
                </button>
                <button
                  type="submit"
                  className="mx-2 p-2 w-fit border rounded-[50%] text-white bg-primary "
                >
                  {isStreaming ? (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z" /></svg>
                    </div>
                  ) : (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
