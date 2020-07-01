import React from "react";
import { connect } from "react-redux";
import "../stylesheets/logins.scss";
import calculateBarPercent from "../helper/calculateBarPercent";
import Details from "./Details";
import "../stylesheets/Notifications.scss";

const blue = `#60c9cf`;
const red = `#ff0013`;
const purple = `#8018bf`;
const dark_grey = `#282b39`;

export function Notifications(props) {
  return (
    <div className="logins--wrapper">
      <div className="logins--inner_wrapper">
        <div className="logins--title">
          Totaal email gestuurd : {props.notifications}
        </div>
        {props.category === "alles" ? (
          <div className="notifications--displaybox">
            <div className="notifications--displaybox_sent">
              <div className="notification--span_sent">
                <span>sent</span>
              </div>
              <div
                className="notification--pbar_sent"
                style={{
                  height: `${calculateBarPercent("sent")}%`,
                  background: `${blue}`,
                }}
              ></div>
              <div className="notification--span_sent">
                <span> {calculateBarPercent("sent")}%</span>
              </div>
            </div>
            <div className="notifications--displaybox_delivered">
              <div className="notification--span_delivered">
                <span> delivered</span>
              </div>

              <div
                className="notification--pbar_delivered"
                style={{
                  height: `${calculateBarPercent("delivered")}%`,
                  background: `${purple}`,
                }}
              ></div>
              <div className="notification--span_delivered">
                <span> {calculateBarPercent("delivered")}% </span>
              </div>
            </div>
            <div className="notifications--displaybox_failed">
              <div className="notification--span_failed">
                <span> failed</span>
              </div>

              <div
                className="notification--pbar_failed"
                style={{
                  height: `${calculateBarPercent("failed")}%`,
                  background: `${red}`,
                }}
              ></div>
              <div className="notification--span_failed">
                <span> {calculateBarPercent("failed")}%</span>
              </div>
            </div>

            <div className="notifications--displaybox_unknown">
              <div className="notification--span_unknown">
                <span> unknown</span>
              </div>

              <div
                className="notification--pbar_unknown"
                style={{
                  height: `${calculateBarPercent("unknown")}%`,
                  background: `${dark_grey}`,
                }}
              ></div>
              <div className="notification--span_unknown">
                <span> {calculateBarPercent("unknown")}%</span>
              </div>
            </div>
          </div>
        ) : (
          <Details />
        )}

        <div className="logins--filter">
          <button
            className={
              props.category === "alles"
                ? "btn--secondary dark-grey_invert"
                : "btn--secondary dark-grey"
            }
            onClick={() => {
              props.chooseCategory("alles");
            }}
          >
            Alles
          </button>
          <button
            className={
              props.category === "sent"
                ? "btn--secondary blue_invert"
                : "btn--secondary blue"
            }
            onClick={() => {
              props.chooseCategory("sent");
            }}
          >
            Sent
          </button>
          <button
            className={
              props.category === "delivered"
                ? "btn--secondary purple_invert"
                : "btn--secondary purple"
            }
            onClick={() => {
              props.chooseCategory("delivered");
            }}
          >
            Delivered
          </button>
          <button
            className={
              props.category === "failed"
                ? "btn--secondary red_invert"
                : "btn--secondary red"
            }
            onClick={() => {
              props.chooseCategory("failed");
            }}
          >
            Failed
          </button>
          <button
            className={
              props.category === "unknown"
                ? "btn--secondary dark-grey_invert"
                : "btn--secondary dark-grey"
            }
            onClick={() => {
              props.chooseCategory("unknown");
            }}
          >
            Unknown
          </button>
        </div>
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
const mapDispatchToProps = (dispatch) => ({
  chooseCategory: (category) =>
    dispatch({ type: "CHANGE_NOTIFICATION_CATEGORY", category: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
