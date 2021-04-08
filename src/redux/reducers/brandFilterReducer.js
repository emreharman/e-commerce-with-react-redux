const initialState = {
  filteredBrands: [],
};

export const brandFilterReducer = (state = initialState, action) => {
  if (action.type === "BRAND_FILTER_UPDATE") {
    return {
      filteredBrands: action.payload,
    };
  } else {
    return state;
  }
};
