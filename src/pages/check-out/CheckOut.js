import React from 'react'
import './checkOut.scss';
import {createStructuredSelector} from 'reselect'
import { CartItem } from '../../components/cart/cart-items/CartItem'
import { selectCartTotal, selectCartItems} from '../../redux/reducers/cart-reducer/cart-seloctor/CartSelector'
import {connect} from 'react-redux'

const CheckOut = ({ cartItems,total}) => {
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
         {/* {
          cartItems.length ?
          cartItems.map(item => 
          <CartItem key={item.id} item={item} />
        ) : <span className="lead text-center text-danger">Your Cart is Empty</span>} */}

            {
                cartItems.length ?
                    cartItems.map(item =>
                        <div className="item"><CartItem key={item.id} item={item}></CartItem></div>
                        )
                    : <span className="lead text-center text-danger">Your Cart is Empty</span>
            }
            <hr></hr>
            <div className="sub-total">
                <div className="title">total -</div>
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