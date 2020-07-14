import produce from "immer";
import { handleActions } from "redux-actions";

import { initialState } from "./state";
import { TableState, TableTypes } from "./types";

const handleLoading = (state: TableState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.isLoading = payload;
  });
};
const handleData = (state: TableState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.data = payload;
  });
};
const handleHeaders = (state: TableState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.headers = payload;
  });
};

const tableReducer = produce(
  handleActions(
    {
      [TableTypes.HANDLE_TABLE_IS_LOADING]: handleLoading,
      [TableTypes.HANDLE_TABLE_SET_DATA]: handleData,
      [TableTypes.HANDLE_TABLE_SET_HEADERS]: handleHeaders,
    },
    initialState
  )
);

export { tableReducer };
