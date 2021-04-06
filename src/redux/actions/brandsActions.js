import {
  BRANDS_FETCH_START,
  BRANDS_FETCH_SUCCESS,
  BRANDS_FETCH_FAIL,
} from "../actions/actionTypes";
import { brandsURL } from "../urls";
import axios from "axios";

export const getBrands = (dispatch) => {
  dispatch({ type: BRANDS_FETCH_START });
  axios
    .get(brandsURL)
    .then((res) => dispatch({ type: BRANDS_FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: BRANDS_FETCH_FAIL, payload: err }));
};
