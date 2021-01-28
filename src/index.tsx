import React from "react";
import ReactDom from "react-dom";
//import "./index.css";
import App from "./App";

import redux from "redux";
// const ReduxFunction = () => {
//   const createStore = redux.createStore;

//   const Set_Flag = "Set_Flag";

//   const initialState = {
//     name: "",
//     phone: "",
//     city: "",
//     list: [],
//     buttonFlag: false,
//   };

//   const setFlag = () => {
//     return {
//       type: Set_Flag,
//     };
//   };

//   const Reducer = (state = initialState, action: { type: any }) => {
//     switch (action.type) {
//       case "Set_Flag":
//         return {
//           ...state,
//           buttonFlag: true,
//         };
//       default:
//         return state;
//     }
//   };

//   const store = createStore(Reducer);
// };

ReactDom.render(<App />, document.getElementById("root"));
