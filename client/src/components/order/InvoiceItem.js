import React from "react";
import LineItemImage from "../cart/LineItemImage";
import InvoiceSubtotal from "./InvoiceSubtotal";
import { Link } from "react-router-dom";

const InvoiceItem = ({ invoice_item }) => {
  return (
    <div id="invoice_item_row" className="row">
      <div className="col-xl">
        <Link to={`/products/${invoice_item.product_id}`}>
          <LineItemImage line_item={invoice_item} />
        </Link>
      </div>
      <div className="col-xl">
        <Link to={`/products/${invoice_item.product_id}`}>
          <b>{invoice_item.name}</b>
        </Link>
        <div>colour:&nbsp;&nbsp;{invoice_item.colour}</div>
        <div>price:&nbsp;&nbsp;{invoice_item.price.toFixed(2)}&nbsp;&euro;</div>
      </div>
      <div className="col-xl"></div>
      <div className="col-xl">
        <InvoiceSubtotal invoice_item={invoice_item} />
      </div>
    </div>
  );
};

export default InvoiceItem;
