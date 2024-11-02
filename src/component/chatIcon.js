// ChatIcon.js
import React from "react";
import { FaComments } from "react-icons/fa"; // Using FontAwesome icon for web
//import "./ChatIcon.css"; // Create this CSS file to manage styling

const ChatIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="chat-icon">
      <FaComments size={30} color="#007bff" />
    </button>
  );
};

export default ChatIcon;
