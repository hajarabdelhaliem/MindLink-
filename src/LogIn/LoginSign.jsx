import React, { useState } from 'react';
import './styles.css';
import { act } from '@testing-library/react';

const LoginSign = () => {

  const [action,setAction] = useState("Log In")
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const handleOpenForgotPasswordModal = () => {
    setShowForgotPasswordModal(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
    setForgotPasswordEmail(''); // Clear email on close
  };

  const handleResetPassword = () => {
    // Placeholder for actual password reset logic
    console.log("Resetting password for:", forgotPasswordEmail);
    handleCloseForgotPasswordModal();
  };

  return (
    <div className="login-page-wrapper">
      <div className="welcome-text-section">
        <h1 className="main-welcome-text">Welcome to<br /><span className="mindlink-text">MindLink!</span></h1>
        <p className="sub-welcome-text">Linking hearts, changing minds.</p>
      </div>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
          </div>
          <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
            <label htmlFor="profile-upload">
                  <i className="uil uil-user"></i>
                </label>
              <input placeholder='Name' type="text"/>
            </div>}

            <div className='input'>
            <label htmlFor="profile-upload">
                  <i className="uil uil-envelope"></i>
                </label>
              <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
            <label htmlFor="profile-upload">
                  <i className="uil uil-lock"></i>
                </label>
              <input type="password" placeholder='Password' />
            </div>
          </div>
          {action==="Sign Up"?<div></div>: <div className='forgot-password'>Forgot Password?<span onClick={handleOpenForgotPasswordModal}> Click Here</span></div>}
          <div className='submit-container'>
            <div className={action==="Sign Up"?"submit":"submit gray"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Login"?"submit":"submit gray"} onClick={()=>{setAction("Login")}}>Login</div>
          </div>

          {/* Forgot Password Modal */}
          {showForgotPasswordModal && (
            <div className={`modal-overlay ${showForgotPasswordModal ? 'visible' : ''}`} onClick={handleCloseForgotPasswordModal}> {/* Close modal when clicking outside */}
              <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
                <h2>Reset Password</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
                <button onClick={handleResetPassword} disabled={!isValidEmail(forgotPasswordEmail)}>Reset Password</button>
                <button onClick={handleCloseForgotPasswordModal}>Cancel</button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default LoginSign;

const isValidEmail = (email) => {
  // Basic email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};