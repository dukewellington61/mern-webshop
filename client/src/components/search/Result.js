import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProductItem from "../products/ProductItem";

const Result = (props) => {
  const searchResult = props.location.state.detail;
  return (
    <div>
      <h1 style={{ marginTop: "8rem", textAlign: "center" }}>Search Results</h1>
      <div className="row">
        {searchResult.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

Result.propTypes = {};

export default Result;
