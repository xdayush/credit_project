import React from 'react';
import './CreditHealthReport.css';

const CheckmarkIcon = () => (
  <svg className="icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 111.06-1.06l2.75 2.75 6.72-6.72a.75.75 0 011.06 0z"/>
  </svg>
);

const CreditHealthReport = () => {
  return (
    <div className="credit-health-report">
      <h2>How can our Credit Health Reports help you?</h2>
      <div className="bullet-points-container">
        <div className="column">
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Keep track of your credit inquiries</p>
          </div>
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Identify errors, frauds and account misuse.</p>
          </div>
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Get personalised recommendations for the best loans</p>
          </div>
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Get monthly updates of all your credit activities.</p>
          </div>
        </div>
        <div className="column">
        <div className="bullet-point">
            <CheckmarkIcon />
            <p>Monitor status of positive & negative credit accounts.</p>
          </div>
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Check for missed/delayed EMIs and credit card bills..</p>
          </div>
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Get expert tips on how to boost/maintain your credit score.</p>
          </div>
          <div className="bullet-point">
            <CheckmarkIcon />
            <p>Keep track of spends and control your expenditures.</p>
          </div>

        </div>
      </div>
      <p className="cta-line">Ready to Take your Credit Health to the Next Level?</p>
      <button className="cta-button">GET STARTED NOW</button>
    </div>
  );
};

export default CreditHealthReport;
