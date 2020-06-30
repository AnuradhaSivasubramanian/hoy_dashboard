import applyNotificationFilter from "../helper/applyNotificationFilter";

const initialState = {
  total: applyNotificationFilter(),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NOTIFICATION_FILTER":
      return { ...state, total: action.total };

    default:
      return state;
  }
}
