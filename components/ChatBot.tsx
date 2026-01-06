
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am the ComedKares academic assistant. How can I help you explore our innovation hubs or specialized programs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemContext = `
        You are the official ComedKares Academic Assistant. 
        ComedKares is an initiative of COMEDK focused on experiential learning and 21st-century skills for engineering students in Karnataka.
        
        Key Info:
        - 9 Innovation Hubs: Yelahanka, JP Nagar, Mysore Road (Bengaluru), Tumkur, Mysuru, Mangaluru, Belagavi, Kalaburagi, Hubballi.
        - Programs: Innovation & Design Thinking (IDT), AI/ML & Data Science, IoT, Robotics, and Internships.
        - Leadership: Dr. Jayaram (Chairman), Dr. S Kumar (Executive Secretary), Mr. Muralidhar Ponnaluri (CEO).
        - Partners: VTU, ERA Foundation, and various industry connects like AWS, Figma, and Arduino.
        
        Tone: Professional, academic, helpful, and institutional.
        Rules:
        - Use only provided data. If you don't know, suggest contacting reachus@comedkares.org.
        - Encourage students to visit the nearest Innovation Hub.
      `;

      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: systemContext,
        }
      });

      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "I'm sorry, I couldn't process that. Please try again or contact our support.";
      
      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] font-sans">
      {/* Chat Window - Fixed position and safe height for mobile */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 w-[90vw] sm:w-[380px] md:w-[400px] h-[70vh] max-h-[600px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)] border border-slate-100 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header - Fixed height with shadow */}
          <div className="bg-[#003057] p-4 md:p-6 text-white flex justify-between items-center shrink-0 shadow-lg z-10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFB81C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Kares Assistant</h3>
                <p className="text-[8px] md:text-[10px] text-slate-300 uppercase tracking-tighter">Academic Support</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-2" aria-label="Close">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl md:rounded-3xl text-xs md:text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#003057] text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl rounded-tl-none border border-slate-100 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-[#FFB81C] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#FFB81C] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#FFB81C] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 shrink-0">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about programs..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3 md:py-4 pl-4 md:pl-6 pr-12 md:pr-14 focus:outline-none focus:border-[#FFB81C] transition-colors text-xs md:text-sm"
              />
              <button
                type="submit"
                disabled={isTyping}
                className={`absolute right-1.5 top-1.5 md:right-2 md:top-2 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${
                  isTyping ? 'bg-slate-200 text-slate-400' : 'bg-[#FFB81C] text-[#003057] hover:bg-white shadow-lg'
                }`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-[#FFB81C] text-[#003057]'
        }`}
        aria-label="Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
