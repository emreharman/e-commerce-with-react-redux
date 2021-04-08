import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "./redux/actions/phonesActions";
import { getBrands } from "./redux/actions/brandsActions";
import { getChart } from "./redux/actions/chartActions";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Chart from "./components/Chart";
import PhoneDetail from "./components/PhoneDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chart" component={Chart} />
        <Route path="/phone-detail/:id" component={PhoneDetail}></Route>
      </Switch>
    </Router>
  );
}

export default App;
