import React from 'react';
import './CreditJourney.css';

const CreditJourney = () => {
  return (
    <div className="credit-journey-container">
      <div className="header">
        <h2 className="title">4 STEP JOURNEY TOWARDS CREDIT EXCELLENCE</h2>
        <p>The 4 step journey is a tailor-made action plan, to ensure your credit score shows improvement, no matter what the current score may be.</p>
      </div>
      <div className="cards-container">
        <div className="column">
          <div className="card">
            <i class="fa-solid fa-school icon-bg"></i>
            <h3>REDUCE</h3>
            <p>Recommendations to reduce EMI by comparing with best available market rates.</p>
          </div>
          <div className="card">
          <i class="fa-solid fa-blender-phone icon-bg"></i>
            <h3>BUILD</h3>
            <p>Expert guidance to improve credit score and get best loans.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <i class="fa-solid fa-magnifying-glass icon-bg"></i>
            <h3>MONITOR</h3>
            <p>Track your Credit Score with our monthly Credit Health Report.</p>
          </div>
          <div className="card">
          <i class="fa-regular fa-lightbulb icon-bg"></i>
            <h3>RESOLVE</h3>
            <p>Get Actionable insights to resolve Negative accounts.</p>
          </div>
        </div>
      </div>
      
      <div className="join-cta">
        <a className='btn-join-cta' href='#card1'>JOIN F2's CREDIT-FLEX</a>
      </div>
    </div>
  );
};

export default CreditJourney;
