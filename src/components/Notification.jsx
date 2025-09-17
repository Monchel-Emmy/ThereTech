// src/components/Notification.js
import React, { useState } from "react";
import "./Notification.css";

const Notification = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  if (!message || !visible) return null; // Don't render if no message or closed

  return (
    <div className={`notification-bar ${type || "info"}`}>
      <div className="notification-text">{message}</div>
      <button
        className="notification-close"
        onClick={() => setVisible(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
