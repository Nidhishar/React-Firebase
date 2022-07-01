

import * as actions from "../action";
import { put } from "redux-saga/effects";

export function* getAllUserDetail(action) {

    try {
      if (action.payload) {
        yield put(actions.getAllUserDetailsSuccess(action.payload));
      }
    } catch (e) {

      yield put(actions.getAllUserDetailsError(e));
    }
}