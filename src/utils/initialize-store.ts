import { createStore } from "redux";
import { createReducer } from "./create-reducer";

const composeEnhancers =
  (window as any).window.__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const initializeStore = () => {
  const store = createStore(createReducer(), composeEnhancers);
  return store;
};
