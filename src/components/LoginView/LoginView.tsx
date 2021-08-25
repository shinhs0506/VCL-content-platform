import React from 'react';
import {useHandleLogin} from './LoginService';
import LoginForm from './LoginForm';
import './LoginView.css';

const LoginView = () => {
  const {handleLogin, isFetching, error} = useHandleLogin();

  const handleUserLogin = (user: string, pwd: string) => {
    handleLogin(user, pwd);
  }

  // React.useEffect(() => {
  //   console.log("isFetching: ", isFetching);
  // }, [isFetching]);

  // React.useEffect(() => {
  //   console.log("error: ", error);
  // }, [error]);

  return(
    <div className="login-view-root">
      <LoginForm onSubmit={handleUserLogin} disabled={isFetching}/>
    </div>
  )
}

export default LoginView;