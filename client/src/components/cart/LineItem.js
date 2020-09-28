import React from "react";
import { Link } from "react-router-dom";
import LineItemImage from "./LineItemImage";
import QuantityField from "./QuantityField";
import RemoveLineItem from "./RemoveLineItem";
import SubTotal from "./SubTotal";

const LineItem = ({ line_item, cart }) => {
  return (
    <div id="line_item_row" className="row">
      <div className="col-xl">
        <Link to={`/products/${line_item.product_id}`}>
          <LineItemImage line_item={line_item} />
        </Link>
      </div>
      <div className="col-xl">
        <Link to={`/products/${line_item.product_id}`}>
          <b>{line_item.name}</b>
        </Link>
        <div>colour:&nbsp;&nbsp;{line_item.colour}</div>
        <div>price:&nbsp;&nbsp;{line_item.price.toFixed(2)}&nbsp;&euro;</div>
      </div>
      <div className="col-xl">
        <QuantityField
          quantity={line_item.quantity}
          product_id={line_item.product_id}
          lineItem_id={line_item._id}
        />
      </div>
      <div className="col-xl">
        <SubTotal line_item={line_item} />
      </div>
      <RemoveLineItem line_item={line_item} cart={cart} />
    </div>
  );
};

export default LineItem;
