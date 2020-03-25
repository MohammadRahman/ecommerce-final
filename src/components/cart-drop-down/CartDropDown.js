import React, { Component } from "react";
import "./cartDropdown.scss";
import { connect } from "react-redux";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <input
        className="btn btn-block btn-dark"
        type="submit"
        value="Go to Checkout"
      />
    </div>
  );
};

export default CartDropDown;
