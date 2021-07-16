import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './home.scss';

function Home() {
  return (
    <div className="homepage">
      <div className="welcome">
        <img src="./images/accenture-logo.svg" alt="Logo da Accenture" />
        <div className="welcomeTitle">
          <h1>Bem-vindo</h1>
          <h3>Os dados para login são:</h3>
        </div>
        <p>Email: exemplo@gmail.com</p>
        <p>Senha: 123456</p>
      </div>
      <div className="formLogin">
        <div className="title">
          <h2>Faça seu login</h2>
          <p>Preencha os dados corretamente.</p>
        </div>
        <form onSubmit={() => { }}>
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            /* error
            helperText="Email ou senha incorreta." */
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button type="submit" variant="outlined" color="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Home;