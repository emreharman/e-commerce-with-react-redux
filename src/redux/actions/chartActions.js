import {
  CHART_FETCH_START,
  CHART_FETCH_SUCCESS,
  CHART_FETCH_FAIL,
} from "../actions/actionTypes";
import { chartURL } from "../urls";
import axios from "axios";

export const addToChart = (dispatch, phone) => {
  let items = JSON.parse(window.localStorage.getItem("chart")).items;

  items = [...items, phone];
  //console.log(items);
  window.localStorage.clear();
  window.localStorage.setItem("chart", JSON.stringify({ items }));
  dispatch({ type: "ADD_TO_CHART", payload: items });
};
