import { useEffect, useState } from "react";
import Web3 from "web3";
import CONFIG from "../config/config.json";

const Balance = () => {
  const [balanceBsc, setBalanceBsc] = useState(null);
  const [balanceAvalanche, setBalanceAvalanche] = useState(null);
  const [balancePoly, setBalancePoly] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const web3Bsc = new Web3(CONFIG.WEB3.NETWORK.BSC.RPC_PRIVATE);
      const web3Avalanche = new Web3(CONFIG.WEB3.NETWORK.AVALANCHE.RPC_PRIVATE);
      const web3Poly = new Web3(CONFIG.WEB3.NETWORK.POLYGON.RPC_PRIVATE); // RPC URL to connect with the Polygon network.

      try {
        const balBsc = await web3Bsc.eth.getBalance(
          CONFIG.WEB3.NETWORK.BSC.ITEM_ADDRESS
        );
        const balanceAvalanche = await web3Avalanche.eth.getBalance(
          CONFIG.WEB3.NETWORK.AVALANCHE.ITEM_ADDRESS
        );
        const balPoly = await web3Poly.eth.getBalance(
          CONFIG.WEB3.NETWORK.POLYGON.ITEM_ADDRESS
        );
        setBalanceBsc(web3Bsc.utils.fromWei(balBsc, "ether"));
        setBalanceAvalanche(
          web3Avalanche.utils.fromWei(balanceAvalanche, "ether")
        );
        setBalancePoly(web3Poly.utils.fromWei(balPoly, "ether")); // Convert balance from Wei to Ether

        const res = await fetch("https://api.empireofsight.com/count-accounts");
        const data = await res.json();
        setCount(data.count);
      } catch (error) {
        console.error(`Failed to load balance: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="pageWrapper">
        <div className="textSection rounded text-error-200">
          <div>
            <h1>Balances</h1>
            <p>Ethereum: COMING SOON</p>
            <p>BSC: {balanceBsc} BNB</p>
            <p>Avalanche: {balanceAvalanche} AVAX</p>
            <p>Polygon: {balancePoly} MATIC</p>
          </div>
          <div>
            <h1>Database</h1>
            <p>Players Count: {count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
