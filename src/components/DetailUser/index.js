import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { getRemoveUser, getUpdateUser } from '../../actions/userActions';
import { Button, ContainerDetail, Input, DatoUser, Label } from './style';

const DetailUser = ({ detail }) => {
    const dispatch = useDispatch();
    const [userEdit, setUserEdit] = useState(detail);
    const [editar, setEditar] = useState(false);
    const handleRemoveUser = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se procederá a eliminar el usuario.',
            icon: 'question',
            iconColor: '#f8bb86',
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonColor: '#0181B2',
            cancelButtonColor: '#dd4444',
            confirmButtonText: 'Si, continuar!!',
            cancelButtonText: 'Cancelar'
        }).then((respuesta) => {
            if (respuesta.value) {
                console.log('Eliminado');
                dispatch(getRemoveUser(detail.id));
            }
        });
    };
    const handleUpdateUser = () => {
        setEditar(!editar);
    };
    const handleUpdateData = event => {
        setUserEdit({
            ...userEdit,
            [event.target.name]: event.target.value
        });
    };

    const handleSaveUser = () => {
        if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
            Swal.fire({
                icon: 'warning',
                title: 'El email no es valido.',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (!first_name.trim() || !last_name.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Todos los datos son obligatorios.',
                showConfirmButton: false,
                timer: 1500
            });
        }
        setEditar(false);
        dispatch(getUpdateUser(id, { first_name, last_name, email }));
        Swal.fire({
            icon: 'success',
            title: 'El usuario se ha actualizado correctamente.',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const { first_name, last_name, email, id } = userEdit;
    return (
        <ContainerDetail>
            <img key={detail.avatar} src={detail.avatar} alt={first_name} style={{ marginBottom: '10px' }} />
            {
                editar
                    ? (
                        <>
                            <div>
                                <Label htmlFor="first_name">Nombre: </Label>
                                <Input id="textName" name="first_name" value={first_name} onChange={handleUpdateData} />
                            </div>
                            <div>
                                <Label htmlFor="last_name">Apellido: </Label>
                                <Input id="textLast" name="last_name" value={last_name} onChange={handleUpdateData} />
                            </div>
                            <div>
                                <Label htmlFor="email" style={{ marginRight: '16px' }}>Email: </Label>
                                <Input id="textEmail" name="email" type="email" value={email} onChange={handleUpdateData} />
                            </div>
                        </>
                    )
                    : (
                        <>
                            <DatoUser>{ `${first_name} ${last_name}` }</DatoUser>
                            <DatoUser>{email}</DatoUser>
                        </>
                    )
            }
            {
                editar
                    ? (
                        <div>
                            <Button onClick={handleUpdateUser} primary>Cancelar</Button>
                            <Button onClick={handleSaveUser}>Guardar</Button>
                        </div>
                    )
                    : (
                        <div>
                            <Button onClick={handleUpdateUser} primary>Editar</Button>
                            <Button onClick={handleRemoveUser}>Eliminar</Button>
                        </div>
                    )
            }

        </ContainerDetail>
    );
};
DetailUser.propTypes = {
    detail: PropTypes.object.isRequired,
};

export default DetailUser;
