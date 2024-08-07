import React from 'react';
import './SRC.css'; // Make sure the CSS file is in the same directory
import pic1 from './pic1.png'; // Path to your first image
import pic2 from './pic2.png'; // Path to your second image

const SRC = () => {
 
    return (
      <div className="credit-flex-container-g">
        <div className="credit-flex-content-g">
          <div className="credit-flex-left-g">
            <img src={pic1} alt="Increase Credit" />
            <h3>Plan Features.</h3>
            <h6 style={{fontWeight:'normal', textAlign:'left', marginLeft:'4vh'}}>Our plan offers a comprehensive range of features designed to guide you towards credit score improvement, including:</h6>
            <ul>
              <li>In-depth credit analysis</li>
              <li>Regular progress reports</li>
              <li>Clear and actionable steps for improvement</li>
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

export default SRC;
