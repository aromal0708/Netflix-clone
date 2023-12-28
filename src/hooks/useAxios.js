import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = baseUrl;

export const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);
  return { response, error, loading };
};
