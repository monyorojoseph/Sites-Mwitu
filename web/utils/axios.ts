import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {"Content-Type": "multipart/form-data"}
});

export default axiosInstance;