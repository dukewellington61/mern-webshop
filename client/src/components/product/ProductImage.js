import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductImage = ({ product: { image_url } }) => {
  const imageProps = {
    smallImage: {
      alt: "product_img",
      isFluidWidth: true,
      src: image_url,
    },
    largeImage: {
      src: image_url,
      width: 2400,
      height: 2400,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };
  return <ReactImageMagnify {...imageProps} />;
};
export default ProductImage;
