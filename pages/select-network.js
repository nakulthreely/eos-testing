import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import Head from "next/head";

import SelectNetworkCard from "../components/SelectNetworkCard";

import { EOSContext } from "../contexts/EOSContext";
import { Web3Context } from "../contexts/Web3Context";

import useRequestAccountsMetaMask from "../hooks/useRequestAccountsMetaMask";
import useAccessPassPrice from "../hooks/useAccessPassPrice";

import CONFIG from "../config/config.json";

import defaultBg from "../public/assets/defaultBg.png";
import selectNetworkImg from "../public/assets/select_network.png";
import selectNetworkMobile from "../public/assets/selectnetworkmobile.png";
import arbitrum from "../public/assets/blockchain_logo/arbitrum.svg";
import avalanche from "../public/assets/blockchain_logo/avalanche.png";
import binance_smart_chain from "../public/assets/blockchain_logo/binance_smart_chain.png";
import ethereum from "../public/assets/blockchain_logo/ethereum.png";
import fantom from "../public/assets/blockchain_logo/fantom.png";
import gnosis from "../public/assets/blockchain_logo/gnosis.png";
import harmony from "../public/assets/blockchain_logo/harmony.png";
import moonriver from "../public/assets/blockchain_logo/moonriver.png";
import optimism from "../public/assets/blockchain_logo/optimism.png";
import polygon from "../public/assets/blockchain_logo/polygon.png";

const SelectNetwork = () => {
  const { setBlur, url, AOS, setIsHomePage } = useContext(EOSContext);
  const {
    selectedAccessPassID,
    accessPassContractEthereum,
    accessPassContractBSC,
    accessPassContractAvalanche,
    accessPassContractPolygon,
  } = useContext(Web3Context);
  const { response } = useAccessPassPrice(selectedAccessPassID, url);
  //const { priceEthereum, priceBSC, priceAvalanche, pricePolygon } = 1;

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  useEffect(() => {
    setBlur(true);
    setIsHomePage(false);
  }, []);

  return (
    <>
      <Head>
        <title>Select Network | Empire Of Sight</title>
        <meta
          name="description"
          content="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, decentralized token profitability, and its Virtual Item Economy."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.empireofsight.com/" />
        <meta property="og:title" content="Empire Of Sight" />
        <meta
          property="og:description"
          content="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, decentralized token profitability, and its Virtual Item Economy."
        />
        <meta
          property="og:image"
          content="https://www.empireofsight.com/assets/sectionOneBg.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.empireofsight.com/" />
        <meta property="twitter:title" content="Empire Of Sight" />
        <meta
          property="twitter:description"
          content="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, decentralized token profitability, and its Virtual Item Economy."
        />
        <meta
          property="twitter:image"
          content="https://www.empireofsight.com/assets/sectionOneBg.jpg"
        />
        <meta property="twitter:site" content="@EmpireOfSight" />
        <meta property="twitter:creator" content="@EmpireOfSight" />
      </Head>
      <div className="accessPassWrapper">
        <div className="container">
          <div className="accessPassRow">
            <div className="mx-auto d-block">
              <div className="accessPassHeading" data-aos="fade-down">
                <div className="sm-view-now">
                  <Image
                    className="rounded"
                    src={selectNetworkMobile}
                    placeholder="blur"
                    alt="Obtain your access pass - Choose your access pass and enter the Empire Of Sight! The passes range between 30-365 days as well as a prototype pass."
                  />
                </div>
                <div className="lg-view-now">
                  <Image
                    className="rounded"
                    src={selectNetworkImg}
                    placeholder="blur"
                    alt="Obtain your access pass - Choose your access pass and enter the Empire Of Sight! The passes range between 30-365 days as well as a prototype pass."
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-2">
              {/* ----------------------------------- ETHEREUM ----------------------------------- */}

              <SelectNetworkCard
                network="ETHEREUM"
                title="Ethereum"
                currrency="ETH"
                image={ethereum}
                alt="Ethereum - Empire Of Sight"
                svg={false}
                contract={accessPassContractEthereum}
                price={response}
              />

              {/* ----------------------------------- BSC ----------------------------------- */}

              <SelectNetworkCard
                network="BSC"
                title="Binance Smart Chain"
                currrency="BNB"
                image={binance_smart_chain}
                alt="Binance Smart Chain (BNB) - Empire Of Sight"
                svg={false}
                contract={accessPassContractBSC}
                price={response}
              />

              {/* ----------------------------------- AVALANCHE ----------------------------------- */}

              <SelectNetworkCard
                network="AVALANCHE"
                title="Avalanche"
                currrency="AVAX"
                image={avalanche}
                alt="Avalanche (AVAX) - Empire Of Sight"
                svg={false}
                contract={accessPassContractAvalanche}
                price={response}
              />

              {/* ----------------------------------- POLYGON ----------------------------------- */}

              <SelectNetworkCard
                network="POLYGON"
                title="Polygon"
                image={polygon}
                alt="Polygon - Empire Of Sight"
                svg={false}
                contract={accessPassContractPolygon}
                price={response}
              />

              {/* 
                
              <div>
                <SelectNetworkCard
                  network="ARBITRUM"
                  title="Arbitrum"
                  currrency="ETH"
                  image={arbitrum}
                  alt="Arbitrum - Empire Of Sight"
                  svg={true}
                />
              </div>

                
              <div>
                <SelectNetworkCard
                  network="OPTIMISM"
                  title="Optimism"
                  image={optimism}
                  alt="Optimism - Empire Of Sight"
                  svg={false}
                />
              </div>

             
              <div>
                <SelectNetworkCard
                  network="FANTOM"
                  title="Fantom"
                  image={fantom}
                  alt="Fantom - Empire Of Sight"
                  svg={false}
                />
              </div>
              
              <div>
                <SelectNetworkCard
                  network="GNOSIS"
                  title="Gnosis"
                  image={gnosis}
                  alt="Gnosis - Empire Of Sight"
                  svg={false}
                />
              </div>
               
              <div>
                <SelectNetworkCard
                  network="HARMONY"
                  title="Harmony"
                  image={harmony}
                  alt="Harmony - Empire Of Sight"
                  svg={false}
                />
              </div>
              
              <div>
                <SelectNetworkCard
                  network="MOONRIVER"
                  title="Moonriver"
                  image={moonriver}
                  alt="Moonriver - Empire Of Sight"
                  svg={false}
                />
              </div>
              
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectNetwork;
