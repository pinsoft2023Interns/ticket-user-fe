import axios from "axios";

const api = axios.create({
  baseURL: "https://ticket-web-be-j7fg.onrender.com/",
});

api.interceptors.request.use(
  async (config) => {
    const tokenLocale = sessionStorage.getItem("token");
    if (tokenLocale) {
      config.headers["Authorization"] = `Bearer ${tokenLocale}`;
    }

    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
