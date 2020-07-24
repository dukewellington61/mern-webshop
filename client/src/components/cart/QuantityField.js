import React from "react";
import PropTypes from "prop-types";

const QuantityField = ({ quantity }) => {
  const onChange = (e) => console.log(e);

  return (
    <form className="form">
      <div className="form-group">
        <input
          type="number"
          placeholder="Email Address"
          name="email"
          value={quantity}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
    </form>
  );
};

QuantityField.propTypes = {};

export default QuantityField;
