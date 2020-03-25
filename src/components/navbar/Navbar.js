import React from "react";
import { Link } from "react-router-dom";
import { CartDropDown } from "../cart-drop-down/CartDropDown";
import { connect } from "react-redux";

const Navbar = ({}) => {
  return (
    <div className="">
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
              <Link className="nav-link">
                <i class="fas fa-cart-plus" />
                cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   toggleCartHidden: () => {
//     dispatch(toggleCartHidden());
//   };
// };
// export default connect(null, mapDispatchToProps)(Navbar);
export default Navbar;
