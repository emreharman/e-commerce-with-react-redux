import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "./redux/actions/phonesActions";
import { getBrands } from "./redux/actions/brandsActions";
import { getChart } from "./redux/actions/chartActions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhones);
    dispatch(getBrands);
    dispatch(getChart);
  }, []);

  return (
    <div>
      {state.phones.success && state.brands.success && state.chart.success ? (
        <h1>hello</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
