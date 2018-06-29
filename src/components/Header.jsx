import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Kris' Taps</h1>
      <Link to="/">Home</Link> | <Link to="/brewlist">View firstlist </Link>
    </div>
  );
}

export default Header;
