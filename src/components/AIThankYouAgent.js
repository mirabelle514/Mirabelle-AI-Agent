import React, { useState, useRef, useEffect } from 'react';
import { getResponse } from './responses';

const AIThankYouAgent = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm an AI agent representing Mirabelle, who you just interviewed for the Lead UX Developer position. I have her thank you message, a reference letter from her Indeed manager, and can answer questions about why she'd be perfect for your team. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typingText, setTypingText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadReferenceLetter = () => {
    // Create a download link for the reference letter
    const link = document.createElement('a');
    link.href = '/Mirabelle_Reference_Letter_Indeed.pdf'; // PDF in public folder
    link.download = 'Mirabelle_Reference_Letter_Indeed.pdf';
    link.click();
  };

  const DownloadButton = ({ text = "Download Reference Letter" }) => (
    <button
      onClick={downloadReferenceLetter}
      className="inline-flex items-center space-x-2 btn-primary text-sm"
    >
      <span></span>
      <span>{text}</span>
    </button>
  );

  const formatMessageWithDownload = (content) => {
    // Check if the message mentions reference letter and add download button
    // Only show for specific responses that should have the download button
    if (content.toLowerCase().includes('reference letter') || content.toLowerCase().includes('kettil')) {
      console.log('Adding download button for content:', content);
      return (
        <div>
          <p className="text-sm leading-relaxed whitespace-pre-wrap mb-3">{content}</p>
          <DownloadButton />
        </div>
      );
    }
    return <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>;
  };

  useEffect(scrollToBottom, [messages]);

  // Get response from hardcoded responses instead of API
  const getResponseFromAI = (userMessage) => {
    return getResponse(userMessage);
  };

  const typeMessage = (text, callback) => {
    let i = 0;
    setTypingText('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypingText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTypingText('');
        callback();
      }
    }, 30);
  };

  const handleSend = () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Get response from hardcoded responses (no API)
    const aiResponse = getResponseFromAI(inputValue);
    
    typeMessage(aiResponse, () => {
      const assistantMessage = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "Can you give me the thank you message?",
    "Do you have a reference letter from her manager?",
    "What makes Mirabelle special?", 
    "Tell me about her AI experience",
    "How would she improve our UX team?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Mirabelle's AI Agent</h1>
              <p className="text-sm text-gray-500">Here to represent Mirabelle for the Lead UX Developer position</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 h-[600px] flex flex-col">
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  }`}>
                    {message.role === 'user' ? 'U' : 'AI'}
                  </div>
                  <div className={`rounded-lg px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    {message.role === 'assistant' ? formatMessageWithDownload(message.content) : (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    )}
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typingText && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-3">
                    {formatMessageWithDownload(typingText)}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            )}

            {isLoading && !typingText && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    AI
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="btn-secondary text-xs"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Mirabelle..."
                className="flex-1 input-field"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="btn-primary px-6 py-2 focus:outline-none focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 mb-3">
            <span className="text-sm text-gray-600">Reference letter from Indeed manager available for download</span>
          </div>
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <span className="text-sm text-gray-600">Powered by Mirabelle + AI</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Built with React</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Demonstrating AI Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIThankYouAgent;