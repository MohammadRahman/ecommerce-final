import React, { Component } from "react";
import "./landingPage.scss";
import Navbar from "../../components/header/Navbar";
import { Footer } from "../../components/footer/Footer";
import Carrasoul from "../../components/carrasoul/Carrasoul";
import { TextBody } from "../../components/text-body/TextBody";
import { Link } from "react-router-dom";
import '../../components/buttons/button.scss';

export class LandingPage extends Component {
  render() {
    return (
      < div className="landing-page-image">
        <div className="section-1">
          <div className="row">
            <div className="col-md-6">
              <TextBody></TextBody>
              <Link to="categories" className="button" style={{marginLeft:'250px'}}>Start shopping</Link>
            </div>
            <div className="col-md-6">
              <Carrasoul></Carrasoul>
            </div>
          </div>
        </div>
        <div className="section-2 py-5">
          <h3 className="text-center lead ">Services</h3>

          <div className="row mt-5">
            <div className="col-md-3">
              <h2 className="text-center">
                <i class="fas fa-comments fa-3x icon"></i>
              </h2>
              <h5 className="mt-4 text-center">24/7 customer service</h5>
            </div>

            <div className="col-md-3">
              <h2 className="text-center">
                <i class="fas fa-key fa-3x icon"></i>
              </h2>
              <h5 className="mt-4 text-center">Secure Payment</h5>
            </div>

            <div className="col-md-3">
              <h2 className="text-center">
                <i class="fas fa-globe fa-3x icon"></i>
              </h2>
              <h5 className="mt-4 text-center">World wide shopping</h5>
            </div>

            <div className="col-md-3">
              <h2 className="text-center">
                <i class="fas fa-search-location fa-3x icon"></i>
              </h2>
              <h5 className="mt-4 text-center">Track your products</h5>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default LandingPage;
