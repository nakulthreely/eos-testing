import Image from "next/image";
import { useEffect, useState, useContext } from "react";

import { Web3Context } from "../contexts/Web3Context";

import { switchNetwork } from "../utils/web3";
import useAccessPassContract from "../hooks/useAccessPassContract";
import useAccessPassPrice from "../hooks/useAccessPassPrice";
import useRequestAccountsMetaMask from "../hooks/useRequestAccountsMetaMask";

import { useRouter } from "next/router";

const SelectNetworkCard = (props) => {
  const { connected, accounts } = useRequestAccountsMetaMask();
  const {
    accessPassContractEthereum,
    accessPassContractBSC,
    accessPassContractAvalanche,
    selectedAccessPassID,
    accessPassContractPolygon,
  } = useContext(Web3Context);
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          if (props.network === "ETHEREUM") {
            await switchNetwork(props.network);
            await accessPassContractEthereum.methods
              .mint(selectedAccessPassID)
              .send({
                from: accounts[0],
                value: await props.price.data.Ethereum,
              })
              .then(() => {
                // router.push("/dashboard");
              });
          } else if (props.network === "BSC") {
            await switchNetwork(props.network);
            await accessPassContractBSC.methods
              .mint(selectedAccessPassID)
              .send({
                from: accounts[0],
                value: await props.price.data.BSC,
              })
              .then(() => {
                // router.push("/dashboard");
              });
          } else if (props.network === "AVALANCHE") {
            await switchNetwork(props.network);
            await accessPassContractAvalanche.methods
              .mint(selectedAccessPassID)
              .send({
                from: accounts[0],
                value: await props.price.data.Avalanche,
              })
              .then(() => {
                // router.push("/dashboard");
              });
          } else if (props.network === "POLYGON") {
            await switchNetwork(props.network);
            await accessPassContractPolygon.methods
              .mint(selectedAccessPassID)
              .send({
                from: accounts[0],
                value: await props.price.data.Polygon,
              })
              .then(() => {
                // router.push("/dashboard");
              });
          }
        }}
      >
        <div className="blockchain-logo">
          <h5 className="blockchainTitle text-center text-gray-50">
            {props.title}
          </h5>

          <div className="cardBox" data-aos="zoom-in">
            {props.svg ? (
              <Image
                src={props.image}
                className="object-center object-cover pointer-events-none "
                objectFit="cover"
                alt={props.alt}
              />
            ) : (
              <Image
                src={props.image}
                className="object-center object-cover pointer-events-none "
                objectFit="cover"
                alt={props.alt}
                placeholder="blur"
              />
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default SelectNetworkCard;
