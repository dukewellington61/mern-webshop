import React from "react";
import PropTypes from "prop-types";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";

const OrderHeaders = ({ order }) => (
  <div id="order_headers">
    <table>
      <tr>
        <th>order number:</th>
        <th>order date:</th>
        <th>total:</th>
      </tr>
      <tr>
        <td>{order._id}</td>
        <td>{order.date}</td>
        <td>{calculateGrandTotal(order)}</td>
      </tr>
    </table>
  </div>
);

OrderHeaders.propTypes = {};

export default OrderHeaders;
