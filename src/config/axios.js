import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-type': 'application/json'
    },
    responseType: 'json'
});

export default clienteAxios;