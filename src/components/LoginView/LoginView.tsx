import React from 'react';
import Modal, { ModalInjectedProps } from '@components/generics/Modal';
import { useHandleLogin } from './LoginService';
import LoginForm from './LoginForm';
import './LoginView.css';

type LoginViewProps = ModalInjectedProps;

const LoginView: React.FC<LoginViewProps> = (props) => {
  const { handleClose } = props;

  const { handleLogin, isFetching, error, success } = useHandleLogin();

  const handleUserLogin = (user: string, pwd: string) => {
    handleLogin(user, pwd);
  };

  React.useEffect(() => {
    if (success) {
      handleClose && handleClose();
    }
  });

  return (
    <div className="login-view-root">
      <LoginForm onSubmit={handleUserLogin} disabled={isFetching} />
      {error && <p className="login-error">{`Error: ${error}`}</p>}
    </div>
  );
};

export default LoginView;
