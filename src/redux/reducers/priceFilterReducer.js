const initialState = {
  priceFilter: "",
};

export const priceFilterReducer = (state = initialState, action) => {
  if (action.type === "PRICE_FILTER_UPDATE") {
    return {
      priceFilter: action.payload,
    };
  } else {
    return state;
  }
};
