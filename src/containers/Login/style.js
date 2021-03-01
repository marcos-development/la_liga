import styled from 'styled-components';

export const Contenedor = styled.div`
    flex-grow: 1;
    background-color: #0082b8;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const ImagenFondo = styled.img`
    width: 68%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.3;
`;
export const Luna = styled.div`
    height: 50%;
    top: 50%;
    width: 50%;
    position: absolute;
    left: 62.1%;
    z-index: 4;
    background: radial-gradient(ellipse 11% 22% at -17% 50%,transparent,transparent calc(325%),white 20%);
    background-size: 52% 100%, 110px 200px;
    background-position: 0 0,100% 0;
    background-repeat: no-repeat;
`;
export const WaveRect = styled.div`
    position: absolute;
    top: 0;
    left: 64.8%;
    right: 0px;
    height: 50%;
    width: 6%;
    background-color: white;
    z-index: 4;
`;
export const Wave = styled.div`
    position: absolute;
    left: 61.7%;
    right: 0px;
    height: 56%;
    width: 10%;
    background-color: white;
    border-radius: 54%;
    top: -2.5%;
    z-index: 4;
`;
export const Welcome = styled.div`
    background-color: white;
    width: 32%;
    z-index: 8;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;