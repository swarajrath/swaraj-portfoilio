import React from 'react';
import background1 from '../../images/background1.jpg'
import background2 from '../../images/background2.jpg'
import background3 from '../../images/background3.jpg';
import Slider from "react-slick";

const Carousal = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <img src={background1} alt="Background" width="100%" />
          </div>
          <div>
            <img src={background2} alt="Background" width="100%" />
            <h3>2</h3>
          </div>
          <div>
            <img src={background3} alt="Background" width="100%" />
            <h3>3</h3>
          </div>
        </Slider>
      );
}

export default Carousal
