import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

import { getProduct } from "../../actions/product";

const Product = ({ getProduct, product: { product, loading }, match }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct]);

  return loading ? (
    <Spinner />
  ) : ( 
      <div className="card" style={{marginTop: "100px"}}>
        <img className="card-img-top" src={product.image_url} alt="test" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="price">{product.price}</li>
          <li className="colour">{product.colour}</li>
        </ul>
      </div>   
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProduct })(Product);
