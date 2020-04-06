
import React, { Component } from "react";
import Slider from "react-slick";
import "./carusoul.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="carusoul-container">
        <Slider {...settings}>
           <div className="image">
           <img className="image" src="/images/menu_images/img.jpg" alt="" />
           </div>
           <div className="image">
           <img className="image"  src="/images/menu_images/img2.jpg" alt="" />
           </div>
           <div className="image">
           <img className="image"  src="/images/menu_images/img3.jpg" alt="" />
           </div>
           <div className="image">
           <img className="image"  src="/images/menu_images/img4.jpeg" alt="" />
           </div>
           <div className="image">
           <img className="image"  src="/images/menu_images/img6.jpeg" alt="" />
           </div>
        </Slider>
      </div>
    );
  }
}


// import React, { Component } from "react";
// import "./carusoul.scss";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export class Carrasoul extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 1000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoPlay: true,
//       autoPlaySpeed:2000
//     };
//     return (
//       <div className="carusoul-container">
//         <Slider {...settings}>
//           <div className="">
//             <img className="image" src="/images/car1.png" alt="" />
//           </div>
//           <div className="image">
//             <img className="image" src="/images/car2.jpg" alt="" />
//           </div>
//           <div className="image">
//             <img className="image" src="/images/car3.jpg" alt="" />
//           </div>
//           <div>
//             <img className="image" src="/images/car4.jpeg" alt="" />
//           </div>
//           <div className="">
//             <img className="image" src="/images/car5.jpeg" alt="" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

// export default Carrasoul;
