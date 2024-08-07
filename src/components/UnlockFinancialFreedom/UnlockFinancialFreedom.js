import React from 'react';
import './uff.css'; // Import the CSS file

export default function UnlockFinancialFreedom() {
  return (
    <div className='uff-main'>
      <div className="top-uff ">
        <h1>Unlock <div className="highlight">Financial Freedom:</div></h1>
      </div>
      <div className='body-uff roboto-thin '>
        <h1>F2 Fintech's Tailored<span className="blue container ">CIBIL Improvement Plan</span>for Poor Credit Scorers.</h1>
        <p  style={{fontSize:"28px" }} >This plan is designed to help individuals of all backgrounds<br/>
          who are facing challenges in achieving a strong credit<br/>
          score and are seeking effective solutions.</p>
        <h6 className='uff-text'><b>Are you ready to join the next revolution
          <br/><span className='uff-text'>towards Credit improvement journey.</span></b></h6>
        <a href='#card2' className='btn btn-dark scroll-btn'>Scroll down for more</a>
      </div>
      <div className='image-section-f'>
        <img className='img-f' style={{height:'70vh'}} src='./img/poor credit score introduction.png' alt="Illustration" />
      </div>
    </div>
  );
}
