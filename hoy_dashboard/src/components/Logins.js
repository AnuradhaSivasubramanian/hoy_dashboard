import React, { Component } from "react";
import { connect } from "react-redux";
import applyUsageFilter from "../helper/applyUsageFilter";
import "../stylesheets/logins.scss";

export class Logins extends Component {
  render() {
    return (
      <div className="logins--wrapper">
        <div className="logins--inner_wrapper">
          <div className="logins--title">Gemiddeld Logins</div>
          <div className="logins--displaybox">
            <span className="logins--displaybox_span">
              {this.props.averagelogin}
            </span>
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
              per Maand
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
              per Dag
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
              per Uur
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    averagelogin: state.login.average,
    category: state.usage.category,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeFilter: (average) =>
    dispatch({ type: "CHANGE_FILTER", average: average }),
  chooseCategory: (category) =>
    dispatch({ type: "CHANGE_CATEGORY", category: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logins);
