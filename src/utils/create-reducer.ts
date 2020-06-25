import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import history from "./history";

const staticReducers = {
  router: connectRouter(history),
};

export const createReducer = (asyncReducers?: any) =>
  combineReducers({ ...staticReducers, ...asyncReducers });
