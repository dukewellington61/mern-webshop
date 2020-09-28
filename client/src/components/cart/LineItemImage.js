import React from "react";

const LineItemImage = ({ line_item }) => {
  return (
    <img id="line_item_images" src={line_item.image_url} alt={line_item.name} />
  );
};

export default LineItemImage;
