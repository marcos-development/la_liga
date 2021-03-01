import styled from 'styled-components';

export const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => (props.primary ? '#dd4444' : '#0181B2')};
    color: #fff;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => (props.primary ? '#f8b4b4' : '#71bbd7')};
    border-radius: 3px;
    width: 100px;
    cursor: pointer;
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
export const ContainerDetail = styled.div`
    border: 1px solid gray;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
`;
export const DatoUser = styled.div`
    color: gray;
    font-size: 20px;
    margin: 8px 0px;
`;
export const Label = styled.label`
    width: 100px;
    color: gray;
`;