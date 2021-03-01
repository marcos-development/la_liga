import {
    ALL_LIST_USERS_EXITO,
    ALL_LIST_USERS_ERROR,
    DETAIL_USER_EXITO,
    DETAIL_USER_ERROR,
    DELETE_USER_EXITO,
    DELETE_USER_ERROR,
    UPDATE_USER_EXITO,
    UPDATE_USER_ERROR,
} from '../constants';

import clienteAxios from '../config/axios';

export function getListUsers() {
    return async (dispatch) => {
        try {
            const respuesta = await clienteAxios.get('users');

            dispatch(getListUsersExito(respuesta.data.data));
        } catch (error) {
            dispatch(getListUsersError(error.message));
        }
    };
}
const getListUsersExito = users => ({ type: ALL_LIST_USERS_EXITO, payload: users });
const getListUsersError = message => ({ type: ALL_LIST_USERS_ERROR, payload: message });

export function getDetailUser(id) {
    return async (dispatch) => {
        try {
            const respuesta = await clienteAxios.get(`users/${id}`);
            dispatch(getDetailUserExito(respuesta.data.data));
        } catch (error) {
            dispatch(getDetailUserError(error.message));
        }
    };
}
const getDetailUserExito = user => ({ type: DETAIL_USER_EXITO, payload: user });
const getDetailUserError = message => ({ type: DETAIL_USER_ERROR, payload: message });

export function getRemoveUser(id) {
    return async (dispatch) => {
        try {
            await clienteAxios.delete(`users/${id}`);

            dispatch(getRemoveUserExito(id));
        } catch (error) {
            dispatch(getRemoveUserError(error.message));
        }
    };
}
const getRemoveUserExito = id => ({ type: DELETE_USER_EXITO, payload: id });
const getRemoveUserError = message => ({ type: DELETE_USER_ERROR, payload: message });

export function getUpdateUser(id, data) {
    return async (dispatch) => {
        try {
            const respuesta = await clienteAxios.put(`users/${id}`,
                JSON.stringify(data));

            dispatch(getUpdateUserExito(respuesta.data));
        } catch (error) {
            dispatch(getUpdateUserError(error.message));
        }
    };
}
const getUpdateUserExito = id => ({ type: UPDATE_USER_EXITO, payload: id });
const getUpdateUserError = message => ({ type: UPDATE_USER_ERROR, payload: message });