import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";
import Order from "./Order";

const OrderHeaders = ({ order }) => {
  // stop the order component from beeing initially rendered
  useEffect(() => {
    document.getElementById(order._id).classList.add("not_render_orders");
  }, []);

  // is the font awsome icon element in the current instance of @components/order/OrderHeaders.js (the one that has been clicked)
  const angleElement = useRef(null);

  const handleClick = (id) => {
    // stops the previous order (the one that has been displayed before clicking the current order) from beeing displayed
    // if previous order and current order are the same i.e. user clicks on same OrderHeaders element twice nothing happens
    document
      .querySelectorAll(".orders")
      .forEach((orderElement) =>
        orderElement.id !== id
          ? orderElement.classList.add("not_render_orders")
          : null
      );

    // sets the previous instance of @components/order/OrderHeaders.js to up (which is in line with what happens above)
    document
      .querySelectorAll(".fa-angle-down")
      .forEach((element) =>
        element.classList.replace("fa-angle-down", "fa-angle-up")
      );

    // this conditional manages visibility and fa-angle only for the current instance of @components/order/OrderHeaders.js (the one that has been clicked)
    if (
      // if order is not rendered
      document.getElementById(order._id).classList.contains("not_render_orders")
    ) {
      // render order
      document.getElementById(order._id).classList.remove("not_render_orders");

      // set fa-angle to down
      angleElement.current.classList.replace("fa-angle-up", "fa-angle-down");

      // if order is rendered
    } else {
      // stop render order
      document.getElementById(order._id).classList.add("not_render_orders");

      // set fa-angle to up
      angleElement.current.classList.replace("fa-angle-down", "fa-angle-up");
    }
  };

  return (
    <Fragment>
      <div
        id="order_headers"
        className="row"
        onClick={() => handleClick(order._id)}
      >
        <div className="col">{order.order_number}</div>
        <div className="col">{order.date.split("T").slice(0, 1).join("")}</div>
        <div className="col">{calculateGrandTotal(order).toFixed(2)}</div>
        <div className="col" style={{ color: "green" }}>
          {" "}
          <i className="fas fa-check"></i>
        </div>
        <div>
          <i ref={angleElement} className="fas fa-angle-up"></i>
        </div>
      </div>
      <div id={order._id} className="orders">
        <Order order={order} />
      </div>
    </Fragment>
  );
};

OrderHeaders.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderHeaders;
