import React from 'react';
import './nav.css'; // Import the CSS file

const Nav = ({ setPresetTime }) => {
  return (
    <nav className="navbar">
      <button className="circle-button" onClick={() => setPresetTime(1)}>Q1</button>
      <button className="circle-button" onClick={() => setPresetTime(2)}>Q2</button>
      <button className="circle-button" onClick={() => setPresetTime(3)}>Q3</button>
      <button className="circle-button" onClick={() => setPresetTime(4)}>Q4</button>
    </nav>
  );
};

export default Nav;