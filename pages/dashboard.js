import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";

import { useRouter } from "next/router";

import { EOSContext } from "../contexts/EOSContext";
import { Web3Context } from "../contexts/Web3Context";

import Panel from "../components/dashboard/Panel";
import RedirectAccessPass from "../components/dashboard/RedirectAcessPass";
import CreateCharacter from "../components/dashboard/CreateCharacter";

import useHasAccessPass from "../hooks/useHasAccessPass";

import Loading from "../components/Loading";

import Footer from "../components/Footer";
import "@tria-sdk/authenticate/dist/index.css";


const Dashboard = () => {
  const {
    loginStatus,
    setBlur,
    hasCharacter,
    accounts,
    user,
    url,
    ownedAccessPasses,
    setHasCharacter,
    setOwnedAccessPasses,
    AOS,
    setIsHomePage,
    setIsLoading,
    hasAccessPass,
    setHasAccessPass,
    web3ServerUrl,
    accountsMetaMask,
    setAccountsMetaMask,
    setUserAddress,
    userAddress,
    Application2,
  } = useContext(EOSContext);
  const {
    metamaskConnected,
    setMetamaskConnected,
    itemSlot,
    setItemSlot,
    itemsReset,
    setItemsReset,
  } = useContext(Web3Context);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (!loginStatus) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    Axios.post(`${url}/has-character`, {
      user: user,
    }).then(async (response) => {
      setHasCharacter(await response.data.hasCharacter);
    });
  }, [user, url]);

  useEffect(async () => {
    // temporary solution
    /*
    await Axios.post(`${url}/accesspass`, {
      user: user,
    }).then(async (response) => {
      //console.log("has access pass?", await response.data.hasAccessPass);
      if (await response.data.hasAccessPass) setHasAccessPass(true);
      else setHasAccessPass(false);
    });
    */
    setHasAccessPass(true);
  }, [user, url]);

  useEffect(async () => {
    await Axios.post(`${web3ServerUrl}/address`, {
      username: user,
    }).then(async (response) => {
      if (response.data !== "") setUserAddress(response.data);
      else setMetamaskConnected(false);
    });
  }, [user]);

  useEffect(() => {
    if (hasAccessPass === undefined && hasCharacter === undefined) {
      setIsLoading(true);
    }
  }, [hasAccessPass, hasCharacter]);

  useEffect(() => {
    if (hasAccessPass !== undefined && hasCharacter !== undefined) {
      setIsLoading(false);
    }
  }, [hasAccessPass, hasCharacter]);

  return (
    <>
      <Head>
        <title>Dashboard | Empire Of Sight</title>
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
      {
        /*hasAccessPass !== undefined &&*/ hasCharacter !== undefined ? (
          <>
            {loginStatus && (
              <>
                {/* temporary solution */}
                {/*  {!hasAccessPass ? (
                <RedirectAccessPass />
              ) : (*/}
                <>
                  <div className="container">
                    <div className="pageWrapper">
                      <>
                        <div className="lg:col-span-12 sm:col-span-1 row-span-1 pb-1">
                          <div
                            className="bg-gray-900 text-gray-50 px-4 py-3 rounded relative text-center"
                            role="alert"
                          >
                            <strong className="font-bold text-lg  hover:text-gray-50 cursor-pointer">
                              Click Here to{" "}
                            </strong>
                            <Link
                              href="https://client.empireofsight.com/Empire_of_Sight_Launcher_Installer.exe"
                              target="_blank"
                            >
                              <strong className="font-bold text-lg text-error-200 hover:text-gray-50 cursor-pointer">
                                Download the Empire of Sight Launcher!
                              </strong>
                            </Link>{" "}
                            <strong className="font-bold text-lg  hover:text-gray-50 cursor-pointer">
                              OR{" "}
                            </strong>
                            <Link
                              href="https://client.empireofsight.com/Empire_of_Sight_Launcher_Installer.exe"
                              target="_blank"
                            >
                              <strong className="font-bold text-lg text-error-200 hover:text-gray-50 cursor-pointer">
                                Play On The Browser!
                              </strong>
                            </Link>
                          </div>
                        </div>
                        {/* temporary solution */}
                        {
                          /*
                      {accountsMetaMask[0] === undefined && (
                        <div className="lg:col-span-12 sm:col-span-1 row-span-1 pb-2">
                          <div
                            className="bg-error-100 text-gray-50 px-4 py-3 rounded relative text-center"
                            role="alert"
                          >
                            <strong className="font-bold">
                              Please connect your MetaMask account!
                            </strong>
                          </div>
                        </div>
                      )} */

                          <>
                            {metamaskConnected &&
                              accounts[0] !== undefined &&
                              userAddress !== undefined &&
                              userAddress.toLowerCase() !==
                                accounts[0].toLowerCase() && (
                                <div className="leading-none lg:col-span-12 sm:col-span-1 row-span-1 pb-2">
                                  <div
                                    className="bg-gray-900 text-error-100 px-4 py-3 rounded relative text-center"
                                    role="alert"
                                  >
                                    <strong className="font-bold">
                                      You're connected with the wrong MetaMask
                                      account!
                                      <br />
                                      <span className="text-gray-50">
                                        {" "}
                                        Please connect the account that has been
                                        attached to your user {" ["}
                                      </span>
                                      <span className="text-error-200">
                                        {`${user}`}
                                      </span>
                                      <span className="text-gray-50">
                                        {"]!"}
                                      </span>
                                    </strong>
                                    <br />
                                    <br />
                                    <p className="font-bold">
                                      <span className="text-gray-50">
                                        {" "}
                                        Connected account:
                                      </span>
                                      <span className="text-error-100">
                                        {" "}
                                        {`${accounts[0]}`}
                                      </span>{" "}
                                      <br />
                                      <span className="text-gray-50">
                                        {" "}
                                        The account you should connect:{" "}
                                      </span>
                                      <span className="text-error-200">
                                        {" "}
                                        {`${userAddress}`}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              )}
                          </>
                        }
                      </>
                      <>
                        {!hasCharacter ? (
                          <CreateCharacter />
                        ) : (
                          <>
                            <Panel /> {Application2 && Application2}
                          </>
                        )}
                      </>
                    </div>
                  </div>
                </>
                {/* )}*/}
              </>
            )}
          </>
        ) : (
          <Loading />
        )
      }
    </>
  );
};

export default Dashboard;
