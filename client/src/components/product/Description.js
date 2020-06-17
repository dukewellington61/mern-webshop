import React from "react";

const Description = ({ product: { description } }) => (
  <div>
    <p>{description}</p>
  </div>
);
export default Description;
