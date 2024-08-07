import React, { useState } from "react";
import Popup from "../Plans/Popup/popup";
import "./card.css";

const Card2= () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState("");

  const handleGetStartedClick = (imageUrl) => {
    setPopupImageUrl(imageUrl);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="plans-container pc-2" id="card2">
      <h2 className="plans-title">Plans & Pricing</h2>
      <div className="plans">
        <div className="plan-card">
          <h3 className="plan-type">Premium</h3>
          <p className="plan-price">₹5369 </p>
          <hr className="divider" />
          <ul className="plan-features">
            <li>Credit improvement 1 CIC ;</li>
            <li>6-Month Credit Improvement Guarantee.</li>
            <li>6 Month RM support.</li>
            <li>24/7 Customer Support</li>
            <li>Proactive Credit Monitoring and Alerts.</li>
          </ul>
          <button
            className="plan-button"
            onClick={() => handleGetStartedClick("./img/qr-5369.jfif")}
          >
            Get Started
          </button>
        </div>
        <div className="plan-card">
          <h3 className="plan-type">Elite</h3>
          <p className="plan-price">₹10,369</p>
          <hr className="divider" />
          <ul className="plan-features">
            <li>Credit improvement 4 CIC ;</li>
            <li>1-Year Credit Improvement Guarantee.</li>
            <li>One-on-One Financial Coaching.</li>
            <li>24/7 Customer Support.</li>
            <li>Proactive Credit Monitoring and Alerts.</li>
          </ul>
          <button
            className="plan-button"
            onClick={() => handleGetStartedClick("./img/qr-10369.jfif")}
          >
            Get Started
          </button>
        </div>
      </div>
      {isPopupVisible && <Popup imageUrl={popupImageUrl} onClose={handleClosePopup} />}
    </div>
  );
};

export default Card2;
