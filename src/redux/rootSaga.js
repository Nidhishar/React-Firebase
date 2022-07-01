import { takeLatest, all } from "redux-saga/effects";
import * as constants from "./constant";
import {getSingleUserDetail} from './singleUserDetails/action';
import {getAllUserDetail} from './allUserDetails/action';
 
function* watchActions() { 
yield takeLatest(constants.GET_SINGLE_USER_DETAILS_REQUEST, getSingleUserDetail);
yield takeLatest(constants.GET_ALL_USER_DETAILS_REQUEST, getAllUserDetail);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
