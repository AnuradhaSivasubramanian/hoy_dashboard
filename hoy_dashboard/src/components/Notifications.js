import React, { Component } from "react";
import { connect } from "react-redux";
import applyUsageFilter from "../helper/applyUsageFilter";
import "../stylesheets/logins.scss";
import applyNotificationFilter from "../helper/applyNotificationFilter";
import calculateBarPercent from "../helper/calculateBarPercent";
import "../stylesheets/Notifications.scss";

const blue = `#60c9cf`;
const red = `#ff0013`;
const purple = `#8018bf`;
const dark_grey = `#282b39`;

export class Notifications extends Component {
  render() {
    return (
      <div className="logins--wrapper">
        <div className="logins--inner_wrapper">
          <div className="logins--title">
            Email gestuurd {this.props.notifications} in totaal
          </div>
          <div className="notifications--displaybox">
            <div className="notifications--displaybox_sent">
              <div
                className="notification--span_sent"
                style={{
                  color: `${blue}`,
                }}
              >
                <span> {applyNotificationFilter("sent")} sent</span>
              </div>
              <div
                className="notification--pbar_sent"
                style={{
                  height: `${calculateBarPercent("sent")}%`,
                  background: `${blue}`,
                }}
              ></div>
            </div>
            <div className="notifications--displaybox_delivered">
              <div
                className="notification--span_delivered"
                style={{
                  color: `${purple}`,
                }}
              >
                {" "}
                <span> {applyNotificationFilter("delivered")} delivered</span>
              </div>

              <div
                className="notification--pbar_delivered"
                style={{
                  height: `${calculateBarPercent("delivered")}%`,
                  background: `${purple}`,
                }}
              ></div>
            </div>
            <div className="notifications--displaybox_failed">
              <div
                className="notification--span_failed"
                style={{
                  color: `${red}`,
                }}
              >
                {" "}
                <span> {applyNotificationFilter("failed")} failed</span>
              </div>

              <div
                className="notification--pbar_failed"
                style={{
                  height: `${calculateBarPercent("failed")}%`,
                  background: `${red}`,
                }}
              ></div>
            </div>

            <div className="notifications--displaybox_unknown">
              <div
                className="notification--span_unknown"
                style={{
                  color: `${dark_grey}`,
                }}
              >
                {" "}
                <span> {applyNotificationFilter("unknown")} unknown</span>
              </div>

              <div
                className="notification--pbar_unknown"
                style={{
                  height: `${calculateBarPercent("unknown")}%`,
                  background: `${dark_grey}`,
                }}
              ></div>
            </div>
          </div>
          <div className="logins--filter">
            <button
              className={
                this.props.category === "month"
                  ? "btn--primary dark-grey_invert"
                  : "btn--primary dark-grey"
              }
              onClick={() => {
                this.props.changeFilter(applyUsageFilter("month"));
                this.props.chooseCategory("month");
              }}
            >
              Maand
            </button>
            <button
              className={
                this.props.category === "day"
                  ? "btn--primary dark-grey_invert"
                  : "btn--primary dark-grey"
              }
              onClick={() => {
                this.props.changeFilter(applyUsageFilter("day"));
                this.props.chooseCategory("day");
              }}
            >
              Dag
            </button>
            <button
              className={
                this.props.category === "hour"
                  ? "btn--primary dark-grey_invert"
                  : "btn--primary dark-grey"
              }
              onClick={() => {
                this.props.changeFilter(applyUsageFilter("hour"));
                this.props.chooseCategory("hour");
              }}
            >
              Uur
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    notifications: state.notification.total,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeFilter: (average) =>
    dispatch({ type: "CHANGE_FILTER", average: average }),
  chooseCategory: (category) =>
    dispatch({ type: "CHANGE_CATEGORY", category: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
