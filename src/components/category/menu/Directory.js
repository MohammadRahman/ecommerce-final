import React, { Component } from "react";
import "./directory.scss";
import { MenuItem } from "../menu-item/MenuItem";
export class Directory extends Component {
  state = {
    sections: [
      {
        id: 1,
        title: "Womens",
        imageUrl: "/images/menu_images/img.jpg"
      },
      {
        id: 2,
        title: "Jackets",
        imageUrl: "/images/menu_images/img6.jpeg"
      },
      {
        id: 3,
        title: "Shoes",
        imageUrl: "/images/menu_images/img3.jpg"
      },
      {
        id: 4,
        title: "Hats",
        imageUrl: "/images/menu_images/img4.jpeg"
       
      },
      {
        id: 5,
        title: "Mens",
        imageUrl: "/images/menu_images/img2.jpg"
      }
    ]
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-container">
        {sections &&
          sections.map(({ id, imageUrl, title }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl}></MenuItem>
          ))}
      </div>
    );
  }
}


export default Directory;
