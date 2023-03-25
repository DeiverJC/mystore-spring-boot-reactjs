import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

const api = async (config) => {
  try {
    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(error.message);
    }
  }
};

export default api;
