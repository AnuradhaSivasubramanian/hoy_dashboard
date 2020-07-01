import React from "react";
import { connect } from "react-redux";
import applyNotificationFilter from "../helper/applyNotificationFilter";
import calculateDistinctUsers from "../helper/calculateDistinctUsers";
import "../stylesheets/details.scss";

const blue = `#60c9cf`;
const red = `#ff0013`;
const purple = `#8018bf`;
const dark_grey = `#282b39`;

export function Details(props) {
  return (
    <div className="details--wrapper">
      <div className="details--top_text">
        Status van {applyNotificationFilter(props.category)} emails :
        <span> {props.category}</span>
      </div>
      <div
        className="details--middle_text"
        style={{
          color:
            props.category === "sent"
              ? `${blue}`
              : props.category === "delivered"
              ? `${purple}`
              : props.category === "failed"
              ? `${red}`
              : `${dark_grey}`,
        }}
      >
        <span>{applyNotificationFilter(props.category)}</span>
      </div>
      <div className="details--bottom_text">
        Aantal gebruikers :{" "}
        <span>{calculateDistinctUsers(props.category)}</span>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    notifications: state.notification.total,
    category: state.notificationSelection.category,
  };
};

export default connect(mapStateToProps)(Details);
