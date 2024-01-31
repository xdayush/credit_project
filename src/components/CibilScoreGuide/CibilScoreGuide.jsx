import React from 'react';
import './CibilScoreGuide.css'; // Make sure the CSS file is in the same directory

const CibilScoreGuide = () => {
  return (
    <div className="cibil-score-guide">
      <h2>Your CIBIL Score: Quick Guide</h2>
      <div className="columns-container">
        <div className="column">
          <div className="card">
            <h3>KNOW YOUR CIBIL SCORE?</h3>
            <p>A CIBIL score is a three-digit number between 300 and 900 that gives potential lenders a quick idea of your loan.</p>
          </div>
          <div className="card">
            <h3>WHAT IS CREDIT REPAIR?</h3>
            <p>Credit repair involves rebuilding your credit health to a level where you become eligible for loans.</p>
          </div>
          <div className="card">
            <h3>WHAT IS A CREDIT REPORT?</h3>
            <p>A credit report is a history of your credit behaviour and contains detailed information on all your loan and credit.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h3>GOOD CIBIL SCORE FOR LOANS?</h3>
            <p>CIBIL plays an important role in getting loans and credit cards because it gives lenders an accurate idea of your credit-worthiness.</p>
          </div>
          <div className="card">
            <h3>WHAT IS A BAD CREDIT SCORE?</h3>
            <p>A bad credit score is generally one that is less than 700. It happens due to recent bouncing and payment pattern.</p>
          </div>
          <div className="card">
            <h3>HOW TO IMPROVE CIBIL SCORE?</h3>
            <p>There are several ways in which you can improve your credit score. Depending on how good or bad your score is.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CibilScoreGuide;
