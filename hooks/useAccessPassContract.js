import { useEffect, useState } from "react";

import useWeb3 from "./useWeb3";

import AccessPass from "../artifacts/AccessPass.json";
import CONFIG from "../config/config.json";

const useAccessPassContract = () => {
  const { web3 } = useWeb3();
  // web3 - METAMASK
  const [accessPassContractEthereum, setAccessPassContractEthereum] =
    useState(undefined);
  const [accessPassContractBSC, setAccessPassContractBSC] = useState(undefined);
  const [accessPassContractAvalanche, setAccessPassContractAvalanche] =
    useState(undefined);
  const [accessPassContractPolygon, setAccessPassContractPolygon] =
    useState(undefined);

  useEffect(() => {
    if (window.ethereum && web3) {
      const init = async () => {
        const accessPassContractEthereum = new web3.eth.Contract(
          AccessPass,
          CONFIG.WEB3.NETWORK.ETHEREUM.ACCESS_PASS_ADDRESS
        );

        setAccessPassContractEthereum(accessPassContractEthereum);

        const accessPassContractBSC = new web3.eth.Contract(
          AccessPass,
          CONFIG.WEB3.NETWORK.BSC.ACCESS_PASS_ADDRESS
        );

        setAccessPassContractBSC(accessPassContractBSC);

        const accessPassContractAvalanche = new web3.eth.Contract(
          AccessPass,
          CONFIG.WEB3.NETWORK.AVALANCHE.ACCESS_PASS_ADDRESS
        );

        setAccessPassContractAvalanche(accessPassContractAvalanche);

        const accessPassContractPolygon = new web3.eth.Contract(
          AccessPass,
          CONFIG.WEB3.NETWORK.POLYGON.ACCESS_PASS_ADDRESS
        );

        setAccessPassContractPolygon(accessPassContractPolygon);
      };

      init();
    }
  }, [web3]);

  return {
    accessPassContractEthereum,
    accessPassContractBSC,
    accessPassContractAvalanche,
    accessPassContractPolygon,
  };
};

export default useAccessPassContract;
