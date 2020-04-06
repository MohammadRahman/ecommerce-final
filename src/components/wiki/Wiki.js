import React from "react";
import "./wiki.scss";
import { Intro } from "../intro-section/Intro";
import { Link } from "react-router-dom";

export class Wiki extends React.Component {
  state = {
   showDetails: false
 }
  render() {
    const { showDetails } = this.state;
    return (
     <div className="main-container">
        <div className="container-content-one">
          <div className="content-one-left-member">
            <h2>Obaidur Rahman</h2>
            <span className="sub-title"><h5>Full-Stack Developer</h5></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="tech-stack">
            <div className="tech-stack">
                <h2>Tack Stack</h2>
                <p>I have used React for front-end, Redux for state management, firebase for data storing, scss and bootstrap for styling</p>
                 <div className="button" style={{marginTop:'50px'}}>
                  <Link to="/docs">Go to Docs</Link>
                  </div> 
              </div>
        </div>
          </div>
          <div className="content-one-right-member">
            <img className="content-image" src="/images/img_s.svg" alt=""/>
          </div>
        </div>
        <div className="content-container-contact">
          <div className="content-container-three">
          <div className="content"><i class="fas fa-share-alt">Share to</i></div>
          <div className="content"><i class="fas fa-ad">recent news</i></div>
          <div className="content"><i class="fas fa-cog">settings</i></div>
          <div className="content"><i class="fas fa-wallet">wallet</i></div> 
          </div> 
         
          
          <i class="fas fa-arrow-circle-left fa-2x arrow" onClick={()=> this.setState({showDetails: !this.state.showDetails})}></i>
          {showDetails ? (
            <div className="quick-links">
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-linkedin fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
              <i className="fab fa-facebook fa-2x"></i> 
            </div>):null}
            
           
     </div>  
        </div>
    );
  }
}
