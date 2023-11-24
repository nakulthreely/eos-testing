import { useEffect, useState } from "react";
import Web3 from "web3";
import CONFIG from "../config/config.json";
//import CONFIG from "../config/configTest.json";

const useWeb3 = () => {
  const [web3, setWeb3] = useState(undefined);
  const [web3HTTP, setWeb3HTTP] = useState(undefined);

  useEffect(() => {
    if (window.ethereum) {
      const init = async () => {
        const web3 = new Web3(window.ethereum);

        setWeb3(web3);
      };
      /* temporary */
      init();
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(CONFIG.WEB3.NETWORK.ETHEREUM.RPC_PUBLIC);

      setWeb3HTTP(web3);
    };
    /* tmeporary */
    init();
  }, []);

  return {
    web3,
    web3HTTP,
  };
};

export default useWeb3;
