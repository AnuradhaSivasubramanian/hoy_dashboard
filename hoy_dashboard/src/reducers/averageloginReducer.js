import applyUsageFilter from "../helper/applyUsageFilter";

const initialState = {
  average: applyUsageFilter("month"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return { ...state, average: action.average };

    default:
      return state;
  }
}
