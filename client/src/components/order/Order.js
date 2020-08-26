import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import InvoiceItem from "./InvoiceItem";
import InvoiceGrandTotal from "./InvoiceGrandTotal";
import { getLatestOrder } from "../../actions/order";

const Order = ({ order, getLatestOrder }) => {
  const latestOrder = getLatestOrder();

  console.log(latestOrder);

  return order.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="cart_container" className="container">
        <div>
          {latestOrder.invoice_items.map((invoice_item) => (
            <InvoiceItem invoice_item={invoice_item} />
          ))}
        </div>
        <div id="#grand_total">
          <div>
            {latestOrder.invoice_items.length > 0 && (
              <InvoiceGrandTotal order={latestOrder} />
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
