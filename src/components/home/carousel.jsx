import React, { Component } from "react";
import Slider from "react-slick";

import "./Home.scss";

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
      <div className="carousel-bgc">
        <Slider {...settings}>
          <div className="carousel-main1">
            <div className=" container carousel-main1-left">
              <h3>LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в{" "}
                <br />
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой{" "}
                <br />
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
          </div>
          <div>
            <div className="carousel-main1">
              <div className=" container carousel-main1-left">
                <h3>
                  Lorem Ipsum является текст-заполнитель обычно используется
                </h3>
                <h1>Ламинатные тубы</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing в <br />
                  sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                <button>Send</button>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel-main1">
              <div className=" container carousel-main1-left">
                <h3>LEANGROUP - тубы и этикетки</h3>
                <h1>Ламинатные тубы</h1>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в <br />
                  сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой <br />
                  химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
