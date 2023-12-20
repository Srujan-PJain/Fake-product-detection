import React from 'react';
import '../styles/loginDiv.css';
import { useNavigate } from 'react-router-dom';

function LoginDiv({ toggler }) {
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (toggler === 0) {
      navigate('/main/manufacturer');
    } else if (toggler === 1) {
      navigate('/main/supplier');
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="log-form">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="user" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="pass" />
          <button className="siginbtn" onClick={handleSignIn}>
            Sign-In
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginDiv;
