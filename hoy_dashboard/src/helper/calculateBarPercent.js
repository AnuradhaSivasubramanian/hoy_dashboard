import applyNotificationFilter from "./applyNotificationFilter";

const calculateBarPercent = (status) => {
  return (
    (applyNotificationFilter(status) * 100) /
    applyNotificationFilter()
  ).toFixed(1);
};

export default calculateBarPercent;
