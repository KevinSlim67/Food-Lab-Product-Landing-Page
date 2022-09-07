import React, { Component } from "react";
import Slider from "react-slick";
import "./header.css";

class Header extends Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <button
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <img src="assets/images/icons/arrow_left.png" alt="" />
        </button>
        <button
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <img src="assets/images/icons/arrow_right.png" alt="" />
        </button>
      </div>
    );
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
    };

    let slide = (
      <div className="slide">
        <img src="/assets/images/header/image_1.png" alt="" />
        <div className="layer">
          <div className="container">
            <h2>
              Empowering Society <br />
              Through Science
            </h2>
            <p>
              Food Lab is one point solution for all <br />
              food safety needs
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    );

    return (
      <header>
        {this.renderArrows()}
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          {slide}
          {slide}
          {slide}
          {slide}
          {slide}
        </Slider>
      </header>
    );
  }
}

export default Header;
