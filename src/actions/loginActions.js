import {
    INICIAR_SESION,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR,
    USUARIO_AUTENTICADO_ERROR,
    LOGOUT,
} from '../constants';

import clienteAxios from '../config/axios';

export function autenticarUsuario(email, password) {
    return async (dispatch) => {
        dispatch(autenticarUsuarioInit());
        try {
            const respuesta = await clienteAxios.post('login',
                JSON.stringify({
                    'email': email,
                    'password': password
                }));

            dispatch(autenticarUsuarioExito(respuesta.data.token));
        } catch (error) {
            dispatch(autenticarUsuarioError(error.response.data.error));
        }
    };
}
const autenticarUsuarioInit = () => ({ type: INICIAR_SESION, payload: true });
const autenticarUsuarioExito = token => ({ type: INICIAR_SESION_EXITO, payload: token });
const autenticarUsuarioError = message => ({ type: INICIAR_SESION_ERROR, payload: message });

export function usuarioAutenticado() {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(autenticarUsuarioExito(token));
        } else {
            dispatch({ type: USUARIO_AUTENTICADO_ERROR });
        }
    };
}

export function logout() {
    return async (dispatch) => {
        dispatch({ type: LOGOUT });
    };
}