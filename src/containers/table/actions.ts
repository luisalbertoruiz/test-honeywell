import { HandleIsLoadingAction, TableActionTypes } from "./types";

export const handleIsLoadingAction = (
  payload: boolean
): HandleIsLoadingAction => ({
  type: TableActionTypes.HANDLE_TABLE_IS_LOADING,
  payload,
});
