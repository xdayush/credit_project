import React from 'react';
import './GandA.css'; // Make sure the CSS file is in the same directory
import pic1 from './pic1.png'; // Path to your first image
import pic2 from './pic2.png'; // Path to your second image

const GandA = () => {
 
    return (
      <div className="credit-flex-container-g">
        <div className="credit-flex-content-g">
          <div className="credit-flex-left-g">
            <img src={pic1} alt="Increase Credit" />
            <h3>Guarantee and Assurance.</h3>
            <ul>
              <li>Guaranteed for 6 Months: We promise it works, proven by many happy stories.</li>

              <li>Money Stories Changed: People tell us how much better they are with money now. 
              </li>
            </ul>
          </div>
          <div className="credit-flex-right-g">
            <h3>Eligibility Criteria</h3>
            <ul>
              <li>Anyone struggling with their CIBIL score can join.</li>
              <li>Our process is simple, making help easy to get.</li>
            </ul>
            <img src={pic2} alt="Reduce EMI Costs" />
          </div>
        </div>
      </div>
    );
  };

export default GandA;
