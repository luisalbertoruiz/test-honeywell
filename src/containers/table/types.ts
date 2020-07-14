import { Student, Header } from "../../interfaces";

export enum TableTypes {
  HANDLE_TABLE_SET_HEADERS = "table/handleSetHeaders",
  HANDLE_TABLE_SET_DATA = "table/handleSetData",
  HANDLE_TABLE_GET_DATA = "table/handleGetData",
  HANDLE_TABLE_GET_DATA_STARTED = "table/handleGetDataSarted",
  HANDLE_TABLE_GET_DATA_FINISHED = "table/handleGetDataFinished",
  HANDLE_TABLE_GET_DATA_ERROR = "table/handleGetDataError",
  HANDLE_TABLE_IS_LOADING = "table/handleIsLoading",
}

export interface TableState {
  isLoading: boolean;
  data: Array<Student>;
  headers: Array<Header>;
}

interface HandleIsLoadingAction {
  type: TableTypes.HANDLE_TABLE_IS_LOADING;
  payload: boolean;
}
interface HandleSetHeaders {
  type: TableTypes.HANDLE_TABLE_SET_HEADERS;
  payload: Array<Header>;
}
interface HandleSetData {
  type: TableTypes.HANDLE_TABLE_SET_DATA;
  payload: Array<Student>;
}
interface HandleGetDataAction {
  type: TableTypes.HANDLE_TABLE_GET_DATA;
}
interface HandleGetDataStarted {
  type: TableTypes.HANDLE_TABLE_GET_DATA_STARTED;
}
interface HandleGetDataFinished {
  type: TableTypes.HANDLE_TABLE_GET_DATA_FINISHED;
}
interface HandleGetDataError {
  type: TableTypes.HANDLE_TABLE_GET_DATA_ERROR;
  payload: any;
}

export type TableActionsTypes =
  | HandleIsLoadingAction
  | HandleSetHeaders
  | HandleSetData
  | HandleGetDataAction
  | HandleGetDataStarted
  | HandleGetDataFinished
  | HandleGetDataError;
