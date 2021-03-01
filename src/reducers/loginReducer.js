import {
    INICIAR_SESION,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR,
    LOGOUT,
    CLEAN_MESSAGE,
    USUARIO_AUTENTICADO_ERROR,
} from '../constants';

const initialState = {
    token: null,
    autenticado: null,
    loading: true,
    message: null,
};

const login = (state = initialState, action) => {
    switch (action.type) {
    case INICIAR_SESION:
        return {
            ...state,
            loading: action.payload
        };
    case INICIAR_SESION_EXITO:
        localStorage.setItem('token', action.payload);
        return {
            ...state,
            token: action.payload,
            autenticado: true,
            loading: false,
        };
    case CLEAN_MESSAGE:
        return {
            ...state,
            message: null
        };
    case USUARIO_AUTENTICADO_ERROR:
        return {
            ...state,
            autenticado: null,
            loading: false,
            message: null,
            token: null,
        };
    case LOGOUT:
    case INICIAR_SESION_ERROR:
        localStorage.removeItem('token');
        return {
            ...state,
            autenticado: null,
            loading: false,
            message: action.payload,
            token: null,
        };
    default: return state;
    }
};

export default login;