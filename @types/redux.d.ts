import {} from "redux";
declare module "redux" {
  export interface Store {
    asyncReducers?: string;
  }
}
