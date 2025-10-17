import axios from "axios";

const API_BASE = "https://hashverse.onrender.com";

export const getHash = async (value, algorithm) => {
  const res = await axios.get(`${API_BASE}/hash`, {
    params: { value, algorithm },
  });
  return res.data;
};
