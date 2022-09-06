import React from "react";
import "./intro.css";

function Intro() {
  return (
    <section className="intro">
      <h2>Food Lab Food Safety Services</h2>
      <div className="split-container">
        <div className="images-container">
          <img
            className="image-1"
            src="assets/images/intro/image_1.png"
            alt="woman examining food"
          />
          <img
            className="image-2"
            src="assets/images/intro/image_2.png"
            alt="glass test tubes"
          />
          <img
            className="image-3 a"
            src="assets/images/intro/image_3.png"
            alt="woman observing a tomato with a microscope"
          />

          <img className="background" src="assets/images/intro/path.png" />
        </div>

        <div className="text-container">
          <p>
            Aperiam quia sapiente vel consequatur consequatur omnis sed autem
            quae. Ipsa et minus consequatur vero et doloribus. Ex error illum
            consequatur amet ea occaecati odit. Quia similique dolorum officiis
            distinctio magnam ut facilis. Et dolore est inventore ea et
            molestiae earum.
          </p>
        </div>
      </div>

      <img className="shape" src="assets/images/shapes/1.svg" alt="" />
    </section>
  );
}

export default Intro;
