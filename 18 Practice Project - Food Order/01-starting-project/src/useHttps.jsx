import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong !!");
  }
  return responseData;
}
export default function useHttps(url, config) {
  let [errorState, setErrorState] = useState();
  let [data, setData] = useState();
  let [isLoading, setIsLoading] = useState();
  const sendHttp = useCallback(
    async function sendHttp(data) {
      setIsLoading(true);
      try {
        let data = await sendHttpRequest(url, { ...config, body: data });
        setData(data);
      } catch (error) {
        setErrorState(error.message);
      }
      setIsLoading(false);
    },
    [url, config]
  );
  useEffect(() => {
    if (!config || config["method"] === "GET") {
      sendHttp();
    }
  }, [sendHttp, config]);
  return {
    data,
    errorState,
    isLoading,
    sendHttp,
  };
}
