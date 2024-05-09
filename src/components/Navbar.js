import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>TRAVEL</h1>
      </div>
      <div class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Places</a></li>
        <li><a href="#">Discounts</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Booking</a></li>
      </ul>
      </div>
      <div className="signin">
        <a href="#">Sign In</a>
      </div>
      <div className="signup">
        <a href="#">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;