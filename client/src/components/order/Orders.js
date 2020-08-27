import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import OrderHeaders from "./OrderHeaders";
import { getAllOrdersByUser } from "../../actions/order";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";

const Orders = ({ order, orders, getAllOrdersByUser }) => {
  useEffect(() => {
    getAllOrdersByUser();
    console.log(orders);
  }, []);
  return order.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="orders_header_container" className="container">
        <div className="row">
          {orders.map((order) => (
            <OrderHeaders key={order._id} order={order} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Orders.propTypes = {};

const mapStateToProps = (state) => ({
  order: state.order,
  orders: state.order.orders,
});

export default connect(mapStateToProps, { getAllOrdersByUser })(Orders);
