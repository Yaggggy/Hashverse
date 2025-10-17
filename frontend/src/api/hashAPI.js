import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export const getHash = async (value, algorithm) => {
  const res = await axios.get(`${API_BASE}/hash`, {
    params: { value, algorithm },
  });
  return res.data;
};
