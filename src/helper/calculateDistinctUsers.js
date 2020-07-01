import notificationData from "../data/notifications.json";

/**
 * @method  calculateDistinctUsers - calculates the number of distinct users with the chosen email notification status
 * @param  {String}  category
 * @returns {Number} - returns the number of distinct user ids
 */

const calculateDistinctUsers = (category) => {
  let data = [];

  if (category === "sent") {
    data = notificationData.filter(
      (item) => item.type === "email" && item.status === "sent"
    );
  } else if (category === "delivered") {
    data = notificationData.filter(
      (item) => item.type === "email" && item.status === "delivered"
    );
  } else if (category === "failed") {
    data = notificationData.filter(
      (item) => item.type === "email" && item.status === "failed"
    );
  } else if (category === "unknown") {
    data = notificationData.filter(
      (item) => item.type === "email" && item.status === "unknown"
    );
  }

  //counting number of logins per month
  let groupedIntoCategory = {};
  for (let i = 0; i < data.length; i++) {
    if (!groupedIntoCategory[data[i].user]) {
      groupedIntoCategory[data[i].user] = 1;
    } else groupedIntoCategory[data[i].user] += 1;
  }

  //calculating the average per timePeriod
  let uniqueUsers = 0;
  for (let key in groupedIntoCategory) {
    if (groupedIntoCategory.hasOwnProperty(key)) {
      uniqueUsers++;
    }
  }
  return uniqueUsers;
};

export default calculateDistinctUsers;
