import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import  CartDropDown  from "../cart/cart-drop-down/CartDropDown";
import { connect } from "react-redux";
import { auth } from '../../firebase/config'
import CartIcon from "../cart/cart-icon/CartIcon";


export const Navbar = ({ currentUser }) => {
  
  return (
    <div className="header">
  <Link to="/" className="logo-container">ecommerce</Link>
          <div className="options">
              <Link to="/" className="option">
                Home
              </Link>
              <Link to="/categories" className="option">
                Categories
              </Link>
                 <Link to="/collections" className="option">
               Shop
              </Link>

              <Link to="/checkout" className="option">
                cart
              </Link>


          {currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign-out</div>  
                : <Link to="/login" className="nav-link">Sign-in</Link>
            }
      </div>  
      </div>
 
          );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Navbar)