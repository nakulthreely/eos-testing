import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";

import { Web3Context } from "../../../../../contexts/Web3Context";
import { EOSContext } from "../../../../../contexts/EOSContext";

const Item = (props) => {
  const [isShown, setIsShown] = useState(false);
  const { isMTModalOpen, setIsMTModalOpen, url, isRightAddress } =
    useContext(EOSContext);
  const {
    setSelectedItemPrice,
    selectedItemPrice,
    selectedItemAmount,
    setSelectedItemAmount,
    selectedItemID,
    setSelectedItemID,
    selectedItemName,
    setSelectedItemName,
    selectedItemImg,
    setSelectedItemImg,
    setPriceETH,
    setPriceBNB,
    setPriceAVAX,
    setPriceMATIC,
    web3,
    itemPrice,
    setItemPrice,
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
    metamaskConnected,
  } = useContext(Web3Context);

  const setValues = () => {
    setSelectedItemName(props.name);
    setSelectedItemAmount(1);
    setSelectedItemPrice(0);
    setSelectedItemID(props.id);
    setSelectedItemImg(props.image);
    setItemSlot(props.slot);
  };

  useEffect(async () => {
    await Axios.post(`${url}/transmute-prices`).then(async (response) => {
      if (web3) {
        setPriceETH_MT(
          await web3.utils.fromWei(response.data.Ethereum.toString(), "ether")
        );
        setPriceBNB_MT(
          await web3.utils.fromWei(response.data.BSC.toString(), "ether")
        );
        setPriceAVAX_MT(
          await web3.utils.fromWei(response.data.Avalanche.toString(), "ether")
        );
        setPriceMATIC_MT(
          await web3.utils.fromWei(response.data.Polygon.toString(), "ether")
        );
      }
    });
  }, [isShown]);

  return (
    <>
      <div className="bg-gradient-to-r from-rose-50 to-teal-50 col-span-1 p-2 rounded">
        <div className="flex flex-col w-full justify-end">
          <div className="relative flex flex-col items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex rounded">
              <span className="relative z-50 p-2 text-md leading-none text-gray-50 font-inter text-center bg-gray-900 shadow-lg rounded">
                {props.tooltip}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
          </div>
          <Image
            src={`https://www.empireofsight.com/items/${props.id}.png`}
            height={128}
            width={128}
            layout="fixed"
            className="hover:scale-110 transition delay-150 duration-300 ease-in-out cursor-default"
          />
          <div className="pt-2 h-24">
            <p className="font-bold font-inter self-center text-md text-center cursor-default">
              {props.name}
            </p>
          </div>
          <div className="self-center w-full">
            {!isShown ? (
              <div className="flex justify-between items-center w-full ">
                <button
                  type="button"
                  className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 w-full font-inter font-bold text-xl rounded "
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  Transmute
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="shadow-2xl shadow-indigo-500/40 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-inter font-bold text-xl p-2 w-full rounded"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={() => {
                    if (metamaskConnected && isRightAddress) {
                      setValues();
                      setIsMTModalOpen(true);
                    }
                  }}
                >
                  Let's Go!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
