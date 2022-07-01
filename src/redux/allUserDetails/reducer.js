import * as constants from "../constant";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {},
};

const getAllUserDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.GET_ALL_USER_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.GET_ALL_USER_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: {...action.payload}
            };
        case constants.GET_ALL_USER_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};
export default getAllUserDetailReducer;
