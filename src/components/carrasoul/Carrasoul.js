import React, { Component } from "react";
import "./carusoul.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Carrasoul extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carusoul-container">
        <Slider {...settings}>
          <div className="">
            <img src="/images/car1.png" alt="" />
          </div>
          <div>
            <img src="/images/car2.jpg" alt="" />
          </div>
          <div>
            <img src="/images/car3.jpg" alt="" />
          </div>
          <div>
            <img src="/images/car4.jpeg" alt="" />
          </div>
          <div>
            <img src="/images/car5.jpeg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carrasoul;
