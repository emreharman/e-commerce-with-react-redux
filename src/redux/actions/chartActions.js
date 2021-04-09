export const addToChart = (dispatch, phone) => {
  let items = JSON.parse(window.localStorage.getItem("chart")).items;

  items = [...items, phone];
  //console.log(items);
  window.localStorage.clear();
  window.localStorage.setItem("chart", JSON.stringify({ items }));
  dispatch({ type: "ADD_TO_CHART", payload: items });
};

export const deleteFromChart = (dispatch, phone) => {
  let items = JSON.parse(window.localStorage.getItem("chart")).items;
  let count = 0;
  let index = 0;
  let filteredItems = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].id != phone.id) {
      filteredItems[index] = items[i];
      index++;
    } else {
      count++;
      if (count > 1) {
        filteredItems[index] = items[i];
        index++;
      } else {
        continue;
      }
    }
  }
  window.localStorage.clear();
  window.localStorage.setItem(
    "chart",
    JSON.stringify({ items: filteredItems })
  );
  dispatch({ type: "DELETE_FROM_CHART", payload: filteredItems });
};

export const emptyChart = (dispatch) => {
  window.localStorage.clear();
  window.localStorage.setItem("chart", JSON.stringify({ items: [] }));
  dispatch({ type: "EMPTY_CHART" });
};
