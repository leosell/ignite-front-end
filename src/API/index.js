import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.3.61.74:4000',
})

export default api;