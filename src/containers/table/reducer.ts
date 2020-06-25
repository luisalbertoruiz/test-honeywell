import produce from "immer";
import { handleActions } from "redux-actions";

import { initialState } from "./state";
import { TableState, TableActionTypes } from "./types";

const handleLoading = (state: TableState, action: any) => {
  console.log(action);
  const { payload } = action;
  return produce(state, (draft) => {
    draft.isLoading = payload;
  });
};

const tableReducer = produce(
  handleActions(
    {
      [TableActionTypes.HANDLE_TABLE_IS_LOADING.toString()]: handleLoading,
    },
    initialState
  )
);

export { tableReducer };
