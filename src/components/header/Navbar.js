import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import  CartDropDown  from "../cart/cart-drop-down/CartDropDown";
import { connect } from "react-redux";
import { auth } from '../../firebase/config'
import CartIcon from "../cart/cart-icon/CartIcon";


export const Navbar =({currentUser})=> {
  // constructor() {
  //   super();
  //   this.state = {
  //     showDetails: false
  //   }
  // }
  // render() {
  //   const { showDetails } = this.state;
  //   const { currentUser } = this.props;
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <Link to="/" className="navbar-brand">ecommerce</Link>
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
              <Link to="/collections" className="nav-link">
                shop
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link><CartIcon /></Link> */}
              
              <Link to="/checkout" className="nav-link shopping-icon">
                <div className="shopping-icon">
                    <span className="item-count"><i className="fas fa-cart-plus">0</i></span>
                </div>
                 </Link>
                 {/* <i className="fas fa-cart-plus" onClick={() => {
                  this.setState({showDetails: !this.state.showDetails})
                }}/> */}
                
              
            </li>
            <li className="nav-item">
              {/* sign-in/sign-out functionality with auth */}
              {currentUser ?
                <div className="nav-link" onClick={() => auth.signOut()}>Sign-out</div>  
                : <Link to="/login" className="nav-link">Sign-in</Link>
            }
            </li>
          </ul>
          {/* cart toggle */}
          {/* {showDetails? <CartDropDown></CartDropDown>:null} */}
          
        </div>
      </nav>
    </div>
 
          );
// }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Navbar)
// export default Navbar;
// export default Navbar;