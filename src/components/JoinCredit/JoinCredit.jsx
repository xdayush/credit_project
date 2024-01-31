import React from 'react';
import './JoinCredit.css'; // Make sure the CSS file is in the same directory
import pic1 from './pic1.jpeg'; // Path to your first image
import pic2 from './pic2.jpeg'; // Path to your second image

const JoinCredit = () => {
 
    return (
      <div className="credit-flex-container">
        <h2>JOIN F2's CREDIT-FLEX</h2>
        <div className="credit-flex-content">
          <div className="credit-flex-left">
            <img src={pic1} alt="Increase Credit" />
            <h3>To increase your credit score to 800+</h3>
            <ul>
              <li>Identify and take credit products best to help you build your score.</li>

              <li>We will analyze your credit portfolio mix and provide you with insights and way forward to have the right mix of products that will help in building your credit score. 
              </li>
            </ul>
          </div>
          <div className="credit-flex-right">
            <h3>To reduce your monthly EMI costs</h3>
            <ul>
              <li>See if your loans are at the best interest rate in the market.</li>
              <li>Find out how you can manage your EMIs better.</li>
            </ul>
            <img src={pic2} alt="Reduce EMI Costs" />
          </div>
        </div>
      </div>
    );
  };

export default JoinCredit;
