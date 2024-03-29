import { useState, useEffect, useRef } from "react";

export const useApiData = ({ endpoint, pathParams }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const abortControllerRef = useRef({});

  // Avoid mutating props
  let apiUrl = endpoint;

  // We need to compare endpoint without dynamic values
  if (pathParams) {
    Object.entries(pathParams).forEach(([key, value]) => {
      apiUrl = apiUrl.replace(`:${key}`, value);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    setError("");

    // Cancel previous api call
    if (abortControllerRef.current[endpoint]) {
      abortControllerRef.current[endpoint].abort();
    }

    // Create a new contoller for the current api call
    const controller = new AbortController();
    abortControllerRef.current[endpoint] = controller;

    const fetchApi = async () => {
      try {
        const res = await fetch(apiUrl);
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
  }, [apiUrl, endpoint]);

  return { data, isLoading, error };
};
