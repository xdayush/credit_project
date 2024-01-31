import React from 'react';
import './CreditInfo.css'; // Make sure the CSS file is in the same directory
import pic4 from './pic4.jpeg'; // Path to your first image
import pic3 from './pic3.jpeg'; // Path to your second image

const CreditInfo = () => {
 
    return (
      <div className="credit-flex-container">
        
        <div className="credit-flex-content">
          <div className="credit-flex-left">
            <img src={pic3} alt="Increase Credit" />
            <h3> To track your credit score, EMI payment trends and much more
          </h3>
            <ul>
              <li>We will update you with monthly credit reports for 12 months.
            </li>
              <li>Helps in tracking your credit score trend, account mix and history of EMI payments.</li>
            </ul>
          </div>
          <div className="credit-flex-right">
            <h3>
            To stop your credit score from falling!</h3>
            <ul>
              <li>Helps in identifying accounts affecting your credit score.
              </li>
              <li>Get step by step guidance to resolve it
             </li>
             <li>
             Get it corrected with the Credit Bureau.
             </li>
            </ul>
            <img src={pic4} alt="Reduce EMI Costs" />
          </div>
        </div>
      </div>
    );
  };

export default CreditInfo;
