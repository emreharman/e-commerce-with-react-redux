import {
  CHART_FETCH_START,
  CHART_FETCH_SUCCESS,
  CHART_FETCH_FAIL,
} from "../actions/actionTypes";
import { chartURL } from "../urls";
import axios from "axios";

export const getChart = (dispatch) => {
  dispatch({ type: CHART_FETCH_START });
  axios
    .get(chartURL)
    .then((res) => dispatch({ type: CHART_FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: CHART_FETCH_FAIL, payload: err }));
};
