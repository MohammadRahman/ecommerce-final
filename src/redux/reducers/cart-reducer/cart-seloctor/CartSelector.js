import { createSelector } from 'reselect';
import { CartItem } from '../../../../components/cart/cart-items/CartItem';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
); 

export const cartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
    );

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity,cartItem)=> (accumalatedQuantity + cartItem.quantity)*cartItem.price,0)
) 