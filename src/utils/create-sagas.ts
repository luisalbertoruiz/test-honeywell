import { tableSaga } from "../containers";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([tableSaga()]);
}

export { rootSaga };
