import React from 'react';

const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const styles = {
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popupContent: {
      background: 'linear-gradient(135deg, #0a0b61, #4a90e2)', // Blue background color
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      maxWidth: '90%',
      textAlign: 'center', // Center-align text
      color: '#fff', // White text color
    },
    h2: {
      fontSize: '30px',
      marginBottom: '10px',
      color:'white'
    },
    formGroup: {
      marginBottom: '15px',
      textAlign: 'left', // Left-align labels and inputs
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '8px',
      border: 'none',
      borderRadius: '4px',
      marginTop: '5px', // Margin between label and input
      fontSize: '14px',
    },
    checkbox: {
      marginRight: '10px',
    },
    submitButton: {
      background: '#fff', // White button background
      color: '#000', // Black text color
      border: 'none',
      padding: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
      fontSize: '16px',
      marginTop: '10px',
    },
    submitButtonHover: {
      background: '#f0f0f0',
    },
    closeButton: {
      background: '#ff5f5f',
      color: 'white',
      border: 'none',
      padding: '5px 12px',
      borderRadius: '100%',
      cursor: 'pointer',
      marginTop:'-20px',
      right: '10px',
      marginLeft: '230px'
    }
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <form>
      <button onClick={onClose} style={styles.closeButton}>X</button>
          <h2 style={styles.h2}>Get Loan</h2>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name</label>
            <input style={styles.input} type="text" id="name" name="name" required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input style={styles.input} type="email" id="email" name="email" required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="contact">Contact Number</label>
            <input style={styles.input} type="text" id="contact" name="contact" required />
          </div>
          <div style={styles.formGroup}>
            <input style={styles.checkbox} type="checkbox" id="terms" name="terms" required />
            <label style={styles.label} htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseOver={(e) => e.target.style.background = styles.submitButtonHover.background}
            onMouseOut={(e) => e.target.style.background = styles.submitButton.background}
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
