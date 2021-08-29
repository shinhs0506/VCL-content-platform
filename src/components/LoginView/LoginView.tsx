import React from 'react';
import {useHandleLogin} from './LoginService';
import LoginForm from './LoginForm';
import './LoginView.css';

const LoginView = () => {
  const {handleLogin, isFetching, error} = useHandleLogin();

  const handleUserLogin = (user: string, pwd: string) => {
    handleLogin(user, pwd);
  }

  return(
    <div className="login-view-root">
      <LoginForm onSubmit={handleUserLogin} disabled={isFetching}/>
      {error && <p className="login-error">{`Error: ${error}`}</p>}
    </div>
  )
}



export default LoginView;