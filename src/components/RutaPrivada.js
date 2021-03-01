import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { usuarioAutenticado } from '../actions/loginActions';
/* eslint react/prop-types: "off" */
/* eslint no-shadow: "off" */
const RutaPrivada = ({ component: Component, ...props }) => {
    const dispatch = useDispatch();
    const autenticado = useSelector(state => state.login.autenticado);
    const loading = useSelector(state => state.login.loading);

    useEffect(() => {
        dispatch(usuarioAutenticado());
    }, []);

    return (
        <Route
            {...props}
            render={
                props => (
                    !loading && !autenticado
                        ? <Redirect to="/" />
                        : <Component {...props} />
                )
            }
        />
    );
};

export default RutaPrivada;
