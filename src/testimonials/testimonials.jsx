import React, { useRef, useState } from "react";
import "./testimonials.css";

function Testimonials() {
  const [scrollPos, setScrollPos] = useState(0);
  const [clickedOnce, setClickedOnce] = useState(false);
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setScrollPos(ref.current.scrollLeft);
    setClickedOnce(true); //helps us render the right button by letting us generate it if no button has been clicked yet
  };

  let card = (
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
      <div className="slider" ref={ref}>
        {card}
        {card}
        {card}
        {card}

        <div className="fade"></div>

        {scrollPos !== 0 && (
          <button className="left" onClick={() => scroll(-100)}>
            <img src="assets/images/icons/arrow_left_2.png" alt="" />
          </button>
        )}

        {(!clickedOnce || scrollPos !== ref.current.scrollLeftMax) && (
          <button className="right" onClick={() => scroll(100)}>
            <img src="assets/images/icons/arrow_right_2.png" alt="" />
          </button>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
