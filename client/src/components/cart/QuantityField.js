import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addLineItem } from "../../actions/lineItem.js";

const QuantityField = ({ quantity, cart, addLineItem }) => {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const onChange = (e) => {
    setNewQuantity(e.target.value);
    addLineItem({ quantity: newQuantity, cart_id: cart._id });
  };

  return (
    <form className="form">
      <input
        type="integer"
        placeholder={newQuantity}
        name="quantity"
        value={newQuantity}
        onChange={(e) => onChange(e)}
      />
    </form>
  );
};

QuantityField.propTypes = {};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addLineItem })(QuantityField);
