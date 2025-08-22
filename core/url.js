import axios from "axios";

let url;

if (process.env.NODE_ENV === "development") {
  url = "https://backend.chaalabagundhi.com";
} else {
  url = "http://localhost:5000";
}

export const API = axios.create({
  baseURL: url,
});

// Add a request interceptor to include the token from localStorage
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Adjust the key if you're using something like 'accessToken' or JWT
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const buildImageUrl = (image) => {
  return image ? `${url}/${image}` : null;
};
