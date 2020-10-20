import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { findProducts } from "../../actions/product";
import PropTypes from "prop-types";

const Search = ({ findProducts }) => {
  const [formData, setFormData] = useState("");

  const onChange = (e) => {
    setFormData(e.target.value);
  };

  const handleClick = () => {
    const searchArray = formData.split(" ");
    const searchObj = {
      searchArray,
    };
    findProducts(searchObj);
    setFormData("");
  };

  return (
    <div className="row">
      <form>
        <div className="form-group">
          <input
            class="form-control"
            name="search_term"
            onChange={(e) => onChange(e)}
          ></input>
        </div>
      </form>
      <div to="products/search-results" onClick={handleClick}>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  findProducts: PropTypes.func.isRequired,
};

export default connect(null, { findProducts })(Search);
