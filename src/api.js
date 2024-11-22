import axios from "axios";

axios.defaults.withCredentials = true;

const apiUrl = import.meta.env.VITE_DB_URL;

const apiClient = axios.create({
  baseURL: apiUrl,
});

let naviaget;

export const navigateLogin = (url) => {
  naviaget = url;
};

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      naviaget("/Login");
    } else if (error.response?.status === 403) {
      alert("Yetkisiz erişim!");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
