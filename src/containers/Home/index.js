import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../actions/loginActions';
import { getListUsers } from '../../actions/userActions';
import { ContainerHeader, ContainerTitle, Center, Logout, Title } from '../styledGeneric';
import { StyledTable } from './style';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const allUsers = useSelector(state => state.user.allUsers);

    useEffect(() => {
        if (!allUsers) {
            dispatch(getListUsers());
        }
    }, []);

    const handleSelectUser = (user) => {
        history.push(`/user/${user.id}`);
    };

    return (
        <div>
            <ContainerHeader>
                <ContainerTitle>
                    <Title>Bienvenido a La Liga</Title>
                </ContainerTitle>
                <Logout onClick={() => dispatch(logout())}>
                    Cerrar Sesión
                </Logout>
            </ContainerHeader>

            <Center V H>
                <StyledTable>
                    <caption>Listado de usuarios</caption>
                    <colgroup>
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers && allUsers.map((user) => (
                            <tr key={user.id} onClick={() => handleSelectUser(user)}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </Center>
        </div>
    );
};

export default Home;
