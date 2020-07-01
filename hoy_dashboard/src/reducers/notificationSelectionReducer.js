const initialState = {
  category: "alles",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NOTIFICATION_CATEGORY":
      return { ...state, category: action.category };

    default:
      return state;
  }
}
