import {
    ALL_LIST_USERS_EXITO,
    ALL_LIST_USERS_ERROR,
    DETAIL_USER_EXITO,
    DETAIL_USER_ERROR,
    DELETE_USER_EXITO,
    DELETE_USER_ERROR,
    UPDATE_USER_EXITO,
    UPDATE_USER_ERROR,
    RESTART_STATUS_DELETE,
    CLEAN_USER_SELECTED,
} from '../constants';

const initialState = {
    allUsers: null,
    detailUser: null,
    eliminado: null,
    message: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
    case ALL_LIST_USERS_EXITO:
        return {
            ...state,
            allUsers: action.payload
        };
    case DETAIL_USER_EXITO:
        return {
            ...state,
            detailUser: action.payload
        };
    case DELETE_USER_EXITO: {
        return {
            ...state,
            detailUser: null,
            eliminado: true,
            allUsers: state.allUsers.filter(data => (data.id !== action.payload))
        };
    }
    case UPDATE_USER_EXITO:
        return {
            ...state,
            detailUser: {
                ...state.detailUser,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email
            }
        };
    case CLEAN_USER_SELECTED:
        return {
            ...state,
            detailUser: null
        };
    case RESTART_STATUS_DELETE:
        return {
            ...state,
            eliminado: null
        };
    case UPDATE_USER_ERROR:
    case DETAIL_USER_ERROR:
    case DELETE_USER_ERROR:
        return {
            ...state,
            message: action.payload,
        };
    case ALL_LIST_USERS_ERROR:
        return {
            ...state,
            allUsers: null,
            detailUser: null,
        };
    default: return state;
    }
};

export default user;