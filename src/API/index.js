import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.20.61.129:4000',
})

export default api;