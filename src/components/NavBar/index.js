import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './styles.scss';

function NavBar() {
  let match = useRouteMatch("/");

  return (
    <nav>
      <ul>
        <li><Link className={match.isExact ? "active" : null} to="/">Home</Link></li>
        <li><Link className={!match.isExact ? "active" : null} to="/logged">Loged</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;