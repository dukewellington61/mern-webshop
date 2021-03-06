import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import InvoiceItem from "./InvoiceItem";
import InvoiceGrandTotal from "./InvoiceGrandTotal";
import { getLatestOrder } from "../../actions/order";

const Order = ({ order, latestOrder, loading, getLatestOrder }) => {
  // if Order component is rendered in @components/order/Orders.js --> props.order has value in state
  // else if Order component is rendered immediately after order is created getLatestOrder() pulls latest order in redux state
  // which the can be maped to props

  let orderObject = {};

  useEffect(() => {
    if (!order) getLatestOrder();
  }, []);

  order ? (orderObject = order) : (orderObject = latestOrder);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id={order ? "order_container" : "latest_order_container"}>
        {!order && (
          <div style={{ marginLeft: "1rem" }}>
            <b>Your order:</b>
            <p>order number: {orderObject.order_number}</p>
          </div>
        )}
        <div>
          {orderObject.invoice_items.map((invoice_item) => (
            <InvoiceItem invoice_item={invoice_item} />
          ))}
        </div>
        <div id="grand_total">
          <div>
            {orderObject.invoice_items.length > 0 && (
              <InvoiceGrandTotal order={orderObject} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.order.loading,
  latestOrder: state.order.order,
});

export default connect(mapStateToProps, { getLatestOrder })(Order);
