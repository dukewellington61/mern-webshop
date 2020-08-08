import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/* props.alert bas been destructured to ({ alert })*/
const Alert = ({ alerts }) => {
  return (
    alert !== null &&
    alerts.length > 0 &&
    alerts.map((alert) =>
      alert.msg.includes("added") || alert.msg.includes("increased") ? (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg} <Link to="/cart">Go to shopping cart</Link>
        </div>
      ) : (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      )
    )
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
