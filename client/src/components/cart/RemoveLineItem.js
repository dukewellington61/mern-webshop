import React, { Fragment, useState } from "react";
import RemoveLineItemSecurityQuery from "./RemoveLineItemSecurityQuery";

const RemoveLineItem = ({ line_item, cart }) => {
  const [renderSecurityQuery, setRenderSecurityQuery] = useState(false);

  const handleClick = () => {
    setRenderSecurityQuery(true);
  };

  return (
    <Fragment>
      <div id="delete_line_icon" onClick={handleClick}>
        <i className="fas fa-times"></i>
      </div>
      <div style={{ display: renderSecurityQuery ? "block" : "none" }}>
        <RemoveLineItemSecurityQuery
          line_item_id={line_item._id}
          cart_id={cart._id}
          setRenderSecurityQuery={setRenderSecurityQuery}
        />
      </div>
    </Fragment>
  );
};

export default RemoveLineItem;
