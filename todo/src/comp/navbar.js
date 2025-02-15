import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
       
        <li>
          <Link to="/login">Login</Link>
        </li>
       
      </ul>
      <h1>Your Todos</h1>
    </nav>
  );
}

export default Navbar;
