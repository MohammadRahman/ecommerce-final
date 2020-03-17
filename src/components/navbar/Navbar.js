import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand">ecommerce</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link">
              categories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/details" className="nav-link">
              <i class="fas fa-cart-plus"></i> cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
