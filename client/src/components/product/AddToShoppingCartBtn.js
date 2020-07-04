import React from "react";

const AddToShoppingCartBtn = (props) => (
  <button
    id="add_to_shopping_cart"
    type="button"
    className="btn btn-success btn-lg"
    onClick={() => console.log("test")}
  >
    add to shopping cart &nbsp;&nbsp;<i className="fas fa-cart-arrow-down"></i>
  </button>
);

export default AddToShoppingCartBtn;
