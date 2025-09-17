// src/components/Notification.js
import React from "react";

const Notification = ({ message, type }) => {
  if (!message) return null; // Don't render if no message

  return (
    <div className={`notification ${type || "info"}`}>
      {message}
    </div>
  );
};

export default Notification;
