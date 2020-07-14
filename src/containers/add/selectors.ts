import _ from "lodash";
import { createSelector } from "reselect";

import { initialState } from "./state";
import { State } from "../types";

const addStateSelector = (state: State) => _.get(state, "add", initialState);

export const firstNameSelector = createSelector(addStateSelector, (state) =>
  _.get(state, ["firstName"])
);
export const lastNameSelector = createSelector(addStateSelector, (state) =>
  _.get(state, ["lastName"])
);
export const addressSelector = createSelector(addStateSelector, (state) =>
  _.get(state, ["address"])
);
export const phNumberSelector = createSelector(addStateSelector, (state) =>
  _.get(state, ["phNumber"])
);
export const gpaSelector = createSelector(addStateSelector, (state) =>
  _.get(state, ["gpa"])
);
export const isLoadingSelector = createSelector(addStateSelector, (state) =>
  _.get(state, ["isLoading"])
);
