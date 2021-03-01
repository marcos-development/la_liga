import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { ContainerHeader, ContainerTitle, Logout, Center, Title } from '../styledGeneric';
import { getDetailUser } from '../../actions/userActions';
import { RESTART_STATUS_DELETE, CLEAN_USER_SELECTED } from '../../constants';
import DetailUser from '../../components/DetailUser';

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const detailUser = useSelector(state => state.user.detailUser);
    const eliminado = useSelector(state => state.user.eliminado);

    useEffect(() => {
        dispatch(getDetailUser(id));
    }, []);

    useEffect(() => {
        if (eliminado) {
            dispatch({ type: RESTART_STATUS_DELETE });
            history.push('/');
        }
    }, [eliminado]);

    const handleVolverHome = () => {
        dispatch({ type: CLEAN_USER_SELECTED });
        history.push('/');
    };

    return (
        <div>
            <ContainerHeader>
                <ContainerTitle>
                    <Title>Detalle de Usuario</Title>
                </ContainerTitle>
                <Logout onClick={handleVolverHome}>
                    Volver
                </Logout>
            </ContainerHeader>
            <Center V H>
                { detailUser ? <DetailUser detail={detailUser} /> : null }
            </Center>
        </div>
    );
};

export default UserProfile;
