import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLineItem } from "../../actions/lineItem.js";
import { removeLineItem } from "../../actions/lineItem.js";

const QuantityField = ({
  product_id,
  quantity,
  lineItem_id,
  cart,
  addLineItem,
  removeLineItem,
}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleChange = (e) => setNewQuantity(parseInt(e.target.value));

  const handleSubmit = (e) => {
    newQuantity === 0
      ? removeLineItem({ lineItem_id, cart_id: cart._id })
      : addLineItem({ product_id, quantity: newQuantity, cart_id: cart._id });
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        style={{ maxWidth: "100%" }}
        type="number"
        placeholder={isNaN(newQuantity) ? "" : newQuantity}
        name="quantity"
        value={newQuantity}
        onChange={handleChange}
        required
      />
    </form>
  );
};

QuantityField.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addLineItem, removeLineItem })(
  QuantityField
);
