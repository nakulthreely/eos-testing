import { useEffect, useState } from "react";

import useWeb3 from "./useWeb3";

import Item from "../artifacts/Item.json";
import CONFIG from "../config/config.json";

const useItemContract = () => {
  const { web3 } = useWeb3();
  // web3 - METAMASK
  const [itemContractEthereum, setItemContractEthereum] = useState(undefined);
  const [itemContractBSC, setItemContractBSC] = useState(undefined);
  const [itemContractAvalanche, setItemContractAvalanche] = useState(undefined);
  const [itemContractPolygon, setItemContractPolygon] = useState(undefined);

  useEffect(() => {
    if (window.ethereum && web3) {
      const init = async () => {
        const itemContractEthereum = new web3.eth.Contract(
          Item,
          CONFIG.WEB3.NETWORK.ETHEREUM.ITEM_ADDRESS
        );

        setItemContractEthereum(itemContractEthereum);

        const itemContractBSC = new web3.eth.Contract(
          Item,
          CONFIG.WEB3.NETWORK.BSC.ITEM_ADDRESS
        );

        setItemContractBSC(itemContractBSC);

        const itemContractAvalanche = new web3.eth.Contract(
          Item,
          CONFIG.WEB3.NETWORK.AVALANCHE.ITEM_ADDRESS
        );

        setItemContractAvalanche(itemContractAvalanche);

        const itemContractPolygon = new web3.eth.Contract(
          Item,
          CONFIG.WEB3.NETWORK.POLYGON.ITEM_ADDRESS
        );

        setItemContractPolygon(itemContractPolygon);
      };

      init();
    }
  }, [web3]);

  return {
    itemContractEthereum,
    itemContractBSC,
    itemContractAvalanche,
    itemContractPolygon,
  };
};

export default useItemContract;
