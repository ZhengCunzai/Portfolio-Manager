import axios from "axios";
const baseUrl = '127.0.0.1:8000'

export function getFoud(data) {
    return axios({
        url: baseUrl + '/getFoud',
        method: 'get',
        data
    });
};
