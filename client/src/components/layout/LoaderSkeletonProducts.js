import React from "react";

const LoaderSkeletonProducts = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="skeleton_container">
        <section className="skeleton_card">
          <figure className="skeleton_card-image loading"></figure>
          <div className="skeleton_card-detail">
            <h3 className="skeleton_card-title loading"></h3>
            <p className="skeleton_card-description loading"></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoaderSkeletonProducts;
