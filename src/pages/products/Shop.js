import React, { Component } from "react";
import "./shop.scss";
import SHOP_DATA from "./products";
import { CollectionPreview } from "./collectionPreview/CollectionPreview";

export class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collection: SHOP_DATA
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-container">
        {collection &&
          collection.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview
              key={id}
              {...otherCollectionProps}
            ></CollectionPreview>
          ))}
      </div>
    );
  }
}

export default Shop;
