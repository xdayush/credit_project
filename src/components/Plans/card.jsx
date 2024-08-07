import React from "react";
import "./card.css";
import Popup from "./Popup/popup";

// const CheckmarkIcon = () => (
//   <svg
//     className="icon"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       fillRule="evenodd"
//       d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 111.06-1.06l2.75 2.75 6.72-6.72a.75.75 0 011.06 0z"
//     />
//   </svg>
// );
import  { useState } from "react";

const Card = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState("");

  const handleGetStartedClick = (imageUrl) => {
    console.log("Button clicked, imageUrl:", imageUrl); // Debugging line
    setPopupImageUrl(imageUrl);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="plans-container" id="card1">
      <h2 className="plans-title">Plans & Pricing</h2>
      <div className="plans">
        <div className="plan-card">
          <h3 className="plan-type">Basic</h3>
          <p className="plan-price">₹100</p>
          <hr className="divider" />
          <ul className="plan-features">
            <li>Everything in Basic Plus</li>
            <li>Comprehensive overview of your credit history.</li>
            <li>Understanding your credit score and factors affecting it.</li>
            <li>6 Month RM support.</li>
          </ul>
          <button className="plan-button" onClick={() => handleGetStartedClick("./img/qr-100.jfif")}>
            
            Get Started</button>
        </div>
        <div className="plan-card">
          <h3 className="plan-type">Premium</h3>
          <p className="plan-price">₹1,369</p>
          <hr className="divider" />
          <ul className="plan-features">
            <li>Everything in Premium Plan</li>
            <li>
              Analysis of your credit report, including positive & negative
              factors.
            </li>
            <li>Personalized action plan to improve your credit score.</li>
            <li>6 Month RM support.</li>
          </ul>
          <button className="plan-button" onClick={() => handleGetStartedClick("./img/qr-1369.jfif")}>Get Started</button>
        </div>
      </div>
      {isPopupVisible && <Popup imageUrl={popupImageUrl} onClose={handleClosePopup} />}
    </div>
  );
};

export default Card;
