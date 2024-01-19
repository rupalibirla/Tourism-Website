import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <div class="sec">
        <div class="con">
          <div class="con-sec">
            <div class="title2">
              <h1>About Us</h1>
            </div>
            <div class="con">
              <h4>
                Get the best recommendations from locals who love their cities
              </h4>
              <p>
                In each and every destination, you will find information,
                advice, and experiences from locals. Learn about the latest
                recommendations on attractions, places to eat, shop and much
                more.
              </p>
              <div class="butt">
                <button>Read More</button>
              </div>
            </div>
            
          </div>
          <div class="image-sec">
            <img src="/image/about.jpg" alt=" " />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
