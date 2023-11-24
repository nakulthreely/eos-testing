import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";

import { Web3Context } from "../contexts/Web3Context";
import { EOSContext } from "../contexts/EOSContext";

const AccessPassCard = (props) => {
  const [isShown, setIsShown] = useState(false);

  const {
    selectedAPPrice,
    selectedAPAmount,
    selectedAPID,
    selectedAPName,
    accessPassContractEthereum,
    accessPassContractBSC,
    accessPassContractAvalanche,
    accessPassContractPolygon,
    selectedAPImg,
    setSelectedAPImg,
    setSelectedAPAmount,
    setSelectedAPName,
    setSelectedAPPrice,
    setSelectedAPID,
    web3,
    priceETH_AP,
    priceBNB_AP,
    priceAVAX_AP,
    priceMATIC_AP,
    setPriceETH_AP,
    setPriceBNB_AP,
    setPriceAVAX_AP,
    setPriceMATIC_AP,
    accessPassPrice,
    web3HTTP,
  } = useContext(Web3Context);
  const { isAPModalOpen, setIsAPModalOpen, url } = useContext(EOSContext);

  const router = useRouter();

  const setValues = () => {
    setSelectedAPName(props.name);
    //setSelectedAPAmount(value);
    setSelectedAPPrice(props.price);
    setSelectedAPID(props.id);
    setSelectedAPImg(props.image);
  };

  useEffect(async () => {
    if (web3HTTP)
      await Axios.post(`${url}/prices`, {
        accessPassID: props.id,
      }).then(async (response) => {
        setPriceETH_AP(
          /* await web3HTTP.utils.fromWei(
            response.data.Ethereum.toString(),
            "ether"
          )*/
          0
        );
        setPriceBNB_AP(
          await web3HTTP.utils.fromWei(response.data.BSC.toString(), "ether")
        );
        setPriceAVAX_AP(
          await web3HTTP.utils.fromWei(
            response.data.Avalanche.toString(),
            "ether"
          )
        );
        setPriceMATIC_AP(
          await web3HTTP.utils.fromWei(
            response.data.Polygon.toString(),
            "ether"
          )
        );
      });
  }, [isShown]);

  return (
    <>
      <div className={props.type}>
        <div className="cardBox rounded py-4" data-aos="zoom-in">
          <Image
            src={props.image}
            className="object-center object-cover pointer-events-none rounded"
            objectFit="cover"
            alt={props.alt}
            placeholder="blur"
          />
        </div>
        {!props.comingSoon && (
          <div className="bottomSection">
            {!isShown ? (
              <div className="flex justify-between items-center w-full px-8 pb-3">
                <button
                  type="button"
                  className="text-white bg-blueCustom-100 hover:from-pink-500 hover:to-yellow-500 p-2 w-full font-inter font-bold text-xl rounded"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  ${props.price}
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full px-8 pb-3">
                <button
                  type="button"
                  className="text-white bg-redCustom-100 hover:from-pink-500 hover:to-yellow-500 p-2 w-full font-inter font-bold text-xl rounded"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={() => {
                    setValues();
                    setIsAPModalOpen(true);
                  }}
                >
                  Activate
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AccessPassCard;
