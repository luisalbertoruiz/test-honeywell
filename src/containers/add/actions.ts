import { AddTypes, AddActionsTypes, AddReducerTypes } from "./types";

export const handleIsLoadingAction = (payload: boolean): AddReducerTypes => ({
  type: AddTypes.HANDLE_TABLE_IS_LOADING_REDUCER,
  payload,
});
