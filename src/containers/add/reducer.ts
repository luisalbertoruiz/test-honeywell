import produce from "immer";
import { handleActions } from "redux-actions";

import { initialState } from "./state";
import { AddState, AddTypes } from "./types";

const handleLoading = (state: AddState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.isLoading = payload;
  });
};
const handleFirstName = (state: AddState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.firstName = payload;
  });
};
const handleLasttName = (state: AddState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.lastName = payload;
  });
};
const handleAddress = (state: AddState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.address = payload;
  });
};
const handlePhNumber = (state: AddState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.phNumber = payload;
  });
};
const handleGpa = (state: AddState, action: any) => {
  const { payload } = action;
  return produce(state, (draft) => {
    draft.gpa = payload;
  });
};

const addReducer = produce(
  handleActions(
    {
      [AddTypes.HANDLE_TABLE_IS_LOADING_REDUCER]: handleLoading,
      [AddTypes.HANDLE_TABLE_SET_FIRST_NAME_REDUCER]: handleFirstName,
      [AddTypes.HANDLE_TABLE_SET_LAST_NAME_REDUCER]: handleLasttName,
      [AddTypes.HANDLE_TABLE_SET_ADDRESS_REDUCER]: handleAddress,
      [AddTypes.HANDLE_TABLE_SET_PH_NUMBER_REDUCER]: handlePhNumber,
      [AddTypes.HANDLE_TABLE_SET_GPA_REDUCER]: handleGpa,
    },
    initialState
  )
);

export { addReducer };
