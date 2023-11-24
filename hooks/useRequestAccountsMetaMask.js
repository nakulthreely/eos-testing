import { useEffect, useState } from "react";

const useRequestAccountsMetaMask = () => {
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum && window.ethereum.isConnected) {
        const accs = await window.ethereum
          .request({
            method: "eth_accounts",
          })
          .catch((err) => {
            console.error(err);
          });

        setAccounts(accs);

        if (accs.length > 0 && localStorage.getItem("user")) {
          //console.log(localStorage.getItem("user"));
          await Axios.post(`${url}/address`, {
            username: localStorage.getItem("user"),
          }).then(async (response) => {
            //console.log(response);
            setUserAddress(await response.data);
            if ((await response.data) !== "") {
              setConnected(true);
              //setMetamaskConnected(true);
              //console.log("connected");
            } else {
              setConnected(false);
              //setMetamaskConnected(false);

              //setMetamaskConnected(false);
            }
          });
        } else {
          setConnected(false);
          //setMetamaskConnected(false);
        }
      }
    };

    init();
  }, []);

  return { connected, accounts };
};

export default useRequestAccountsMetaMask;
