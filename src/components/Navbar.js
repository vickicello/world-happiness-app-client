import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '200px',
  padding: '12px',
  margin: '10px 6px 6px 10px',
  background: '#a6a6a6',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyle}
        activeStyle={{
          background: '#e8e8ef'
        }}
        >Home</NavLink>
      <NavLink
        to="/countries"
        exact
        style={linkStyle}
        activeStyle={{
          background: '#e8e8ef'
        }}
        >Countries</NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyle}
        activeStyle={{
          background: '#e8e8ef'
        }}
        >About</NavLink>
    </div>
  )
}

export default Navbar;