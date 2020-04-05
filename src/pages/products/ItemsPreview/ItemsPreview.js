import React from "react";
import "./itemsPreview.scss";
import { connect } from "react-redux";
import {addItem} from '../../../redux/actions/cartAction'
 
const ItemsPreview = ({ item, addItem }) => {
  
  const { imageUrl, name, price } = item;
  return (
    <div className="items-container">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <input className="cart-button btn btn-block btn-outline" type="submit" value="ADD TO CART" onClick={()=> addItem(item)}/>
      
      <div className="image-footer">
        <span className="name">{name} </span>
        <span className="price"> {price} </span>
      </div>
      
    </div>
  );
};
   const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
   });
  

export default connect(null, mapDispatchToProps)(ItemsPreview)
