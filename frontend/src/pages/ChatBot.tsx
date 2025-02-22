import React, { useState, useRef } from "react";
import "boxicons";

export function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false); 
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion); 
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages([...messages, { text: `File uploaded: ${file.name}`, sender: "user" }]);
    }
  };

  const handleMicClick = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = "en-US"; // Set language
      recognition.interimResults = false; 
      recognition.maxAlternatives = 1;

      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript); 
        setIsListening(false); 
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setMessages([...messages, { text: "Error: Could not recognize speech.", sender: "bot" }]);
        setIsListening(false); 
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    } else {
      alert("Your browser does not support speech recognition.");
    }
  };

  return (
    <div className="flex h-screen bg-[#e6e2ce]">
      {/* Left Panel (Optional for Desktop) */}
      <div className="hidden md:block w-1/4 bg-[#e6e2ce] p-4 border-r border-gray-200">
        <h2 className="text-lg font-bold mb-4" style={{ color: "#537f49" }}>
          Quick Actions
        </h2>
        <ul>
          <li className="mb-2" style={{ color: "#537f49" }}>
            Recent Queries
          </li>
          <li style={{ color: "#537f49" }}>Settings</li>
        </ul>
      </div>

      {/* Right Panel (Main Chat Interface) */}
      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <header className="p-4 bg-white border-b border-gray-200 bg-[#f7efe0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold" style={{ color: "#537f49" }}>
                AyurBot – Your Ayurvedic Guide
              </h1>
            </div>
          </div>
        </header>

        {/* Chat Window */}
        <div className="flex-1 p-4 overflow-y-auto bg-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                style={{
                  backgroundColor:
                    msg.sender === "user" ? "#4f7942" : "#f7efe1",
                  color: msg.sender === "user" ? "white" : "#537f49",
                }}
                className="p-3 rounded-lg max-w-[70%]"
              >
                <p>{msg.text}</p>
                <span
                  className={`text-xs ${
                    msg.sender === "user" ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  10:00 AM
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 bg-[#f7efe0]">
          <div className="flex space-x-2 overflow-x-auto mb-2">
            {[
              "Find Ayurvedic remedies for headaches",
              "Suggest a diet for Pitta Dosha",
              "Explain the benefits of Ashwagandha",
            ].map((prompt, index) => (
              <button
                key={index}
                className="whitespace-nowrap p-2 bg-gray-100 rounded-lg text-sm"
                style={{ color: "#537f49" }}
                onClick={() => handleSuggestionClick(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            {/* Mic Button */}
            <button
              style={{ color: isListening ? "red" : "#537f49" }} // Change color to red when listening
              onClick={handleMicClick}
            >
              <box-icon name="microphone" color={isListening ? "red" : "#537f49"}></box-icon>
            </button>

            {/* Clip Button */}
            <button
              style={{ color: "#537f49" }}
              onClick={() => fileInputRef.current.click()} 
            >
              <box-icon name="paperclip" color="#537f49"></box-icon>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask anything about Ayurveda…"
              className="flex-1 p-2 border border-gray-300 rounded-lg"
              style={{ width: "calc(100% - 120px)" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />

            {/* Send Button */}
            <button
              className="p-2 text-white rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center"
              style={{ backgroundColor: "#59804c" }}
              onClick={handleSend}
            >
              <box-icon name="send" color="white"></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}