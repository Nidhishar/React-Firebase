import * as constants from "./constant";
import { createAction } from "redux-actions";



// export const getPropertyDetailRequest = createAction(constants.GET_PROPERTY_DETAILS_REQUEST);
// export const getPropertyDetailaSuccess = createAction(constants.GET_PROPERTY_DETAILS_SUCCESS);
// export const getPropertyDetailError = createAction(constants.GET_PROPERTY_DETAILS_ERROR);


export const getSingleUserDetailsRequest = createAction(constants.GET_SINGLE_USER_DETAILS_REQUEST);
export const getSingleUserDetailsSuccess = createAction(constants.GET_SINGLE_USER_DETAILS_SUCCESS);
export const getSingleUserDetailsError = createAction(constants.GET_SINGLE_USER_DETAILS_ERROR);

export const getAllUserDetailsRequest = createAction(constants.GET_ALL_USER_DETAILS_REQUEST);
export const getAllUserDetailsSuccess = createAction(constants.GET_ALL_USER_DETAILS_SUCCESS);
export const getAllUserDetailsError = createAction(constants.GET_ALL_USER_DETAILS_ERROR);