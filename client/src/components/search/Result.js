import React from "react";
import PropTypes from "prop-types";
import ProductItem from "../products/ProductItem";

const Result = (props) => {
  const searchResult = props.location.state.detail;
  return searchResult.map((product) => <ProductItem product={product} />);
};

Result.propTypes = {};

export default Result;
