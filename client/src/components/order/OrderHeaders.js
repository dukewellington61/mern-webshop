import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";
import Order from "./Order";

const OrderHeaders = ({ order }) => {
  useEffect(() => {
    document.getElementById(order._id).classList.add("not_render_orders");
  }, []);

  const [angleUp, setAngleUp] = useState(true);

  const handleClick = (id) => {
    document
      .querySelectorAll(".orders")
      .forEach((orderElement) =>
        orderElement.id !== id
          ? orderElement.classList.add("not_render_orders")
          : null
      );

    document
      .querySelectorAll(".fa-angle-down")
      .forEach((element) =>
        element.classList.replace("fa-angle-down", "fa-angle-up")
      );

    if (
      document.getElementById(order._id).classList.contains("not_render_orders")
    ) {
      document.getElementById(order._id).classList.remove("not_render_orders");
      setAngleUp(false);
    } else {
      document.getElementById(order._id).classList.add("not_render_orders");
      setAngleUp(true);
    }
  };

  return (
    <Fragment>
      <div
        id="order_headers"
        className="row"
        onClick={() => handleClick(order._id)}
      >
        <div className="col">{order._id}</div>
        <div className="col">{order.date.split("T").slice(0, 1).join("")}</div>
        <div className="col">{calculateGrandTotal(order).toFixed(2)}</div>
        <div className="col" style={{ color: "green" }}>
          {" "}
          <i className="fas fa-check"></i>
        </div>
        <div>
          &nbsp;{" "}
          {angleUp ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
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
