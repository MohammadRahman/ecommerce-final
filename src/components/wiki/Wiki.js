import React from "react";
import "./wiki.scss";
import { Intro } from "../intro-section/Intro";
import { Link } from "react-router-dom";

export class Wiki extends React.Component {
  //   state = {
  //     technologies: [
  //       {
  //         id: 1,
  //         title: "React",
  //         reason: "Front End"
  //       },
  //       {
  //         id: 2,
  //         title: "Firebase",
  //         reason: "Storage"
  //       },
  //       {
  //         id: 3,
  //         title: "Stripe",
  //         reason: "Payments"
  //       },
  //       {
  //         id: 1,
  //         title: "SCSS",
  //         reason: "Styling"
  //       }
  //     ]
  //   };
  render() {
    // const { technologies } = this.state;
    return (
    
    // new styles start from here.!

      <div className="main-container">
        <div className="section-title"><h2>Wiki Page</h2></div>
        <div className="container-content-one">
          <div className="content-one-left-member">
            <h2>Obaidur Rahman</h2>
            <span className="sub-title">Fullstack Developer</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="content-one-right-member">
            <img className="content-image" src="/images/img_s.svg" alt=""/>
          </div>
        </div>
        <div className="content-container-two">
          <div className="content">Hello Dear.! </div>
          <div className="content">Hello Dear.! </div>
          <div className="content">Hello Dear.! </div>
          <div className="content">Hello Dear.! </div>
          
          
        </div>
    </div>
      // <div className="main-container">
      /* <div className="title">
          <h1>WIKI</h1>
        </div>
        <div className="section-1">
          <div className="screen-left">
            <h1 className="name">Mohammad Obaidur Rahman</h1>
            <span className="sub-title">
              <h2>Fullstack and flutter developer</h2>
            </span>
          </div>
          <div className="screen-right">
            <div className="image-container">
              <img src="/images/apu vai.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="title">
            <h1>Software Project Development</h1>
          </div>
          <div className="row">
            <div className="col-md-7 py-5 mx-auto">
              <p>My final project will be a server-less e-commerce store</p>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="title lead">
            <h1>TECH STACK</h1>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="title lead">
                <h1>React</h1>
              </div>
              <p>
                <span className="text-success">
                  <h3>Front-end</h3>
                </span>
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore suscipit, aperiam quos sit laborum voluptas natus
                recusandae obcaecati harum quibusdam pariatur aliquam. Quas
                tempore, non quasi magnam beatae veritatis minima!
              </p>
            </div>
            <div className="col-md-3">
              <div className="title lead">
                <h1>Redux</h1>
              </div>
              <p>
                <span className="text-success">
                  <h3>State management</h3>
                </span>
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore suscipit, aperiam quos sit laborum voluptas natus
                recusandae obcaecati harum quibusdam pariatur aliquam. Quas
                tempore, non quasi magnam beatae veritatis minima!
              </p>
            </div>
            <div className="col-md-3">
              <div className="title lead">
                <h1>Stripe</h1>
              </div>
              <p>
                <span className="text-success">
                  <h3>Payment</h3>
                </span>
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore suscipit, aperiam quos sit laborum voluptas natus
                recusandae obcaecati harum quibusdam pariatur aliquam. Quas
                tempore, non quasi magnam beatae veritatis minima!
              </p>
            </div>
            <div className="col-md-3">
              <div className="title lead">
                <h1>SCSS</h1>
              </div>
              <p>
                <span className="text-success">
                  <h3>Styling</h3>
                </span>
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore suscipit, aperiam quos sit laborum voluptas natus
                recusandae obcaecati harum quibusdam pariatur aliquam. Quas
                tempore, non quasi magnam beatae veritatis minima!
              </p>
            </div>
          </div>
        </div>
      </div>
    ); */

    );
  }
}
