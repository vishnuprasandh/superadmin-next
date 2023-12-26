import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    onSubmit({ mobileNumber, otp });
  };

  return (
    <form>
      <label>Mobile Number:</label>
      <input
        type="tel"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <br />
      <label>OTP:</label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <br />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
