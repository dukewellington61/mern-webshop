import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import InvoiceItem from "./InvoiceItem";
import InvoiceGrandTotal from "./InvoiceGrandTotal";
import { getLatestOrder } from "../../actions/order";

const Order = ({ order, getLatestOrder }) => {
  // if Order component is rendered in @components/order/Orders.js --> props.order has value in state
  // else if Order component is rendered immediately after order is created fn getLatestOrder() pulls
  // order object from sessionStorage because props.order === {} --> hence: Object.keys(order).length === 0
  let orderObject = {};
  Object.keys(order).length === 0
    ? (orderObject = getLatestOrder())
    : (orderObject = order);

  return order.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="cart_container" className="container">
        <div>
          {orderObject.invoice_items.map((invoice_item) => (
            <InvoiceItem invoice_item={invoice_item} />
          ))}
        </div>
        <div id="#grand_total">
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
  order: state.order.order,
});

export default connect(mapStateToProps, { getLatestOrder })(Order);
