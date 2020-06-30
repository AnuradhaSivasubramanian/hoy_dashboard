import loginData from "../data/authentication_log.json";

const applyUsageFilter = (category) => {
  let data = [...loginData];
  let strlength = 0;

  //slice the length of timestamp  to month
  if (category === "month") {
    strlength = 7;
  } else if (category === "day") {
    strlength = 10;
  } else if (category === "hour") {
    strlength = 13;
  }

  //counting number of logins per month
  let groupedIntoCategory = {};
  for (let i = 0; i < data.length; i++) {
    if (!groupedIntoCategory[data[i].timestamp.substring(0, strlength)]) {
      groupedIntoCategory[data[i].timestamp.substring(0, strlength)] = 1;
    } else groupedIntoCategory[data[i].timestamp.substring(0, strlength)] += 1;
  }

  //calculating the average per timePeriod
  let uniqueTimePeiod = 0;
  for (let key in groupedIntoCategory) {
    if (groupedIntoCategory.hasOwnProperty(key)) {
      uniqueTimePeiod++;
    }
  }

  return (data.length / uniqueTimePeiod).toFixed(1);
};
export default applyUsageFilter;
