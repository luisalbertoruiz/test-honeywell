export enum TableActionTypes {
  HANDLE_TABLE_GET_DATA = "table/handleGetData",
  HANDLE_TABLE_IS_LOADING = "table/handleIsLoading",
}

export interface TableState {
  isLoading: boolean;
}

export interface HandleIsLoadingAction {
  type: TableActionTypes.HANDLE_TABLE_IS_LOADING;
  payload: boolean;
}
