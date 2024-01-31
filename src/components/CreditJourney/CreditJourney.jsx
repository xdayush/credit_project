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
            <div className="icon-bg">🔽</div>
            <h3>REDUCE</h3>
            <p>Recommendations to reduce EMI by comparing with best available market rates.</p>
          </div>
          <div className="card">
            <div className="icon-bg">📄</div>
            <h3>BUILD</h3>
            <p>Expert guidance to improve credit score and get best loans.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-bg">🔍</div>
            <h3>MONITOR</h3>
            <p>Track your Credit Score with our monthly Credit Health Report.</p>
          </div>
          <div className="card">
            <div className="icon-bg">✅</div>
            <h3>RESOLVE</h3>
            <p>Get Actionable insights to resolve Negative accounts.</p>
          </div>
        </div>
      </div>
      
      <div className="join-cta">
        <button>JOIN F2's CREDIT-FLEX</button>
      </div>
    </div>
  );
};

export default CreditJourney;
