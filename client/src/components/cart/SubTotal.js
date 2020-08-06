import React from "react";

const Subtotal = ({ line_item }) => {
  const calculateSubtotal = () => line_item.quantity * line_item.price;

  return <div>{calculateSubtotal().toFixed(2)}&nbsp;&euro;</div>;
};

export default Subtotal;
