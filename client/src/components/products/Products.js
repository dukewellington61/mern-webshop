import React, { Fragment, useEffect } from "react";
import ProductItem from "./ProductItem";

import { getProducts } from "../../actions/product";

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      <h1 className="large text-primary">Products</h1>

      <div className="products">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
