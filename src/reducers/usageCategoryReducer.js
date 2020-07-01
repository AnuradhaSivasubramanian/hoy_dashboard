const initialState = {
  category: "month",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { ...state, category: action.category };

    default:
      return state;
  }
}
