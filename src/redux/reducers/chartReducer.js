import {
  CHART_FETCH_START,
  CHART_FETCH_SUCCESS,
  CHART_FETCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  chart: [],
  start: false,
  success: false,
  err: null,
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHART_FETCH_START:
      return {
        ...state,
        start: true,
      };
    case CHART_FETCH_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        chart: action.payload,
      };
    case CHART_FETCH_FAIL:
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
