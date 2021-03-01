import styled from 'styled-components';

/* eslint import/prefer-default-export: "off" */
export const StyledTable = styled.table`
    caption-side: top;
    border: none;
    border-collapse: collapse;
    caption-side: top;
    td,
    th {
        /* border: none; */
        padding: 5px 25px;
        font-size: 20px;
    }

    td {
        padding: 5px 10px;
        font-size: 20px;
        cursor: pointer;
    }

    tbody tr {
        :nth-of-type(odd) {
            background-color: #efefef;
        }
        :hover {
            background-color: #92daec;
        }
    }
    thead > tr {
        background-color: #254150;
        color: #fff;
    }
    caption {
        font-size: 25px;
        padding: 5px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;