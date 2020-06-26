import { Student, Header } from "../../interfaces";

export enum TableActionTypes {
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
export interface HandleIsLoadingAction {
  type: TableActionTypes.HANDLE_TABLE_IS_LOADING;
  payload: boolean;
}
export interface HandleSetHeaders {
  type: TableActionTypes.HANDLE_TABLE_SET_HEADERS;
  payload: Array<Header>;
}
export interface HandleSetData {
  type: TableActionTypes.HANDLE_TABLE_SET_DATA;
  payload: Array<Student>;
}
export interface HandleGetDataAction {
  type: TableActionTypes.HANDLE_TABLE_GET_DATA;
}
export interface HandleGetDataStarted {
  type: TableActionTypes.HANDLE_TABLE_GET_DATA_STARTED;
}
export interface HandleGetDataFinished {
  type: TableActionTypes.HANDLE_TABLE_GET_DATA_FINISHED;
}
export interface HandleGetDataError {
  type: TableActionTypes.HANDLE_TABLE_GET_DATA_ERROR;
  payload: any;
}
