import React, { Component } from "react";
import "./landingPage.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import Carrasoul from "../../components/carrasoul/Carrasoul";
import { TextBody } from "../../components/text-body/TextBody";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="section-1">
          <div className="row">
            <div className="col-md-6">
              <TextBody></TextBody>
            </div>
            <div className="col-md-6">
              <Carrasoul></Carrasoul>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="row">
            <h2>Services</h2>
            <div className="col-md-3">
              <h3> Shop in 8 languages</h3>
              <h5>Browse or search in your language</h5>
            </div>
            <div className="col-md-3">
              <h2>Shop in 64 currencies</h2>
              <h5>Freedom to choose your preferred currency</h5>
            </div>
            <div className="col-md-3">
              <h2>Products that ship to you</h2>
              <h5>Find top products that ship to you</h5>
            </div>
            <div className="col-md-3">
              <h2>Transparent costs</h2>
              <h5>We estimate shipping and custom fees on your behalf</h5>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default LandingPage;
