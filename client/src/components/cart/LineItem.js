import React from "react";
import LineItemImages from "./LineItemImages";
import QuantityField from "./QuantityField";
import RemoveLineItem from "./RemoveLineItem";

const LineItem = ({ line_item, cart }) => {
  return (
    <div id="line_item_row" className="row">
      <div className="col-xl">
        <LineItemImages image_url={line_item.image_url} />
      </div>
      <div className="col-xl">
        <b>{line_item.name}</b>
        <div>colour:&nbsp;&nbsp;{line_item.colour}</div>
        <div>price:&nbsp;&nbsp;{line_item.price}</div>
      </div>
      <div className="col-xl">
        <QuantityField
          quantity={line_item.quantity}
          product_id={line_item.product_id}
        />
      </div>
      <div className="col-xl">Total</div>
      <RemoveLineItem line_item={line_item} cart={cart} />
    </div>
  );
};

export default LineItem;
