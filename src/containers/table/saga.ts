import { call, put } from "redux-saga/effects";
// import { v4 } from "uuid";

import * as actions from "./actions";
import headers from "../../mocks/headers.json";
import data from "../../mocks/data.json";

function* handleGetDataHandler() {
  try {
    yield put(actions.handleGetDataStartedAction());
    yield put(actions.handleSetHeadersAction(headers));
    yield put(actions.handleSetDataAction(data));
    yield put(actions.handleGetDataFinishedAction());
  } catch (error) {
    yield put(actions.handleGetDataErrorAction(error));
  }
}

export function* tableSaga() {
  yield call(handleGetDataHandler);
}
