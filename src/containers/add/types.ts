export enum AddTypes {
  HANDLE_TABLE_SET_FIRST_NAME_REDUCER = "table/handleSetFirstNameReducer",
  HANDLE_TABLE_SET_LAST_NAME_REDUCER = "table/handleSetLastNameReducer",
  HANDLE_TABLE_SET_ADDRESS_REDUCER = "table/handleSetAddressReducer",
  HANDLE_TABLE_SET_PH_NUMBER_REDUCER = "table/handleSetPhNumberReducer",
  HANDLE_TABLE_SET_GPA_REDUCER = "table/handleSetGpaReducer",
  HANDLE_TABLE_SET_FIRST_NAME_ACTION = "table/handleSetFirstNameAction",
  HANDLE_TABLE_SET_LAST_NAME_ACTION = "table/handleSetLastNameAction",
  HANDLE_TABLE_SET_ADDRESS_ACTION = "table/handleSetAddressAction",
  HANDLE_TABLE_SET_PH_NUMBER_ACTION = "table/handleSetPhNumberAction",
  HANDLE_TABLE_SET_GPA_ACTION = "table/handleSetGpaAction",
  HANDLE_TABLE_IS_LOADING_REDUCER = "table/handleIsLoading",
}

export interface AddState {
  isLoading: boolean;
  firstName: string;
  lastName: string;
  address: string;
  phNumber: string;
  gpa: number;
}

interface HandleIsLoadingReducer {
  type: AddTypes.HANDLE_TABLE_IS_LOADING_REDUCER;
  payload: boolean;
}
interface HandleSetFirstNameReducer {
  type: AddTypes.HANDLE_TABLE_SET_FIRST_NAME_REDUCER;
  payload: string;
}
interface HandleSetLastNameReducer {
  type: AddTypes.HANDLE_TABLE_SET_LAST_NAME_REDUCER;
  payload: string;
}
interface HandleSetAddressReducer {
  type: AddTypes.HANDLE_TABLE_SET_ADDRESS_REDUCER;
  payload: string;
}
interface HandleSetPhNumberReducer {
  type: AddTypes.HANDLE_TABLE_SET_PH_NUMBER_REDUCER;
  payload: string;
}
interface HandleSetGpaReducer {
  type: AddTypes.HANDLE_TABLE_SET_GPA_REDUCER;
  payload: number;
}
interface HandleSetFirstNameAction {
  type: AddTypes.HANDLE_TABLE_SET_FIRST_NAME_ACTION;
  payload: string;
}
interface HandleSetLastNameAction {
  type: AddTypes.HANDLE_TABLE_SET_LAST_NAME_ACTION;
  payload: string;
}
interface HandleSetAddressAction {
  type: AddTypes.HANDLE_TABLE_SET_ADDRESS_ACTION;
  payload: string;
}
interface HandleSetPhNumberAction {
  type: AddTypes.HANDLE_TABLE_SET_PH_NUMBER_ACTION;
  payload: string;
}
interface HandleSetGpaAction {
  type: AddTypes.HANDLE_TABLE_SET_GPA_ACTION;
  payload: number;
}

export type AddActionsTypes =
  | HandleSetFirstNameAction
  | HandleSetLastNameAction
  | HandleSetAddressAction
  | HandleSetPhNumberAction
  | HandleSetGpaAction;

export type AddReducerTypes =
  | HandleIsLoadingReducer
  | HandleSetFirstNameReducer
  | HandleSetLastNameReducer
  | HandleSetAddressReducer
  | HandleSetPhNumberReducer
  | HandleSetGpaReducer;
