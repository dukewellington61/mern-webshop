import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LineItems from "./LineItem";
import { getProducts } from "../../actions/product";

const Cart = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Fragment>
      <div style={{ position: "absolute", top: "500px", color: "black" }}>
        <div className="row">
          {products.map((product) => (
            <LineItems key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  line_items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Cart);
