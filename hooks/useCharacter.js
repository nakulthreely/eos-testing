import { useEffect, useState } from "react";
import Axios from "axios";

const useCharacter = (user, apiUrl) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    //console.log(user);
    Axios.post(`${apiUrl}/character`, {
      account: user,
    }).then((response) => {
      setResponse(response);
      //console.log(response.data.classname);
    });
  }, []);

  return { response };
};

export default useCharacter;
