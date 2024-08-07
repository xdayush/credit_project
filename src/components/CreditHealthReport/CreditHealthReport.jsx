import React, { useState } from 'react';
import './CreditHealthReport.css';
// import ContactForm from './Contactform/ContactForm'
import EmailForm from './Contactform/EmailForm';

const CreditHealthReport = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="credit-health-report">
      <h2>Credit Health Report</h2>
      <div className="bullet-points-container">
        <div className="column">
          <div className="bullet-point">
           
            <p><i className='fas fa-check mx-2'></i>Keep track of your credit inquiries</p>
          </div>
          <div className="bullet-point">
            
            <p><i className='fas fa-check mx-2'></i>Identify errors, frauds and account misuse.</p>
          </div>
          <div className="bullet-point">
            
            <p><i className='fas fa-check mx-2'></i>Get personalised recommendations for the best loans</p>
          </div>
          <div className="bullet-point">
            
            <p><i className='fas fa-check mx-2'></i>Get monthly updates of all your credit activities.</p>
          </div>
        </div>
        <div className="column">
          <div className="bullet-point">
           
            <p><i className='fas fa-check mx-2'></i>Monitor status of positive & negative credit accounts.</p>
          </div>
          <div className="bullet-point">
            
            <p><i className='fas fa-check mx-2'></i>Check for missed/delayed EMIs and credit card bills.</p>
          </div>
          <div className="bullet-point">
           
            <p style={{textWrap:"nowrap"}} ><i className='fas fa-check mx-2'></i>Get expert tips on how to boost/maintain your credit score.</p>
          </div>
          <div className="bullet-point">
           
            <p><i className='fas fa-check mx-2'></i>Keep track of spends and control your expenditures.</p>
          </div>
        </div>
      </div>
      <div className="cta-line">Need more help? Contact us.</div>
      <button className="cta-button" onClick={openForm}>Contact Us</button>

      <EmailForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
};

export default CreditHealthReport;
