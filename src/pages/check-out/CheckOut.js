import React from 'react'
import './checkOut.scss';
import {createStructuredSelector} from 'reselect'
import { CartItem } from '../../components/cart/cart-items/CartItem'
import { selectCartTotal, selectCartItems} from '../../redux/reducers/cart-reducer/cart-seloctor/CartSelector'
import {connect} from 'react-redux'
import { CheckoutItem } from './checkout-item/CheckoutItem';

const CheckOut = ({ cartItems,total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block ">
                    <span>Description</span>
                </div>
                <div className="header-block ">
                        <span>Quantity</span>
                </div>
                <div className="header-block ">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
         </div>  
         {/* {
          cartItems.length ?
          cartItems.map(item => 
          <CartItem key={item.id} item={item} />
        ) : <span className="lead text-center text-danger">Your Cart is Empty</span>} */}

            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item}></CheckoutItem>)
            }
            <hr></hr>
            <div className="total">
                <div className="title">total:</div>
                <div className="price">${total}</div>
            </div>
            
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
    
  })
  export default connect(mapStateToProps) (CheckOut);