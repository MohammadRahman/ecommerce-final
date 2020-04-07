import React from 'react'
import './icon.scss';
import {cartItemCount} from '../../../redux/reducers/cart-reducer/cart-seloctor/CartSelector'
import { connect } from 'react-redux';
import {showItem} from '../../../redux/actions/cartAction'

export const CartIcon = ({showItem,count}) => {
    return (
        <div className="cart-icon">
            <i className="fas fa-shopping-cart" onClick={showItem}>
                <span className="item-count">{count}</span>
            </i>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    showItem: () => dispatch(showItem())
})
const mapStateToProps = (state) => ({
    count: cartItemCount(state) 
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);