import { useState, useEffect } from "react";
import axios from "axios";

export const useHttpGet = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [returnedData, setReturnedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("Sending Http request to URL: " + url);
    axios
      .get(url)
      .then(function(response) {
        setIsLoading(false);
        setReturnedData(response.data);
      })
      .catch(function(error) {
        setIsLoading(false);
        console.log(error);
      })
      .finally(function() {});
  }, dependencies);

  return [isLoading, returnedData];
};
