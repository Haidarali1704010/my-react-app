import { applyMiddleware, compose, createStore } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import Reducer from "./Reducers/Reducer";

const store = createStore(
  Reducer,
  /* preloadedState, */ devToolsEnhancer({ name: "" })
);
export default store;

// Type '{ name: any; phone: any; city: any; }[]' is not assignable to type
//  '[{ name: any; phone: any; city: any; }]'.
