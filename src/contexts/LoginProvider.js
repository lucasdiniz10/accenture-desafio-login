import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

function LoginProvider({ children }) {
  const data = {
    email: 'exemplo@gmail.com',
    password: '123456'
  };

  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggledIsLogged = () => {
    setIsLogged(pState => !pState)
  }

  const setEmailState = (emailField) => {
    setEmail(emailField);
  }

  const setPasswordState = (passwordField) => {
    setPassword(passwordField);
  }

  const handleClickAuth = (e) => {
    e.preventDefault();
    const sameEmail = email.trim() === data.email;
    const samePassword = password.trim() === data.password;

    if (sameEmail && samePassword) {
      toggledIsLogged();
    } else {
      alert("Preencha os campos corretamente.")
    }
    console.log(isLogged)
    console.log(email)
    console.log(password)
  }
  console.log(isLogged)

  const logout = () => {
    toggledIsLogged();
  }


  return (
    <LoginContext.Provider
      value={{
        isLogged,
        email,
        password,
        setEmailState,
        setPasswordState,
        handleClickAuth,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  return useContext(LoginContext);
}

export { LoginProvider, useLogin };