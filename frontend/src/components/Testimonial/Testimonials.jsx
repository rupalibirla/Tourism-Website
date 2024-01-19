import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-2">
        <p>
          Mr. vinayak and his family from Sudan books a customized tour with
          Tourism of India. We are delighted to serve our guests. They booked
          their tour for Delhi, Agra, and Mussoorie. They were so amazed by
          witnessing the enchanting beauty of the UNESCO World Heritage Sites of
          Delhi and Agra. They explored the 
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-2">
        <p>
          Thank you for arranging this trip. I must appreciate the prompt
          response of yours and update at every arrangement. You really made our
          trip more memorable and thanks for the same. Driver Abdul is amazing.
          His driving is really appreicated. Overall, the trip is well organised
          and no complaints.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-2">
        <p>
          We have safely reached Mumbai. Our trip was enjoyabke and stay
          comfortable except at Raniket and Nainital and the goofup of Hotel at
          Binsar. The people at all the Hotels were good. The driver and the
          vehicle was also.good. Please convey our thanks to Raghav for
          providing Transport for visiting ISKON temple 5
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-2">
        <p>
          My wife and myself wish to thank you and your team for the beatiful
          moments we spend in India and Nepal. The trip has exceeded our
          expectations. Raoul was not only an excellent driver but an incredible
          person as well. Some of the guides made us spend unforgetable moments,
          specially in Agra, Varanasi 
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
