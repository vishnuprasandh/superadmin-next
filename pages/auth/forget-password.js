import React from 'react';
import ForgetPasswordForm from '../../components/ForgetPasswordForm';
import { forgetPasswordController, resendOtpController } from '../../controllers/forgetPasswordController';

const ForgetPassword = () => {
  return (
    <div>
      <h1>Forget Password</h1>
      <ForgetPasswordForm onSubmit={forgetPasswordController} onResendOtp={resendOtpController} />
    </div>
  );
};

export default ForgetPassword;
