import React from 'react';
import './SucessRate.css'; // Make sure the CSS file is in the same directory
import pic1 from './pic1.png'; // Path to your first image
import pic2 from './pic2.png'; // Path to your second image

const JoinCreditcheck = () => {
 
    return (
      <div className="credit-flex-container-s">
       
        <div className="credit-flex-content-s">
          <div className="credit-flex-left-s">
            <img className='pic1' src={pic1} alt="Increase Credit" />
            <h3>Risks and Considerations</h3>
            <ul  >
              <li>We believe in transparency. This section outlines the risks and sets realistic expectations, ensuring you're fully informed.</li>
            </ul>
          </div>
          <div className="credit-flex-right-s">
            <h3>Success Rate and Credibility</h3>
            <ul>
              <li>Our track record speaks for itself. With a high success rate and endorsements from industry experts, our credibility in the financial domain is well-established.</li>
             
            </ul>
            <img className='pic2' src={pic2} alt="Reduce EMI Costs" />
          </div>
        </div>
      </div>
    );
  };

export default JoinCreditcheck;
