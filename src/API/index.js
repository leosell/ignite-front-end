import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.81:4000',
    baseURL: 'http://10.100.106.109:4000',
})

export default api;