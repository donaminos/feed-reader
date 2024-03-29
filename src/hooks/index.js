import { useState, useEffect, useRef } from "react";

export const useApiData = ({ endpoint, pathParams, onDataLoad }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");
  const abortControllerRef = useRef({});
  const loaded = useRef(false);
  // Avoid mutating props
  let apiUrl = endpoint;
  // In cas a path param has empty value and apiUrl would be wrong
  let apiUrlError = false;

  // We need to compare endpoint without dynamic values
  if (pathParams) {
    Object.entries(pathParams).forEach(([key, value]) => {
      apiUrl = apiUrl.replace(`:${key}`, value);

      if (!value) {
        apiUrlError = true;
      }
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
        setIsReady(true);
      }
    };

    if (!apiUrlError) {
      fetchApi();
    }
  }, [apiUrl, endpoint, apiUrlError]);

  useEffect(() => {
    if (isReady && !loaded.current) {
      loaded.current = true;
      onDataLoad && onDataLoad(data);
    }
  }, [isReady, data, onDataLoad]);

  return { data, isLoading, error, isReady };
};
