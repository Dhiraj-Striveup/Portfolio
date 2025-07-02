"use client";
import React, {  useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useChat } from "@ai-sdk/react";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  

  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       setShowChatIcon(true);
  //     } else {
  //       setChatOpen(false);
  //       setShowChatIcon(false);
  //     }
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  
  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  
  const { messages, input, handleInputChange, handleSubmit, isLoading,error } = useChat({api:"/api/chat"});

  return (
    <>
     
      
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div
            className="bg-purple-800 rounded-full p-3 flex items-center justify-center cursor-pointer w-14 h-14 shadow-lg"
            onClick={toggleChat}
          >
            🤖
          </div>
        </motion.div>
      

      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-xl rounded-xl border border-gray-200">
          <div className="flex bg-purple-800 justify-between items-center">
            <div className="bg-purple-800 text-white p-3 font-bold text-center rounded-t-xl w-full">
              ChitChat 🤖
            </div>
            <div className="text-white p-3 font-bold cursor-pointer" onClick={toggleChat}>
              <FaTimes />
            </div>
          </div>

         
          <div className="h-64 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-purple-500 text-white self-end ml-auto w-fit"
                    : "bg-gray-200 text-black w-fit"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className="text-gray-400 text-sm">Typing...</div>}
          </div>

          
          <div className="p-2 border-t border-gray-300 flex">
            <input
              type="text"
              className="flex-1 p-2 text-black border rounded-l-md focus:outline-none"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSubmit}
        
        
              className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
          {error && <div className="text-red-500 p-2"> error</div>}
        </div>
      )}
    </>
  );
};

export default Chatbot;
