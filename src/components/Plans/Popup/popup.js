import React from "react";
import "./popup.css";

const Popup = ({ imageUrl, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={imageUrl} alt="Popup" />
      </div>
    </div>
  );
};

export default Popup;
