import {
  PHONES_FETCH_START,
  PHONES_FETCH_SUCCESS,
  PHONES_FETCH_FAIL,
} from "../actions/actionTypes";
import { phonesURL } from "../urls";
import axios from "axios";

export const getPhones = (dispatch) => {
  dispatch({ type: PHONES_FETCH_START });
  axios
    .get(phonesURL)
    .then((res) => dispatch({ type: PHONES_FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PHONES_FETCH_FAIL, payload: err }));
};
