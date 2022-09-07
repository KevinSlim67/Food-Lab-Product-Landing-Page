import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="left">
        <ul>
          <li><img src="assets/images/brand/logo.png" alt="" /></li>
          <li>203, Abc road, xyz</li>
          <li><strong>Phone :</strong> + 91 44 4269 2288</li>
          <li><strong>Email : </strong>admin@parikshan.net.in</li>
        </ul>
      </div>

      <div className="right">
        <div className="top">
            <ul>
                <h3>Useful Link</h3>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Training Registration</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
            </ul>

            <ul>
                <li><a href="/">Support</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>

            <ul>

                <h3>Site Map</h3>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Training Registration</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Training Registration</a></li>
            </ul>
        </div>
        <div className="bottom">
            Food Labs Inc. © Copyright 2022. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
