import {
  TableActionTypes,
  HandleIsLoadingAction,
  HandleGetDataStarted,
  HandleGetDataFinished,
  HandleGetDataError,
  HandleSetData,
  HandleGetDataAction,
  HandleSetHeaders,
} from "./types";
import { Student, Header } from "../../interfaces";

export const handleIsLoadingAction = (
  payload: boolean
): HandleIsLoadingAction => ({
  type: TableActionTypes.HANDLE_TABLE_IS_LOADING,
  payload,
});
export const handleSetHeadersAction = (
  payload: Array<Header>
): HandleSetHeaders => ({
  type: TableActionTypes.HANDLE_TABLE_SET_HEADERS,
  payload,
});
export const handleSetDataAction = (
  payload: Array<Student>
): HandleSetData => ({
  type: TableActionTypes.HANDLE_TABLE_SET_DATA,
  payload,
});
export const handleGetDataAction = (): HandleGetDataAction => ({
  type: TableActionTypes.HANDLE_TABLE_GET_DATA,
});
export const handleGetDataStartedAction = (): HandleGetDataStarted => ({
  type: TableActionTypes.HANDLE_TABLE_GET_DATA_STARTED,
});
export const handleGetDataFinishedAction = (): HandleGetDataFinished => ({
  type: TableActionTypes.HANDLE_TABLE_GET_DATA_FINISHED,
});
export const handleGetDataErrorAction = (payload: any): HandleGetDataError => ({
  type: TableActionTypes.HANDLE_TABLE_GET_DATA_ERROR,
  payload,
});
