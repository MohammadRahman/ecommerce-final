import React from 'react'
import './checkOut.scss'
// import CartDropDown from '../../components/cart-drop-down/CartDropDown'
import { CartItem } from '../../components/cart-items/CartItem'
import {connect} from 'react-redux'

const CheckOut = ({ cartItems }) => {
    return (
        <div className="check-out-container">
            <div className="header">
                <div className="header-row">
                    <span>Products</span>
                </div>
                <div className="header-row">
                    <span>Description</span>
                </div>
                <div className="header-row">
                        <span>Quantity</span>
                </div>
                <div className="header-row">
                    <span>Price</span>
                </div>
                <div className="header-row">
                    <span>Remove</span>
                </div>
         </div>  
            
            {
                cartItems ?
                    cartItems.map(item =>
                        <div className="item"><CartItem key={item.id} item={item}></CartItem></div>
                        )
                    : <span className="lead text-center text-danger">Your Cart is Empty</span>
            }
            
            
        </div>
    )
}
const mapStateToProps = state => ({
    cartItems:state.cart.cartItems
  })
  export default connect(mapStateToProps) (CheckOut);