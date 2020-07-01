import React, { Component } from "react";
import { connect } from "react-redux";
import "../stylesheets/logins.scss";
import applyNotificationFilter from "../helper/applyNotificationFilter";
import calculateBarPercent from "../helper/calculateBarPercent";
import Details from "./Details";
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
          {this.props.category === "alles" ? (
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
          ) : (
            <Details />
          )}

          <div className="logins--filter">
            <button
              className={
                this.props.category === "alles"
                  ? "btn--secondary dark-grey_invert"
                  : "btn--secondary dark-grey"
              }
              onClick={() => {
                this.props.chooseCategory("alles");
              }}
            >
              Alles
            </button>
            <button
              className={
                this.props.category === "sent"
                  ? "btn--secondary blue_invert"
                  : "btn--secondary blue"
              }
              onClick={() => {
                this.props.chooseCategory("sent");
              }}
            >
              Sent
            </button>
            <button
              className={
                this.props.category === "delivered"
                  ? "btn--secondary purple_invert"
                  : "btn--secondary purple"
              }
              onClick={() => {
                this.props.chooseCategory("delivered");
              }}
            >
              Delivered
            </button>
            <button
              className={
                this.props.category === "failed"
                  ? "btn--secondary red_invert"
                  : "btn--secondary red"
              }
              onClick={() => {
                this.props.chooseCategory("failed");
              }}
            >
              Failed
            </button>
            <button
              className={
                this.props.category === "unknown"
                  ? "btn--secondary dark-grey_invert"
                  : "btn--secondary dark-grey"
              }
              onClick={() => {
                this.props.chooseCategory("unknown");
              }}
            >
              Unknown
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
    category: state.notificationSelection.category,
  };
};
const mapDispatchToProps = (dispatch) => ({
  chooseCategory: (category) =>
    dispatch({ type: "CHANGE_NOTIFICATION_CATEGORY", category: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
