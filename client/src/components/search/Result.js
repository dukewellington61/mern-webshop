import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProductItem from "../products/ProductItem";

const Result = (props) => {
  const searchResult = props.location.state.detail;

  return searchResult.length === 0 ? (
    <div id="search_result_container">
      <h4 style={{ marginTop: "8rem", textAlign: "center" }}>no results</h4>
    </div>
  ) : (
    <div id="search_result_container">
      <h4 style={{ marginTop: "8rem", textAlign: "center" }}>Search Results</h4>
      <div className="row">
        {searchResult.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

Result.propTypes = {};

export default Result;
