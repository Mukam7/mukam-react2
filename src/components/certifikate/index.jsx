import React, { Component } from "react";
import Slider from "react-slick";

import "../certifikate/Certifikate.scss";

import certifikate from "../../assets/images/certifikate.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container certifikate">
        <h1>Качество продукции подтверждают сертификаты</h1>
        <Slider {...settings}>
          <div>
            <img src={certifikate} alt="certifikate" />
          </div>
          <div>
            <img src={certifikate} alt="certifikate" />
          </div>
          <div>
            <img src={certifikate} alt="certifikate" />
          </div>
        </Slider>
      </div>
    );
  }
}
