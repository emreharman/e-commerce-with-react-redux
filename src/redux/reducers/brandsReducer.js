import {
  BRANDS_FETCH_START,
  BRANDS_FETCH_SUCCESS,
  BRANDS_FETCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  brands: [],
  start: false,
  success: false,
  err: null,
};

export const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANDS_FETCH_START:
      return {
        ...state,
        start: true,
      };
    case BRANDS_FETCH_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        brands: action.payload,
      };
    case BRANDS_FETCH_FAIL:
      return {
        ...state,
        start: false,
        success: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
