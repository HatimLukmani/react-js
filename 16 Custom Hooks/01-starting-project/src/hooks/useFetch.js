import { useEffect, useState } from "react";
export default function useFetch(fetchFn, initializationValue) {
  const [data, setData] = useState(initializationValue);
  const [isFetching, setIsFetching] = useState(false);

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setData(places);
      } catch (error) {
        setErrorUpdatingPlaces({
          message: error.message || "Failed to fetch user places.",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);
  return {
    data,
    isFetching,
    errorUpdatingPlaces,
    setData,
    setIsFetching,
    setErrorUpdatingPlaces,
  };
}
