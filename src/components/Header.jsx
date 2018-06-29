import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>React Wk1</h1>
      <Link to="/">Home</Link> | <Link to="/list">View firstlist </Link> | <Link to="/otherlist">View other list </Link>
    </div>
  );
}

export default Header;
