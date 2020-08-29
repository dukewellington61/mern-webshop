import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";
import Order from "./Order";

const OrderHeaders = ({ order }) => {
  const [renderOrder, setRenderOrder] = useState(false);

  const handleClick = () =>
    renderOrder ? setRenderOrder(false) : setRenderOrder(true);
  return (
    <Fragment>
      <div id="order_headers" className="row" onClick={handleClick}>
        <div class="col">{order._id}</div>
        <div class="col">{order.date.split("T").slice(0, 1).join("")}</div>
        <div class="col">{calculateGrandTotal(order)}</div>
        <div class="col" style={{ color: "green" }}>
          {" "}
          <i class="fas fa-check"></i>
        </div>
        <div>
          &nbsp;{" "}
          {renderOrder ? (
            <i class="fas fa-angle-down"></i>
          ) : (
            <i class="fas fa-angle-up"></i>
          )}
        </div>
      </div>
      <div style={{ display: renderOrder ? "block" : "none" }}>
        <Order order={order} />
      </div>
    </Fragment>
  );
};

OrderHeaders.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderHeaders;
