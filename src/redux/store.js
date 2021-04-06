import { phonesReducer } from "./reducers/phonesReducer";
import { brandsReducer } from "./reducers/brandsReducer";
import { chartReducer } from "./reducers/chartReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  phones: phonesReducer,
  brands: brandsReducer,
  chart: chartReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
