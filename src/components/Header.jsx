import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Kris Taps</h1>
      <Link to="/">Home</Link> | <Link to="/brewform">Suggest a brew</Link> | <Link to="/upcomingbrews">Upcoming Brews</Link>
    </div>
  );
}

export default Header;
