import React from 'react'
import fb from '../asserts/fb.png'
import insta from '../asserts/insta.jpg'
import twitter from '../asserts/twitter.png'

const Footer = () => {
  return (
    <div className="footer">
      <a href="#">Copyright</a>
      <a href="#">Terms and Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookies</a>
      <a href="#">Complaints</a>
      <div className="social-icons">
        <img src={fb} alt="facebook-icon" className="logo" />
        <img src={insta} alt="instagram-icon" className="logo" />
        <img src={twitter} alt="twitter-icon" className="logo" />
      </div>
    </div>
  );
};

export default Footer;