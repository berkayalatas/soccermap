import { FunctionComponent, Fragment, useContext } from 'react';
import { AppContext, AppContextType } from '../../context/AppContext';

const Login: FunctionComponent = () => {
  const { app, setApp } = useContext(AppContext) as AppContextType;
  const handleLogin = () => {
    setApp({
      ...app,
      isAuthenticated: true,
    });
  };
  return (
    <Fragment>
      <h3>Edit components/Login/Login.tsx</h3>
      <button onClick={handleLogin}>LOGIN</button>
    </Fragment>
  );
};

export default Login;
