import React from 'react';
import LoginForm from '../../components/LoginForm';
import { loginController } from '../../controllers/loginController';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={loginController} />
    </div>
  );
};

export default Login;
