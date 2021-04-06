import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "./redux/actions/phonesActions";
import { getBrands } from "./redux/actions/brandsActions";
import { getChart } from "./redux/actions/chartActions";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
