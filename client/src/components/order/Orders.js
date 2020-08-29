import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import OrderHeaders from "./OrderHeaders";
import { getAllOrdersByUser } from "../../actions/order";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";

const Orders = ({ order, orders, user, getAllOrdersByUser }) => {
  useEffect(() => {
    getAllOrdersByUser();
  }, []);

  return order.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="orders_header_container" className="container">
        <div>customer number: {user._id}</div>
        <div class="row">
          <b class="col">order id</b>
          <b class="col">date</b>
          <b class="col">total</b>
          <b class="col">status</b>
        </div>
        <div>
          {orders.map((order) => (
            <div>
              <OrderHeaders key={order._id} order={order} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Orders.propTypes = {
  order: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
  orders: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getAllOrdersByUser })(Orders);
