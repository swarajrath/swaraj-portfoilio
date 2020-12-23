import React from 'react';
import swaraj1 from '../../images/swaraj2.jpg'
import background2 from '../../images/background2.jpg'
// import background3 from '../../images/background3.jpg';
import Slider from "react-slick";

const Carousal = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings} style={{marginBottom: "-5px"}}>
          <div>
            <img src={swaraj1} alt="Background" width="100%" height="50%"/>
          </div>
          <div>
            <img src={background2} alt="Background" width="100%" height="50%"/>
          </div>
        </Slider>
      );
}

export default Carousal
