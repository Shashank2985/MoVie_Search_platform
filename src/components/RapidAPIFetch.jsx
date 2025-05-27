import React, { useEffect } from "react";

const RapidAPIFetch = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      };

      try {
        const response = await fetch(
          "https://imdb8.p.rapidapi.com/auto-complete?q=avengers",
          options
        );
        const data = await response.json();
        console.log("Fetched data from RapidAPI:", data);
      } catch (error) {
        console.error("Error fetching RapidAPI data:", error);
      }
    };

    fetchData();
  }, []);

  return null; // No UI rendered here, just fetch on mount
};

export default RapidAPIFetch;
