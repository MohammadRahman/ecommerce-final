import React from 'react'
import './icon.scss';

export const CartIcon = () => {
    return (
        <div className="cart-icon">
            {/* <ShoppingLogo className="shopping-icon" /> */}
            <span className="item-count">0</span>
        </div>
    )
}
export default CartIcon;