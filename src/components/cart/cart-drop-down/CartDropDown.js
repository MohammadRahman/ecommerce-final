import React, { Component } from "react";
import "./cartDropdown.scss";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { CartItem } from "../cart-items/CartItem";

const CartDropDown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(item => 
          <CartItem key={item.id} item={item} />
        ) : <span className="lead text-center text-danger">Your Cart is Empty</span>}
      </div>
      <Link to="/checkout"
        className="btn btn-block btn-dark"
        >Go to checkout</Link>
    </div>
  );
};
const mapStateToProps = state => ({
  cartItems:state.cart.cartItems
})
export default connect(mapStateToProps) (CartDropDown);
