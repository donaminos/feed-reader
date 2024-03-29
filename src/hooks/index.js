import { useState, useEffect } from "react";

export const useApiData = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    const fetchApi = async () => {
      try {
        const res = await fetch(endpoint);
        const apidata = await res.json();
        setData(apidata);
      } catch (e) {
        setError("Sorry! could not fetch data.");
        // log error to Sentry
      } finally {
        setIsLoading(false);
      }
    };

    fetchApi();
  }, [endpoint]);

  return { data, isLoading, error };
};
