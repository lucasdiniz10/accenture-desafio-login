import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


import './logged.scss';

function Logged() {
  return (
    <div className="loggedPage">
      <div className="welcomeTitle">
        <h1>Parabéns, você Logou!</h1>
        <p>Aperte o botão para deslogar e ir para Home.</p>
        <Button type="submit" variant="outlined" color="primary">
          <Link to="/">Sair</Link>
        </Button>
      </div>
    </div>
  );
}

export default Logged;