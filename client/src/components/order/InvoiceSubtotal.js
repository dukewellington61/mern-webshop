import React from "react";
import { calculateSubtotal } from "../../utils/calcGrandTotal";

const InvoiceSubtotal = ({ invoice_item }) => {
  return <div>{calculateSubtotal(invoice_item).toFixed(2)}&nbsp;&euro;</div>;
};

export default InvoiceSubtotal;
