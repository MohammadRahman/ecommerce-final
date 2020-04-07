import React, { Component } from "react";
import "./cartDropdown.scss";
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { CartItem } from "../cart-items/CartItem";
import {showItem} from '../../../redux/actions/cartAction'

const CartDropDown = ({cartItems,history,dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(item => 
          <CartItem key={item.id} item={item} />
        ) : <span className="lead text-center text-danger">Your Cart is Empty</span>}
      </div>
      <button className="btn btn-dark btn-block" type="submit" onClick={() =>
      {
        history.push('/checkout');
        dispatch(showItem())
      }}>go to check-out</button>
      {/* <Link to="/checkout"
        className="btn btn-block btn-dark"
        >Go to checkout</Link> */}
    </div>
  );
};
const mapStateToProps = state => ({
  cartItems:state.cart.cartItems
})
export default withRouter(connect(mapStateToProps) (CartDropDown));
