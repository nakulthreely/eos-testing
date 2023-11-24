import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Axios from "axios";

import { EOSContext } from "../../contexts/EOSContext";
import { Web3Context } from "../../contexts/Web3Context";
import { switchNetwork } from "../../utils/web3";

//import useRequestAccountsMetaMask from "../../hooks/useRequestAccountsMetaMask";

import EternalHealthPotion from "../../public/assets/items/eternal-health-potion.png";
import avalanche from "../../public/assets/blockchain_logo/avalanche.png";
import binance_smart_chain from "../../public/assets/blockchain_logo/binance_smart_chain.png";
import ethereum from "../../public/assets/blockchain_logo/ethereum.png";
import polygon from "../../public/assets/blockchain_logo/polygon.png";
import loading from "../../public/assets/loreImageSectionFive.gif";

const SelectNetworkModalMT = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    txStarted,
    setTxStarted,
    user,
    web3ServerUrl,
    isMTModalOpen,
    setIsMTModalOpen,
    setReset,
    reset,
  } = useContext(EOSContext);
  //const { connected, accounts } = useRequestAccountsMetaMask();
  const {
    accounts,
    selectedItemPrice,
    selectedItemAmount,
    selectedItemID,
    selectedItemName,
    itemContractEthereum,
    itemContractBSC,
    itemContractAvalanche,
    itemContractPolygon,
    selectedItemImg,
    setSelectedItemImg,
    setSelectedItemAmount,
    setSelectedItemName,
    setSelectedItemPrice,
    setSelectedItemID,
    web3,
    priceETH,
    priceBNB,
    priceAVAX,
    priceMATIC,
    setPriceETH,
    setPriceBNB,
    setPriceAVAX,
    setPriceMATIC,
    itemPrice,
    connectMetaMask,
    itemSlot,
    setItemSlot,
    priceETH_MT,
    setPriceETH_MT,
    priceBNB_MT,
    setPriceBNB_MT,
    priceAVAX_MT,
    setPriceAVAX_MT,
    priceMATIC_MT,
    setPriceMATIC_MT,
    waitingForConfirmation,
    setWaitingForConfirmation,
  } = useContext(Web3Context);
  const [isShownETH, setIsShownETH] = useState(false);
  const [isShownBNB, setIsShownBNB] = useState(false);
  const [isShownAVAX, setIsShownAVAX] = useState(false);
  const [isShownMATIC, setIsShownMATIC] = useState(false);
  /*
  useEffect(async () => {
    await Axios.post(`${web3ServerUrl}/accounts/address`, {
      username: user,
    }).then(async (response) => {
      //console.log(response.data);
      let result = [];

      for (let i = 0; i < response.data.length; i++) {
        for (let j = 0; j < metadata.items.length; j++) {
          if (response.data[i].name === metadata.items[j].name)
            result.push(metadata.items[j]);
        }
      }

      console.log(result);
      setPlayersItems(result);
      setIsLoaded(true);
    });
  }, [user]);*/

  return (
    <>
      {!txStarted ? (
        <>
          <div
            className={`${
              isMTModalOpen ? "" : "hidden"
            } backdrop-blur-xl bg-gray-900/80 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 z-50 w-full md:inset-0 h-modal md:h-full`}
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-gradient-to-r from-rose-50 to-teal-50 rounded-lg shadow">
                <button
                  type="button"
                  className="hover:scale-110 transition duration-300 ease-in-out absolute pt-3 right-3 text-gray-900 bg-transparent hover:bg-gray-800 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center"
                  data-modal-toggle="crypto-modal"
                  onClick={() => {
                    setIsMTModalOpen(false);
                    setSelectedItemName(undefined);
                    setSelectedItemAmount(undefined);
                    setSelectedItemPrice(undefined);
                    setSelectedItemID(undefined);
                    setSelectedItemImg(undefined);
                    setPriceETH_MT(undefined);
                    setPriceBNB_MT(undefined);
                    setPriceAVAX_MT(undefined);
                    setPriceMATIC_MT(undefined);
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>

                <div className="pt-3 px-6 rounded-t border-b dark:border-gray-600 cursor-default">
                  <h3 className="font-semibold font-inter text-gray-900 text-2xl">
                    Select Network
                  </h3>
                </div>

                <div className="p-6">
                  <div className="flex flex-row bg-gray-100 rounded-lg items-center cursor-default">
                    <Image
                      className="hover:scale-110 transition delay-150 duration-300 ease-in-out"
                      height={70}
                      width={70}
                      src={`https://www.empireofsight.com/items/${selectedItemID}.png`}
                      layout="fixed"
                    />

                    <div className="font-bold font-inter text-gray-900 text-xl leading-none">
                      {selectedItemName}
                    </div>
                  </div>

                  <div className="my-4 space-y-3 list-inside">
                    <div
                      className="hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer no-underline hover:no-underline flex items-center p-2 text-base font-bold text-gray-900 hover:text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 group hover:shadow"
                      onClick={async () => {
                        /*
                        try {
                          await connectMetaMask();
                          await switchNetwork("ETHEREUM");
                          let amounts = [];
                          let slots = [];
                          amounts[0] = selectedItemAmount;
                          slots[0] = itemSlot;
                          await itemContractEthereum.methods
                            .mayneTransmute(selectedItemID, amounts, slots)
                            .send({
                              from: accounts[0],
                              value: await web3.utils.toWei(
                                priceETH_MT.toString(),
                                "ether"
                              ),
                              gasPrice: await web3.eth.getGasPrice(),
                            })
                            .then((receipt) => {
                              setReset(!reset);
                              setIsMTModalOpen(false);
                              setSelectedItemName(undefined);
                              setSelectedItemAmount(undefined);
                              setSelectedItemPrice(undefined);
                              setSelectedItemID(undefined);
                              setSelectedItemImg(undefined);
                              setPriceETH_MT(undefined);
                              setPriceBNB_MT(undefined);
                              setPriceAVAX_MT(undefined);
                              setPriceMATIC_MT(undefined);
                              setWaitingForConfirmation(true);
                            });
                        } catch (err) {
                          console.log(err);
                        }*/
                      }}
                    >
                      <div className="hover:scale-110 transition delay-150 duration-300 ease-in-out flex items-center">
                        <Image
                          height={40}
                          width={40}
                          src={ethereum}
                          layout="fixed"
                        />
                      </div>
                      <span className="flex-1 ml-3 whitespace-nowrap no-underline font-inter">
                        Ethereum
                      </span>

                      {!isShownETH ? (
                        <button
                          type="button"
                          className="hover:scale-110 transition delay-150 duration-300 ease-in-out bg-gray-900 text-white font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownETH(true)}
                          onMouseLeave={() => setIsShownETH(false)}
                        >
                          {/*Number(priceETH_MT).toFixed(3) ETH*/} SOON!
                        </button>
                      ) : (
                        <button
                          type="button"
                          class="hover:scale-110 transition duration-300 ease-in-out shadow-2xl shadow-indigo-500/40 text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownETH(true)}
                          onMouseLeave={() => setIsShownETH(false)}
                        >
                          {/*Let's Get It!*/}SOON!
                        </button>
                      )}
                    </div>
                    <div
                      className="hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer no-underline hover:no-underline flex items-center p-2 text-base font-bold text-gray-900 hover:text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 group hover:shadow"
                      onClick={async () => {
                        try {
                          await connectMetaMask();
                          await switchNetwork("BSC");
                          let amounts = [];
                          let slots = [];
                          amounts[0] = selectedItemAmount;
                          slots[0] = itemSlot;
                          await itemContractBSC.methods
                            .mayneTransmute(selectedItemID, amounts, slots)
                            .send({
                              from: accounts[0],
                              value: await web3.utils.toWei(
                                priceBNB_MT.toString(),
                                "ether"
                              ),
                              gasPrice: await web3.eth.getGasPrice(),
                            })
                            .then((receipt) => {
                              //setReset(!reset);
                              setIsMTModalOpen(false);
                              setSelectedItemName(undefined);
                              setSelectedItemAmount(undefined);
                              setSelectedItemPrice(undefined);
                              setSelectedItemID(undefined);
                              setSelectedItemImg(undefined);
                              setPriceETH_MT(undefined);
                              setPriceBNB_MT(undefined);
                              setPriceAVAX_MT(undefined);
                              setPriceMATIC_MT(undefined);
                              setWaitingForConfirmation(true);
                            });
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    >
                      <div className="hover:scale-110 transition delay-150 duration-300 ease-in-out flex items-center">
                        <Image
                          height={40}
                          width={40}
                          src={binance_smart_chain}
                          layout="fixed"
                        />
                      </div>
                      <span className="flex-1 ml-3 whitespace-nowrap no-underline font-inter">
                        Binance Smart Chain
                      </span>

                      {!isShownBNB ? (
                        <button
                          type="button"
                          className="hover:scale-110 transition delay-150 duration-300 ease-in-out bg-gray-900 text-white font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownBNB(true)}
                          onMouseLeave={() => setIsShownBNB(false)}
                        >
                          {Number(priceBNB_MT).toFixed(3)} BNB
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="hover:scale-110 transition duration-300 ease-in-out shadow-2xl shadow-indigo-500/40 text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownBNB(true)}
                          onMouseLeave={() => setIsShownBNB(false)}
                        >
                          Let's Get It!
                        </button>
                      )}
                    </div>
                    <div
                      className="hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer no-underline hover:no-underline flex items-center p-2 text-base font-bold text-gray-900 hover:text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 group hover:shadow"
                      onClick={async () => {
                        try {
                          await connectMetaMask();
                          await switchNetwork("AVALANCHE");
                          let amounts = [];
                          let slots = [];
                          amounts[0] = selectedItemAmount;
                          slots[0] = itemSlot;
                          await itemContractAvalanche.methods
                            .mayneTransmute(selectedItemID, amounts, slots)
                            .send({
                              from: accounts[0],
                              value: 0,
                              gasPrice: await web3.eth.getGasPrice(),
                            })
                            .then((receipt) => {
                              //setReset(!reset);
                              setIsMTModalOpen(false);
                              setSelectedItemName(undefined);
                              setSelectedItemAmount(undefined);
                              setSelectedItemPrice(undefined);
                              setSelectedItemID(undefined);
                              setSelectedItemImg(undefined);
                              setPriceETH_MT(undefined);
                              setPriceBNB_MT(undefined);
                              setPriceAVAX_MT(undefined);
                              setPriceMATIC_MT(undefined);
                              setWaitingForConfirmation(true);
                            });
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    >
                      <div className="hover:scale-110 transition delay-150 duration-300 ease-in-out flex items-center">
                        <Image
                          height={40}
                          width={40}
                          src={avalanche}
                          layout="fixed"
                        />
                      </div>
                      <span className="flex-1 ml-3 whitespace-nowrap no-underline font-inter">
                        Avalanche
                      </span>
                      {!isShownAVAX ? (
                        <button
                          type="button"
                          className="hover:scale-110 transition delay-150 duration-300 ease-in-out bg-gray-900 text-white font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownAVAX(true)}
                          onMouseLeave={() => setIsShownAVAX(false)}
                        >
                          FREE
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="hover:scale-110 transition duration-300 ease-in-out shadow-2xl shadow-indigo-500/40 text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownAVAX(true)}
                          onMouseLeave={() => setIsShownAVAX(false)}
                        >
                          Let's Get It!
                        </button>
                      )}
                    </div>
                    <div
                      className="hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer no-underline hover:no-underline flex items-center p-2 text-base font-bold text-gray-900 hover:text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 group hover:shadow"
                      onClick={async () => {
                        try {
                          await connectMetaMask();
                          await switchNetwork("POLYGON");
                          let amounts = [];
                          let slots = [];
                          amounts[0] = selectedItemAmount;
                          slots[0] = itemSlot;
                          await itemContractPolygon.methods
                            .mayneTransmute(selectedItemID, amounts, slots)
                            .send({
                              from: accounts[0],
                              value: 0,
                              gasPrice: await web3.eth.getGasPrice(),
                            })
                            .then((receipt) => {
                              //setReset(!reset);
                              setIsMTModalOpen(false);
                              setSelectedItemName(undefined);
                              setSelectedItemAmount(undefined);
                              setSelectedItemPrice(undefined);
                              setSelectedItemID(undefined);
                              setSelectedItemImg(undefined);
                              setPriceETH_MT(undefined);
                              setPriceBNB_MT(undefined);
                              setPriceAVAX_MT(undefined);
                              setPriceMATIC_MT(undefined);
                              setWaitingForConfirmation(true);
                              setItemSlot(slots[0]);
                            });
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    >
                      <div className="hover:scale-110 transition delay-150 duration-300 ease-in-out flex items-center">
                        <Image
                          height={40}
                          width={40}
                          src={polygon}
                          layout="fixed"
                        />
                      </div>
                      <span className="flex-1 ml-3 whitespace-nowrap no-underline font-inter">
                        Polygon
                      </span>
                      {!isShownMATIC ? (
                        <button
                          type="button"
                          className="hover:scale-110 transition delay-150 duration-300 ease-in-out bg-gray-900 text-white font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownMATIC(true)}
                          onMouseLeave={() => setIsShownMATIC(false)}
                        >
                          FREE
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="hover:scale-110 transition duration-300 ease-in-out shadow-2xl shadow-indigo-500/40 text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 font-inter inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-semibold rounded"
                          onMouseEnter={() => setIsShownMATIC(true)}
                          onMouseLeave={() => setIsShownMATIC(false)}
                        >
                          Let's Get It!
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://discord.gg/kxz6DJSXcg"
                      className="inline-flex items-center text-xs font-normal text-gray-500 no-underline hover:underline dark:text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-3 h-3"
                        focusable="false"
                        data-prefix="far"
                        data-icon="question-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                        ></path>
                      </svg>
                      Do you need help?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SelectNetworkModalMT;
