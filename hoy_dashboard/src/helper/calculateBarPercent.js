import applyNotificationFilter from "./applyNotificationFilter";

/**
 * @method  calculateBarPercent - calculates the percentage of records with the selected status
 * @param  {String}  status
 * @returns {Number} - returns percentage of records with the status
 */

const calculateBarPercent = (status) => {
  return (
    (applyNotificationFilter(status) * 100) /
    applyNotificationFilter()
  ).toFixed(1);
};

export default calculateBarPercent;
