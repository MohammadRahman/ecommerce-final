import React from "react";
import { Link } from "react-router-dom";
import  CartDropDown  from "../cart-drop-down/CartDropDown";
import { connect } from "react-redux";
import { auth } from '../../firebase/config'

export class Navbar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showDetails: false
    }
  }
  render() {
    const { showDetails } = this.state;
    const { currentUser } = this.props;
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
              <Link to="/collections" className="nav-link">
                shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i className="fas fa-cart-plus" onClick={() => {
                  this.setState({showDetails: !this.state.showDetails})
                }}/>
                cart
              </Link>
            </li>
            <li className="nav-item">
              {/* sign-in/sign-out functionality with auth */}
              {currentUser ?
                <div className="nav-link" onClick={() => auth.signOut()}>Sign-out</div>  
                : <Link to="/sign-in" className="nav-link">Sign-in</Link>
            }
            </li>
          </ul>
          {/* cart toggle */}
          {showDetails? <CartDropDown></CartDropDown>:null}
          
        </div>
      </nav>
    </div>
 
  );
}
};

// const mapStateToProps = state => ({
//   currentUser:state.auth.currentUser
// })
// export default connect(mapStateToProps)(Navbar)
export default Navbar;