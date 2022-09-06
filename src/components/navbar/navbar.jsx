import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <img src="assets/images/brand/logo.png"/>
      <ul>
        <li><a href="fwegw" className="selected">Home</a></li>
        <li><a href="wfwef">Services</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">Co-traveller</a></li>
        <li><a href="">FAQs</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Register</a></li>

      </ul>
    </nav>
  );
}

export default NavBar;
