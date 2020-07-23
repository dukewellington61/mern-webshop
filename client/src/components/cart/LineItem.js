import React from "react";
import LineItemImages from "./LineItemImages";

const LineItem = ({ line_item }) => {
  return (
    <div className="row">
      <div>
        <LineItemImages image_url={line_item.image_url} />
      </div>
      <div>{line_item.name}</div>
      <div>{line_item.quantity}</div>
    </div>
  );
};

export default LineItem;
