import React from 'react';
import './PlanFeatures.css'; // Make sure the CSS file is in the same directory
import pic1 from './pic1.png'; // Path to your first image
import pic2 from './pic2.png'; // Path to your second image

const PlanFeatures = () => {
 
    return (
      <div className="credit-flex-container-p">
       
        <div className="credit-flex-content-p">
          <div className="credit-flex-left-p">
            <img src={pic1} alt="Increase Credit-p" />
            <h3>Comparison with Other Solutions</h3>
            <ul  >
              <li>What sets our plan apart is the combination of expert insights, personalized strategies, and a guaranteed result. This holistic approach is unmatched in the market.</li>
            </ul>
          </div>
          <div className="credit-flex-right-p">
            <h3>Plan Features</h3>
            <p style={{textAlign:"left"}}>Our plan offers a comprehensive range of features designed to guide you towards credit score improvement, including</p>

              <ul>
                <li>In-depth credit analysis</li>
                <li>Regular progress reports</li>
                <li>Clear and actionable steps for improvement</li>
              </ul>
            <img src={pic2} alt="Reduce EMI Costs" />
          </div>
        </div>
      </div>
    );
  };

export default PlanFeatures;
