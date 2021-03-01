import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import logoLogin from '../../assets/images/logo.jpg';
import { autenticarUsuario } from '../../actions/loginActions';
import { ContainerRoot, ImagenLogin, ContainerTitle, Input, SubmitLogin } from './styled';

const FormularioLogin = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState({ email: '', password: '' });

    const loading = useSelector(state => state.login.loading);

    const handleChangeText = event => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        if (!login.email.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'El email es un campo requerido.',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (!login.password.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'La contraseña es un campo requerido.',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            dispatch(autenticarUsuario(login.email, login.password));
        }
    };

    const { email, password } = login;

    return (
        <ContainerRoot>
            <ImagenLogin src={logoLogin} title="La Liga" />
            <ContainerTitle>
                <p>Bienvenido a La Liga</p>
                { loading ? <p>Cargando...</p> : null }
                <Input
                    id="textEmail"
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={handleChangeText}
                    maxlength="10"
                />
                <Input
                    id="textPassword"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Contraseña"
                    onChange={handleChangeText}
                />
                <SubmitLogin onClick={handleSubmit}>INICIAR SESIÓN</SubmitLogin>
            </ContainerTitle>
        </ContainerRoot>
    );
};

export default FormularioLogin;
