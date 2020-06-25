import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";

import { createReducer } from "./create-reducer";
import { history } from "./history";

const middlewares = [routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = (window as any).window
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const initializeStore = () => {
  const store = createStore(createReducer(), composeEnhancers(...enhancers));
  return store;
};
