import { useEffect, useState } from "react";
import Axios from "axios";

const useHasAccessPass = (address, apiUrl) => {
  const [ownedAccessPasses, setOwnedAccessPasses] = useState([]);

  useEffect(() => {
    //console.log("addr", address);
    /*
    Axios.post(`${apiUrl}/accesspass`, {
      address: address,
    }).then(async (response) => {
      try {
        const owned = [false, false, false, false, false, false];
        if (
          response.data.Ethereum[0] > 0 ||
          response.data.BSC[0] > 0 ||
          response.data.Polygon[0] > 0 ||
          response.data.Avalanche[0] > 0
        ) {
          owned[0] = true;
        } else if (
          response.data.Ethereum[1] > 0 ||
          response.data.BSC[1] > 0 ||
          response.data.Polygon[1] > 0 ||
          response.data.Avalanche[1] > 0
        ) {
          owned[1] = true;
        } else if (
          response.data.Ethereum[2] > 0 ||
          response.data.BSC[2] > 0 ||
          response.data.Polygon[2] > 0 ||
          response.data.Avalanche[2] > 0
        ) {
          owned[2] = true;
        } else if (
          response.data.Ethereum[3] > 0 ||
          response.data.BSC[3] > 0 ||
          response.data.Polygon[3] > 0 ||
          response.data.Avalanche[3] > 0
        ) {
          owned[3] = true;
        } else if (
          response.data.Ethereum[4] > 0 ||
          response.data.BSC[4] > 0 ||
          response.data.Polygon[4] > 0 ||
          response.data.Avalanche[4] > 0
        ) {
          owned[4] = true;
        } else if (
          response.data.Ethereum[5] > 0 ||
          response.data.BSC[5] > 0 ||
          response.data.Polygon[5] > 0 ||
          response.data.Avalanche[5] > 0
        ) {
          owned[5] = true;
        }

        setOwnedAccessPasses(owned);
      } catch (err) {
        console.log(err);
      }
    });
    */

    // temporary solution
    for (let i = 0; i < owned.length; ++i) owned[i] = true;

    setOwnedAccessPasses(owned);
  }, [address, apiUrl]);

  return { ownedAccessPasses };
};

export default useHasAccessPass;
