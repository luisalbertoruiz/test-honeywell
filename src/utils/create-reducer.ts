import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { history } from "./history";
import { tableReducer } from "../containers";

const reducers = {
  router: connectRouter(history),
  table: tableReducer,
};

export const createReducer = () => combineReducers(reducers);
