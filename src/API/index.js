import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.20.60.161:4000',
})

export default api;