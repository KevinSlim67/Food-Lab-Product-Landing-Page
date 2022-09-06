import React, { Component } from "react";
import Slider from "react-slick";
import "./header.css";

class Header extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
    };

    return (
      <header>
        <Slider {...settings}>
          <div className="slide">
            <img src="/assets/images/header/image_1.png" />
            <div className="layer">
                <div className="container">
                    <h2>Empowering Society <br />Through Science</h2>
                    <p>Food Lab is one point solution for all <br />food safety needs</p>
                    <button>Get Started</button>
                </div>
            </div>
          </div>

          <div className="slide">
            <img src="/assets/images/header/image_1.png" />
            <div className="layer">
                <div className="container">
                    <h2>Empowering Society <br />Through Science</h2>
                    <p>Food Lab is one point solution for all <br />food safety needs</p>
                    <button>Get Started</button>
                </div>
            </div>
          </div>


          <div className="slide">
            <img src="/assets/images/header/image_1.png" />
            <div className="layer">
                <div className="container">
                    <h2>Empowering Society <br />Through Science</h2>
                    <p>Food Lab is one point solution for all <br />food safety needs</p>
                    <button>Get Started</button>
                </div>
            </div>
          </div>

          <div className="slide">
            <img src="/assets/images/header/image_1.png" />
            <div className="layer">
                <div className="container">
                    <h2>Empowering Society <br />Through Science</h2>
                    <p>Food Lab is one point solution for all <br />food safety needs</p>
                    <button>Get Started</button>
                </div>
            </div>
          </div>

          <div className="slide">
            <img src="/assets/images/header/image_1.png" />
            <div className="layer">
                <div className="container">
                    <h2>Empowering Society <br />Through Science</h2>
                    <p>Food Lab is one point solution for all <br />food safety needs</p>
                    <button>Get Started</button>
                </div>
            </div>
          </div>

        </Slider>
      </header>
    );
  }
}

export default Header;
