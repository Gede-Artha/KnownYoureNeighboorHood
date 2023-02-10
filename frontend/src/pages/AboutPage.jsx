import { aboutus } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";
import React from "react";

const AboutPage = () => {
  return (
    <LayoutFull>
      <div>
        <div id="about">
          <div className="about-image">
            <img src={aboutus} alt="not found" />
          </div>
          <div className="about-text">
            <h2>About our company</h2>
            <p>
            "Know-Your-Neighborhood" is application that built using
            springboot application for the back end and using React js for the front end
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </LayoutFull>
  );
};

export default AboutPage;
