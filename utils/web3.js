import CONFIG from "../config/config.json";

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const switchNetwork = async (network) => {
  let chainId, chainName, currrencyName, currencySymbol, RPC, blockExplorerUrl;

  switch (network) {
    case "ETHEREUM":
      chainId = CONFIG.WEB3.NETWORK.ETHEREUM.CHAIN_ID;
      chainName = CONFIG.WEB3.NETWORK.ETHEREUM.CHAIN_NAME;
      currrencyName = CONFIG.WEB3.NETWORK.ETHEREUM.CURRENCY_NAME;
      currencySymbol = CONFIG.WEB3.NETWORK.ETHEREUM.CURRENCY_SYMBOL;
      RPC = CONFIG.WEB3.NETWORK.ETHEREUM.RPC_PUBLIC;
      blockExplorerUrl = CONFIG.WEB3.NETWORK.ETHEREUM.BLOCK_EXPLORER;
      break;
    case "BSC":
      chainId = CONFIG.WEB3.NETWORK.BSC.CHAIN_ID;
      chainName = CONFIG.WEB3.NETWORK.BSC.CHAIN_NAME;
      currrencyName = CONFIG.WEB3.NETWORK.BSC.CURRENCY_NAME;
      currencySymbol = CONFIG.WEB3.NETWORK.BSC.CURRENCY_SYMBOL;
      RPC = CONFIG.WEB3.NETWORK.BSC.RPC_PUBLIC;
      blockExplorerUrl = CONFIG.WEB3.NETWORK.BSC.BLOCK_EXPLORER;
      break;
    case "AVALANCHE":
      chainId = CONFIG.WEB3.NETWORK.AVALANCHE.CHAIN_ID;
      chainName = CONFIG.WEB3.NETWORK.AVALANCHE.CHAIN_NAME;
      currrencyName = CONFIG.WEB3.NETWORK.AVALANCHE.CURRENCY_NAME;
      currencySymbol = CONFIG.WEB3.NETWORK.AVALANCHE.CURRENCY_SYMBOL;
      RPC = CONFIG.WEB3.NETWORK.AVALANCHE.RPC_PUBLIC;
      blockExplorerUrl = CONFIG.WEB3.NETWORK.AVALANCHE.BLOCK_EXPLORER;
      break;
    case "POLYGON":
      chainId = CONFIG.WEB3.NETWORK.POLYGON.CHAIN_ID;
      chainName = CONFIG.WEB3.NETWORK.POLYGON.CHAIN_NAME;
      currrencyName = CONFIG.WEB3.NETWORK.POLYGON.CURRENCY_NAME;
      currencySymbol = CONFIG.WEB3.NETWORK.POLYGON.CURRENCY_SYMBOL;
      RPC = CONFIG.WEB3.NETWORK.POLYGON.RPC_PUBLIC;
      blockExplorerUrl = CONFIG.WEB3.NETWORK.POLYGON.BLOCK_EXPLORER;
      break;
    default:
    // code block
  }

  if (window.ethereum) {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: chainId,
                chainName: chainName,
                nativeCurrency: {
                  name: currrencyName,
                  symbol: currencySymbol,
                  decimals: 18,
                },
                rpcUrls: [RPC],
                blockExplorerUrls: [blockExplorerUrl],
                iconUrls: [""],
              },
            ],
          });
        } catch (addError) {
          console.log("Did not add network");
        }
      }
    }
  }
};
