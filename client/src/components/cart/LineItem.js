import React from "react";
import { Link } from "react-router-dom";
import LineItemImage from "./LineItemImage";
import QuantityField from "./QuantityField";
import RemoveLineItem from "./RemoveLineItem";
import SubTotal from "./SubTotal";

const LineItem = ({ line_item, cart }) => {
  return (
    <div id="line_item_row" className="row">
      <div className="col-md">
        <Link to={`/products/${line_item.product_id}`}>
          <LineItemImage line_item={line_item} />
        </Link>
      </div>
      <div id="product_page_info_container" className="col-md">
        <Link to={`/products/${line_item.product_id}`}>
          <b>{line_item.name}</b>
        </Link>
        <div>colour:&nbsp;&nbsp;{line_item.colour}</div>
        <div>price:&nbsp;&nbsp;{line_item.price.toFixed(2)}&nbsp;&euro;</div>
      </div>
      <div id="product_page_quantity_field_container" className="col-md">
        <QuantityField
          quantity={line_item.quantity}
          product_id={line_item.product_id}
          lineItem_id={line_item._id}
        />
      </div>
      <div id="product_page_subtotal_container" className="col-md">
        <SubTotal line_item={line_item} />
      </div>
      <RemoveLineItem line_item={line_item} cart={cart} />
    </div>
  );
};

export default LineItem;
