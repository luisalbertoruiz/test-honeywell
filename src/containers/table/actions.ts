import { TableTypes, TableActionsTypes } from "./types";
import { Student, Header } from "../../interfaces";

export const handleIsLoadingAction = (payload: boolean): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_IS_LOADING,
  payload,
});
export const handleSetHeadersAction = (
  payload: Array<Header>
): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_SET_HEADERS,
  payload,
});
export const handleSetDataAction = (
  payload: Array<Student>
): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_SET_DATA,
  payload,
});
export const handleGetDataAction = (): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_GET_DATA,
});
export const handleGetDataStartedAction = (): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_GET_DATA_STARTED,
});
export const handleGetDataFinishedAction = (): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_GET_DATA_FINISHED,
});
export const handleGetDataErrorAction = (payload: any): TableActionsTypes => ({
  type: TableTypes.HANDLE_TABLE_GET_DATA_ERROR,
  payload,
});
