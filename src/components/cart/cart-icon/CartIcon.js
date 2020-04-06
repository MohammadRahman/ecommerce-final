import React from 'react'
import './icon.scss';

export const CartIcon = () => {
    return (
        <div className="cart-icon">
            <i className="fas fa-shopping-cart" onClick={()=> this.setState({showDetails: !this.state.showDetails})}>
                <span className="item-count">0</span>
            </i>
        </div>
    )
}
export default CartIcon;