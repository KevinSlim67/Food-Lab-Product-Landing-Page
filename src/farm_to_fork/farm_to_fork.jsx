import React from "react";
import "./farm_to_fork.css";

function FarmToFork() {
  return (
    <section className="farm-to-fork">
      <div class="line"></div>
      <div className="img-container">
        <img src="/assets/images/shapes/lighter_green_cubes.svg" alt="" />
      </div>

      <h2>
        Ensuring safety of food from <br />
        <span>Farm</span> <span>to Fork</span>
      </h2>

      <div className="container">
        <div className="field">
          <div className="img-container">
            <img src="/assets/images/farm_to_fork/1.png" alt="plants" />
            <img src="/assets/images/shapes/green_cubes.svg" alt="" />
          </div>
          <div className="text">
            <h3>
              <span>F</span>arming
            </h3>
            <ul>
              <li>Segregate crop</li>
              <li>Store crops safely</li>
              <li>Wash before manufacturing</li>
              <li>Take care of work areas</li>
            </ul>
          </div>
        </div>

        <div className="field">
          <div className="img-container">
            <img
              src="/assets/images/farm_to_fork/2.png"
              alt="people manufacturing"
            />
            <img src="/assets/images/shapes/green_cubes.svg" alt="" />
          </div>
          <div className="text">
            <h3>
              <span>M</span>anufacturing
            </h3>
            <ul>
              <li>Working with Tools</li>
              <li>Maintaining Cleanliness</li>
              <li>Wear Safety Equipment (PPE)</li>
              <li>Keep Work Areas and Emergency Exits Clear</li>
            </ul>
          </div>
        </div>

        <div className="field">
          <div className="img-container">
            <img
              src="/assets/images/farm_to_fork/3.png"
              alt="people distributing"
            />
            <img src="/assets/images/shapes/green_cubes.svg" alt="" />
          </div>
          <div className="text">
            <h3>
              <span>D</span>istribution
            </h3>
            <ul>
              <li>Focus on renewable materials a​nd packaging</li>
              <li>Alternative methods of supply</li>
              <li>Transportation safety</li>
            </ul>
          </div>
        </div>

        <div className="field">
          <div className="row">
            <div className="col">
              <div className="img-container">
                <img src="/assets/images/farm_to_fork/4.png" alt="vegetables" />
              </div>
              <h3><span>G</span>roceries</h3>
            </div>

            <div className="col">
              <div className="img-container">
                <img
                  src="/assets/images/farm_to_fork/5.png"
                  alt="people sitting outdoors"
                />
                <img src="/assets/images/shapes/green_cubes.svg" alt="" />
              </div>
              <h3><span>R</span>estaurants</h3>
            </div>
          </div>
          <div className="text">
            <ul>
              <li>Achieving Food Safety in Retail Stores</li>
              <li>Controlling Package Quality</li>
              <li>Maintaining Clean and Hygienic</li>
              <li>Food Scales</li>
              <li>Improve customer protection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FarmToFork;
