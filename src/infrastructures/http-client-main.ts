import axios from "axios";



const mainApi = axios.create({
    baseURL: "http://localhost:12000/v1",
  });

  mainApi.interceptors.request.use((config:any) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error:any) => {
    return Promise.reject(error);
});

export default mainApi;