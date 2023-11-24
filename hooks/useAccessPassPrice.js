import { useEffect, useState } from "react";
import Axios from "axios";

const useAccessPassPrice = (accesPassID, apiUrl) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    Axios.post(`${apiUrl}/prices`, {
      accesPassID: accesPassID,
    }).then((response) => {
      setResponse(response);
      //console.log(response.data.classname);
    });
  }, []);

  return { response };
};

export default useAccessPassPrice;
