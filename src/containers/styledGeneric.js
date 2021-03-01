import styled, { css } from 'styled-components';

export const ContainerHeader = styled.div`
    top: 0;
    display: flex;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #c8e3f1;
    justify-content: center;
    align-items: center;
`;
export const ContainerTitle = styled.div`
    width: 80%;
    text-align: center;
`;
export const Logout = styled.div`
    height: 30px;
    width: 100px;
    padding: 3px 5px;
    background-color: #dd4444;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
`;
export const CenterV = css`
  display: flex;
  align-items: center;
`;
export const CenterH = css`
  display: flex;
  justify-content: center;
`;
export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Center = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.V ? CenterV : '')}
  ${props => (props.H ? CenterH : '')}
`;
export const Title = styled.p`
  font-size: 25px;
  color: gray;
`;