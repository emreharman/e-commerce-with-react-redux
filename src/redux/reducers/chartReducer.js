let initialState = JSON.parse(window.localStorage.getItem("chart"));
if (initialState == undefined) {
  initialState = {
    items: [],
  };
  window.localStorage.setItem("chart", JSON.stringify(initialState));
}

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CHART":
      return {
        items: action.payload,
      };
    case "DELETE_FROM_CHART":
      return {
        items: action.payload,
      };
    case "EMPTY_CHART":
      return {
        items: [],
      };
    default:
      return state;
  }
};
