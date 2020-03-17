import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer lead bg-dark">
      <div className="row">
        <div className="col-md-3">
          <h2>///ecommerce</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi
            voluptas voluptatibus praesentium rem quis, quod explicabo doloribus
            dicta adipisci, commodi molestiae porro quas, nostrum quia? Est
            nihil dolore non.
          </p>
        </div>
        <div className="col-md-3">
          <h2>Useful links</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link>event</Link>
            </li>
            <li className="list-group-item">
              <Link>carrer</Link>
            </li>
            <li className="list-group-item">
              <Link>delivery</Link>
            </li>
            <li className="list-group-item">
              <Link>support</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2>follow us</h2>
          <p>Please follow us on our social media platform links</p>
          <div className="row">
            <div className="col-3">
              <i class="fab fa-instagram fa-3x"></i>
            </div>
            <div className="col-3">
              <i class="fab fa-facebook-f fa-3x"></i>
            </div>
            <div className="col-3">
              <i class="fab fa-twitter fa-3x"></i>
            </div>
            <div className="col-md-3">
              <i class="fab fa-linkedin-in fa-3x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h2>Our news letter</h2>
          <p>your feedback will help us to improve our service</p>
          <form action="">
            <input type="email" />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </footer>
  );
};
