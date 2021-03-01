import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../assets/images/background2.jpg';
import FormularioLogin from '../../components/FormularioLogin';
import { usuarioAutenticado } from '../../actions/loginActions';
import { CLEAN_MESSAGE } from '../../constants';
import { Contenedor, ImagenFondo, Luna, WaveRect, Wave, Welcome } from './style';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const autenticado = useSelector(state => state.login.autenticado);
    const message = useSelector(state => state.login.message);

    useEffect(() => {
        if (autenticado) {
            history.push('/home');
        } else {
            dispatch(usuarioAutenticado());
        }
    }, [autenticado]);

    useEffect(() => {
        if (message) {
            Swal.fire({
                icon: 'warning',
                title: message,
                showConfirmButton: false,
                timer: 1500,
                willClose: () => {
                    console.log('mensaje error');
                    dispatch({ type: CLEAN_MESSAGE });
                }
            });
        }
    }, [message]);

    return (
        <Contenedor>
            <ImagenFondo src={logo} />
            <Luna />
            <WaveRect />
            <Wave />
            <Welcome>
                <FormularioLogin />
            </Welcome>
        </Contenedor>
    );
};

export default Login;
