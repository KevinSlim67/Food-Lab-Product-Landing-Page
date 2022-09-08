import React, { useRef, useState } from "react";
import "./testimonials.css";

function Testimonials() {
  const buttonHeld = useRef(false);
  const sliderDiv = useRef(null);
  const [leftVisible, setLeftVisible] = useState("none");
  const [rightVisible, setRightVisible] = useState("block");

  const leftStyle = { display: leftVisible };
  const rightStyle = { display: rightVisible };

  const scroll = (scrollOffset) => {
    sliderDiv.current.scrollLeft += scrollOffset;

    //if scrollbar is at 0, hide the left button, otherwise, display it
    if (sliderDiv.current.scrollLeft !== 0) setLeftVisible("block");
    else {
      setLeftVisible("none");
      stopScroll();
    }

    //if scrollbar is at its max value, hide the right button, otherwise, display it
    if (sliderDiv.current.scrollLeft !== sliderDiv.current.scrollLeftMax)
      setRightVisible("block");
    else {
      setRightVisible("none");
      stopScroll();
    }

    if (buttonHeld.current) {
      setTimeout(() => scroll(scrollOffset), 30);
    }
  };

  const stopScroll = () => {
    buttonHeld.current = false;
  };

  const card = (
    <div className="card">
      <div className="top">
        <div className="img-container">
          <img
            src="assets/images/testimonials/user_profile.jpg"
            alt="User123"
          />
        </div>
        <h4>User123</h4>
      </div>
      <div className="bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa
          qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt
          mollit anim id est laborum.
        </p>
      </div>
    </div>
  );

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="slider" ref={sliderDiv}>
        {card}
        {card}
        {card}
        {card}

        <div className="fade"></div>

        <button
          className="left"
          style={leftStyle}
          onMouseDown={() => {
            buttonHeld.current = true;
            scroll(-20);
          }}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
        >
          <img src="assets/images/icons/arrow_left_2.png" alt="" />
        </button>

        <button
          className="right"
          style={rightStyle}
          onMouseDown={() => {
            buttonHeld.current = true;
            scroll(20);
          }}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
        >
          <img src="assets/images/icons/arrow_right_2.png" alt="" />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
