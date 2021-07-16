import { createContext, useContext } from 'react';

const LoginContext = createContext();

function LoginProvider({ children }) {

  return (
    <LoginContext.Provider
      value={{}}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  return useContext(LoginContext);
}

export { LoginProvider, useLogin };