import React from "react";
import "./service.css";
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <>
      <div class="wrapper">
        <h1> OUR SERVICES</h1>
        <div class="container">
          <div class="box">
            <img src="/image/travel.webp" />
            <h3><a style={{textDecoration:'none'}} href="https://worldwidetourstravels.com/">worldwidetourstravels</a></h3>
            <p>"Discover our services available worldwide."</p>
          </div>

          <div class="box">
            <img src="/image/hotel.jpg" />
            <h3> <a style={{textDecoration:'none'}}href="https://www.goibibo.com/hotels/hotels-in-indore-ct/">HOTEL BOOKING</a></h3>
            <p>"Book your perfect stay with our seamless hotel reservation services."</p>
          </div>
          <div class="box">
            <img src="/image/travel guide.webp" />
            <h3><a style={{textDecoration:'none'}} href="https://www.makemytrip.com/travel-guide/">travel guide</a></h3> 
            <p>"Embark on unforgettable journeys with our expert tour guides."</p>
          </div>
          <div class="box">
            <img src="/image/OIP (1).jpeg" />
            <h3> <a style={{textDecoration:'none'}}href="https://www.zomato.com/india">FOOD</a></h3>
            <p>"Indulge in a culinary adventure with our delectable food services."</p>
          </div>
          <div class="container">
            <div class="box">
              <img src="/image/traking.jpeg" />
              <h3> <a style={{textDecoration:'none'}} href="https://www.thrillophilia.com/trekking-india">TREKKING</a></h3>
              <p>"Embark on an unforgettable trekking adventure with our expert guides."</p>
            </div>
          </div>
          <div class="container">
            <div class="box">
              <img src="/image/R.png" />
              <h3> <a style={{textDecoration:'none'}} href="https://cybercrime.gov.in/">24*7</a></h3>
              <p>"Get peace of mind with our 24/7 support, ready to assist you anytime, anywhere."</p>
            </div>
          </div>

          <div class="container">
            <div class="box">
              <img src="/image/Rapido-logo.png" alt="" />
             <h3><a style={{textDecoration:'none'}}href="https://www.rapido.bike/">transportation</a></h3> 
              <p>"Experience seamless transportation with our efficient and reliable services."</p>
            </div>
          </div>
          <div class="container">
            <div class="box">
              <img src="/image/hospitals.png" />
              <h3> <a style={{textDecoration:'none'}} href="https://www.justdial.com/Indore/Hospitals">HOSPITALS</a></h3>
              <p>"Your health is our priority - discover our advanced medical facilities and expert staff."</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
