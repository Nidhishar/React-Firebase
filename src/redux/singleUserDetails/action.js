

import * as actions from "../action";
import { put } from "redux-saga/effects";

export function* getSingleUserDetail(action) {

    try {
      if (action.payload) {
        yield put(actions.getSingleUserDetailsSuccess(action.payload));
      }
    } catch (e) {

      yield put(actions.getSingleUserDetailsError(e));
    }
}