import React, { useState } from 'react';

const ForgetPasswordForm = ({ onSubmit, onResendOtp }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleForgetPassword = () => {
    onSubmit({ mobileNumber, otp });
  };

  const handleResendOtp = () => {
    onResendOtp({ mobileNumber });
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
      <button type="button" onClick={handleForgetPassword}>
        Reset Password
      </button>
      <button type="button" onClick={handleResendOtp}>
        Resend OTP
      </button>
    </form>
  );
};

export default ForgetPasswordForm;
