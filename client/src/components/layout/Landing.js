import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { getCartByCartId } from "../../actions/cart";
import { getCartByUserId } from "../../actions/cart";
import { createCart } from "../../actions/cart";

import img_1 from "../../img/carousel/img_1.jpg";
import img_2 from "../../img/carousel/img_2.jpg";
import img_3 from "../../img/carousel/img_3.jpg";

const checkIfCart = () =>
  localStorage.getItem("mern_stack_dummy_bicycle_webshop_shopping_cart_id");

const Landing = ({ getCartByCartId, getCartByUserId, createCart, user }) => {
  useEffect(() => {
    if (user.isAuthenticated) {
      getCartByUserId();
    } else {
      const cartId = checkIfCart();

      console.log(cartId);
      console.log(JSON.parse(cartId));
      cartId ? getCartByCartId(JSON.parse(cartId)) : createCart();
    }
  }, [user.isAuthenticated]);

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img_1} alt="First slide" />
        <Carousel.Caption>
          <h3>This is just a likkle test</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img_2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img_3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

Landing.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, {
  getCartByCartId,
  getCartByUserId,
  createCart,
})(Landing);
