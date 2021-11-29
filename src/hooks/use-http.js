import { useState } from "react";

const useHttp = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig ? requestConfig.method : "GET",
        body: requestConfig ? requestConfig.body : null,
        headers: requestConfig ? requestConfig.headers : {},
      });
      if (!response.ok) throw new Error("Request Failed");
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message || "Something Went Wrong");
    }
    setIsLoading(false);
  };

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
