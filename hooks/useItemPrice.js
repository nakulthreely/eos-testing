import { useEffect, useState } from "react";
import Axios from "axios";

const useItemPrice = (itemID, apiUrl) => {
  const [response, setResponse] = useState({});

  useEffect(async () => {
    try {
      await Axios.post(`${apiUrl}/item-prices`, {
        itemID: itemID,
      }).then((response) => {
        setResponse(response);
        //console.log(response.data.classname);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { response };
};

export default useItemPrice;
