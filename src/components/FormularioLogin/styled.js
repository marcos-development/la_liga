import styled from 'styled-components';

export const ImagenLogin = styled.img`
    width: 160px
`;
export const ContainerTitle = styled.div`
    /* height: 130px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    font-size: 30px;
    color: #707070;
    margin-bottom: 40px;
`;
export const ContainerRoot = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input.attrs(props => ({
    size: props.size || '10px',
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
`;
export const SubmitLogin = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;