import React from 'react';
import './style.css';

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign up</h2>
        <input type="text" placeholder="Your Name" />
        <div style={{ display: 'flex', gap: '8px' }}>
          <select>
            <option>Year of birth</option>
            {/* Yillarni to'ldirish mumkin */}
          </select>
          <select>
            <option>birthday</option>
            {/* Kunlarni to'ldirish mumkin */}
          </select>
          <select>
            <option>Birth month</option>
            {/* Oyliklarni to'ldirish mumkin */}
          </select>
        </div>
        <input type="text" placeholder="Email address or user name" />
        <input type="password" placeholder="Password" />
        <a href="#" className="link">forgot password</a>
        <button type="submit">Login</button>
        <div className="or">or</div>
        <button type="button" className="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" height="20" />
          Google
        </button>
        <div className="footer-link">
          Already have an account? <a href="#" className="link">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Signup; 