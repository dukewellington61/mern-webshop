import React from "react";
import { calculateSubtotal } from "../../utils/calcGrandTotal";

const Subtotal = ({ line_item }) => {
  return <div>{calculateSubtotal(line_item).toFixed(2)}&nbsp;&euro;</div>;
};

export default Subtotal;
