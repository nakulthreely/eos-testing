import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { InputNumber, InputGroup } from "rsuite";
import Axios from "axios";

import { Web3Context } from "../../../../../contexts/Web3Context";
import { EOSContext } from "../../../../../contexts/EOSContext";

const Item = (props) => {
  const [isShown, setIsShown] = useState(false);
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
    setSelectedItemFinalPrice,
    metamaskConnected,
  } = useContext(Web3Context);
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(props.price);
  const [descriptionHover, setDescriptionHover] = useState(false);
  const [textHover, setTextHover] = useState(false);
  const { setIsModalOpen, url, isRightAddress } = useContext(EOSContext);

  const handleMinus = () => {
    const val = parseInt(value, 10) - 1;
    if (val > 0) setValue(val);
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };

  const setValues = () => {
    setSelectedItemName(props.name);
    setSelectedItemAmount(value);
    setSelectedItemPrice(props.price);
    setSelectedItemFinalPrice(props.price * value);
    setSelectedItemID(props.id);
    setSelectedItemImg(props.image);
  };

  useEffect(async () => {
    await Axios.post(`${url}/item-prices`, {
      itemID: props.id,
      itemAmount: value,
    }).then(async (response) => {
      //console.log(await response);
      setPriceETH(
        await web3.utils.fromWei(response.data.Ethereum.toString(), "ether")
      );
      setPriceBNB(
        await web3.utils.fromWei(await response.data.BSC.toString(), "ether")
      );
      setPriceAVAX(
        await web3.utils.fromWei(
          await response.data.Avalanche.toString(),
          "ether"
        )
      );
      setPriceMATIC(
        await web3.utils.fromWei(
          await response.data.Polygon.toString(),
          "ether"
        )
      );
    });
  }, [isShown]);

  useEffect(() => {
    setPrice(props.price * value); // local price of the item component
  }, [value]);

  return (
    <>
      <div className="bg-gradient-to-r from-rose-50 to-teal-50 col-span-1 p-2 rounded">
        <div className="flex flex-col justify-end">
          <div className="relative flex flex-col items-center h-8">
            <div>
              <div
                class="absolute top-0 right-0"
                onMouseOver={() => setDescriptionHover(true)}
                onMouseOut={() => setDescriptionHover(false)}
              >
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
              </div>
              <div>
                {props.text !== "" && (
                  <>
                    <div
                      className="absolute top-0 left-0"
                      onMouseOver={() => setTextHover(true)}
                      onMouseOut={() => setTextHover(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {!descriptionHover && !textHover ? (
            <div className="h-32">
              <Image
                src={`https://www.empireofsight.com/items/${props.id}.png`}
                height={128}
                width={128}
                layout="fixed"
                className="hover:scale-110 transition delay-150 duration-300 ease-in-out cursor-default"
              />
            </div>
          ) : (
            <>
              {descriptionHover && (
                <div className="flex bg-gray-900 shadow-lg rounded h-32">
                  <span className="m-auto text-center z-50 text-md leading-none text-gray-50 font-inter p-2">
                    {props.tooltip}
                  </span>
                </div>
              )}
              {textHover && (
                <div className="flex bg-gray-900 shadow-lg rounded h-32">
                  <span className="m-auto text-center z-50 p-2">
                    <strong className="text-md text-error-200 hover:text-gray-50">
                      {props.text}
                    </strong>
                  </span>
                </div>
              )}
            </>
          )}

          <div className="pt-2 h-24">
            <p className="font-bold font-inter self-center text-md text-center cursor-default">
              {props.name}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center group">
          <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex rounded">
            <span className="relative z-50 p-2 text-md leading-none text-gray-50 font-inter text-center bg-gray-900 shadow-lg rounded">
              {props.text}
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>
        <InputGroup>
          <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
          <InputNumber
            defaultValue={1}
            min={1}
            className={"custom-input-number"}
            value={value}
            onChange={setValue}
          />
          <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
        </InputGroup>
        <div className="self-center w-full pt-2 ">
          {!isShown ? (
            <div className="flex justify-between items-center w-full ">
              <button
                type="button"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 w-full font-inter font-bold text-xl rounded "
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                ${Number(price).toFixed(2)}
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
                  //if (metamaskConnected && isRightAddress) {
                  setValues();
                  setIsModalOpen(true);
                  //}
                }}
              >
                Purchase
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
