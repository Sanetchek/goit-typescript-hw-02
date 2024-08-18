import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = "prUS59a1-n2HFdnyOA5uWrf4d2-fv-Tye2D_flRX3sI";

export const searchPhotos = async (query, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 10,
      orientation: 'landscape',
    }
  });
  return response.data;
};
