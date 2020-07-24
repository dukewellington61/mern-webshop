import React from "react";
import LineItemImages from "./LineItemImages";
import QuantityField from "./QuantityField";

const LineItem = ({ line_item }) => {
  return (
    <div className="row">
      <div className="col-xl-4">
        <LineItemImages image_url={line_item.image_url} />
      </div>
      <div className="col-xl-3">
        <b>{line_item.name}</b>
        <div>colour:&nbsp;&nbsp;{line_item.colour}</div>
        <div>price:&nbsp;&nbsp;{line_item.price}</div>
      </div>
      <div className="col-xl-3">
        <QuantityField quantity={line_item.quantity} />
      </div>
    </div>
  );
};

export default LineItem;
