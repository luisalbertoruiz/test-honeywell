import _ from "lodash";
import { createSelector } from "reselect";

import { initialState } from "./state";
import { State } from "../types";

const tableStateSelector = (state: State) =>
  _.get(state, "table", initialState);

export const dataSelector = createSelector(tableStateSelector, (state) =>
  _.get(state, ["data"])
);
export const headersSelector = createSelector(tableStateSelector, (state) =>
  _.get(state, ["headers"])
);
export const isLoadingSelector = createSelector(tableStateSelector, (state) =>
  _.get(state, ["isLoading"])
);
