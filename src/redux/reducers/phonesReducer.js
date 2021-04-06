import {
  PHONES_FETCH_START,
  PHONES_FETCH_SUCCESS,
  PHONES_FETCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  phones: [],
  start: false,
  success: false,
  err: null,
};

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONES_FETCH_START:
      return {
        ...state,
        start: true,
      };
    case PHONES_FETCH_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        phones: action.payload,
      };
    case PHONES_FETCH_FAIL:
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
