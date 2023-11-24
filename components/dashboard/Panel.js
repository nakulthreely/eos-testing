import Image from "next/image";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { EOSContext } from "../../contexts/EOSContext";
import { Web3Context } from "../../contexts/Web3Context";
import useCharacter from "../../hooks/useCharacter";
import Axios from "axios";

import { Sort, Cubes, Shop, Cube, Money, Gamepad } from "grommet-icons";
import { LogoutIcon } from "@heroicons/react/solid";
import { Icon } from "@iconify/react";

import profile_sp_1 from "../../public/assets/profile_sp_1.png";
import profile_sp_2 from "../../public/assets/profile_sp_2.png";
import profile_sp_3 from "../../public/assets/profile_sp_3.png";
import profile_sp_4 from "../../public/assets/profile_sp_4.png";
import profile_sp_5 from "../../public/assets/profile_sp_5.png";

import dashboardPanel from "../../public/assets/dashboard_panel.png";
import dashboardMobile from "../../public/assets/dashmobile.png";

import SHOP from "./panel/Shop";
import Stats from "./panel/Stats";
import Transmute from "./panel/Transmute";
import { sleep } from "../../utils/web3";

const Panel = () => {
  const [state, setState] = useState("STATS");
  const {
    setBlur,
    user,
    url,
    logout,
    email,
    AOS,
    setIsHomePage,
    logoutDashboard,
    web3ServerUrl,
    accountsMetaMask,
    userAddress,
    isRightAddress,
  } = useContext(EOSContext);
  const {
    web3,
    accounts,
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
    authWithMetaMask,
    connectMetaMask,
    itemsReset,
    setItemsReset,
    itemSlot,
    setItemSlot,
    connectBlockchain,
    metamaskConnected,
    wsWeb3Client,
    isSyncingAddress,
    syncErrorMessage,
  } = useContext(Web3Context);

  // character hooks
  const [className, setClassName] = useState("");
  const [level, setLevel] = useState("");
  const [health, setHealth] = useState("");
  const [mana, setMana] = useState("");
  const [strength, setStrength] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [experience, setExperience] = useState("");
  const [skillExperience, setSkillExperience] = useState("");
  const [gold, setGold] = useState("");
  const [coins, setCoins] = useState("");
  const [verfied, setVerified] = useState(true);

  // character
  useEffect(() => {
    Axios.post(`${url}/character`, {
      account: user,
    }).then(async (response) => {
      //setResponse(response);

      setClassName(await response.data.classname);
      setLevel(await response.data.level);
      setHealth(await response.data.health);
      setMana(await response.data.mana);
      setStrength(await response.data.strength);
      setIntelligence(await response.data.intelligence);
      setExperience(await response.data.experience);
      setSkillExperience(await response.data.skillExperience);
      setGold(await response.data.gold);
      setCoins(await response.data.coins);
    });
  }, []);

  // email verification
  useEffect(() => {
    Axios.post(`${url}/is-verified`, {
      email: email,
    }).then(async (response) => {
      //console.log("VERIFIED: " + (await response.data.verfied));
      setVerified(await response.data.verified);
    });
  }, [email]);

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
    setState("SHOP");
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  /* 
  useEffect(() => {
    wsWeb3Client.onopen = (event) => {
      wsWeb3Client.send("nextjs client has connected");
    };
    wsWeb3Client.onmessage = async (event) => {
      wsWeb3Client.binaryType = "arraybuffer";
      //console.log(event.data.toString());

      const json = event.data.toString();
      //console.log(json);
      if (accounts[0].toLowerCase() === event.data.toString().toLowerCase()) {
        await sleep(10000);
        //setWaitingForConfirmation(false);
        setItemsReset(!itemsReset);
      }
    };
  }, []);*/
  /*
    setInterval(() => {
      const string =
        '{"type":"confirmation","player":"0xaD6dc635843e910FF0426e587b61Ba6Bb6126473"}';
      const json = JSON.parse(string);
      console.log(json);
      console.log(json.type);
    }, 2000);*/

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <section>
          <div
            className="darkTransparentBg max-w-6xl mx-auto p-4 rounded"
            data-aos="fade-down"
          >
            <div className="grid lg:grid-cols-12 sm:grid-cols-1 grid-rows-8 gap-2">
              <div className="transparentBox lg:col-span-12 sm:col-span-1 row-span-1">
                <div className="sm-view-now">
                  <Image
                    className="rounded"
                    src={dashboardPanel}
                    placeholder="blur"
                    alt="Dashboard"
                  />
                </div>
                <div className="lg-view-now">
                  <Image
                    className="rounded"
                    src={dashboardPanel}
                    placeholder="blur"
                    alt="Dashboard"
                  />
                </div>
              </div>

              {/*!verfied && (
                <div className="transparentBox lg:col-span-12 sm:col-span-1 row-span-1">
                  <div
                    className="bg-error-100 text-gray-50 px-4 py-3 rounded relative text-center"
                    role="alert"
                  >
                    <strong className="font-bold">
                      Please Verify Your Email Address!
                    </strong>
                  </div>
                </div>
              )*/}
              <div className="transparentBox col-span-3 row-span-1 p-2">
                <div className="flex justify-center align-center self-center">
                  {className === "Lucas the Wanderer" && (
                    <>
                      <div className="mt-4 mb-4 scale-110">
                        <Image
                          className="rounded characterBox flex self-center"
                          height={177.5}
                          width={85}
                          src={profile_sp_1}
                          placeholder="blur"
                          alt="Lucas the Wanderer"
                        />
                      </div>
                    </>
                  )}
                  {className === "Donovan the Shadow Stepper" && (
                    <>
                      <div className="mt-8 mb-2 scale-110">
                        <Image
                          className="rounded characterBox flex self-center"
                          height={157.5}
                          width={87.5}
                          src={profile_sp_2}
                          placeholder="blur"
                          alt="Donovan the Shadow Stepper"
                        />
                      </div>
                    </>
                  )}

                  {className === "Kagutsuchi the Shinto" && (
                    <>
                      <div className="mt-6 mb-2">
                        <Image
                          height={185}
                          width={76.75}
                          src={profile_sp_3}
                          placeholder="blur"
                          alt="Kagutsuchi the Shinto"
                          layout="fixed"
                        />
                      </div>
                    </>
                  )}
                  {className === "Princess PingYang the Warrioress" && (
                    <>
                      <div className="mt-8 mb-2 scale-110">
                        <Image
                          className="rounded characterBox"
                          height={160}
                          width={80}
                          src={profile_sp_4}
                          placeholder="blur"
                          alt="Princess PingYang the Warrioress"
                          layout="fixed"
                        />
                      </div>
                    </>
                  )}
                  {className === "Isabella the Temptress" && (
                    <>
                      <div className="mt-8 mb-2 scale-110">
                        <Image
                          className="rounded characterBox"
                          height={155}
                          width={75}
                          src={profile_sp_5}
                          placeholder="blur"
                          alt="Isabella the Temptress"
                        />
                      </div>
                    </>
                  )}
                </div>
                {/* 
                <div className="flex justify-center align-center self-center py-1 px-3">
                  {metamaskConnected ? (
                    <>
                      {!isRightAddress ? (
                        <>
                          <p>
                            <strong className="leading-none text-center font-bold text-lg text-error-100 cursor-pointer hover:scale-105">
                              <div>{"Wrong account!"}</div>
                            </strong>
                            <strong className="tracking-wider leading-none text-center font-semibold text-md text-error-100 cursor-pointer hover:scale-105">
                              <div>
                                {String(accounts[0]).slice(0, 5) +
                                  "..." +
                                  String(accounts[0]).slice(-4)}
                              </div>
                            </strong>
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            <strong className="leading-none text-center font-bold text-lg text-error-200 cursor-pointer hover:scale-105">
                              <div>{"Connected!"}</div>
                            </strong>
                            <strong className="tracking-wider leading-none text-center font-semibold text-md text-error-200 cursor-pointer hover:scale-105">
                              <div>
                                {String(accounts[0]).slice(0, 5) +
                                  "..." +
                                  String(accounts[0]).slice(-4)}
                              </div>
                            </strong>
                          </p>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {isSyncingAddress ? (
                        <>
                          <p>
                            <strong className="leading-none text-center font-bold text-lg text-gold-100 cursor-pointer hover:scale-105">
                              <div>{"Syncing items..."}</div>
                            </strong>
                            <strong className="tracking-wider leading-none text-center font-semibold text-md text-gold-100 cursor-pointer hover:scale-105">
                              <div>
                                {String(accounts[0]).slice(0, 5) +
                                  "..." +
                                  String(accounts[0]).slice(-4)}
                              </div>
                            </strong>
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col gap-1 w-full">
                            {syncErrorMessage === "Address taken." && (
                              <strong className="leading-none text-center font-bold text-lg text-error-100 cursor-pointer hover:scale-105 w-full">
                                <div>{syncErrorMessage}</div>
                              </strong>
                            )}
                            <button
                              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                              onClick={async (e) => {
                                e.preventDefault();
                                //connectMetaMask();
                                await connectBlockchain();
                                setState("SHOP");
                              }}
                            >
                              <Icon icon="logos:metamask-icon" width="25" />
                              <span className="font-inter">CONNECT</span>
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>*/}
              </div>

              <div className="transparentBox lg:col-span-9 sm:col-span-1 row-span-1 p-4  font-inter">
                <h1 className="text-gray-50 lg:text-7xl sm:text-xl font-black">
                  {user}
                </h1>
                <h1 className="text-gray-50 text-semibold font-black">
                  {className}
                </h1>
                <h3 className="text-gray-50 ">Level {level}</h3>
              </div>
              {/* Side Vertical Menu */}
              <div className="transparentBox p-4 col-span-3 row-span-2 grid grid-cols-1 grid-rows-5 gap-2 font-inter h-min">
                {state === "SHOP" ? (
                  <button
                    className=" bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("SHOP");
                    }}
                  >
                    <Shop color="#111" />
                    <span className="font-inter">NFT SHOP</span>
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("SHOP");
                    }}
                  >
                    <Shop color="#111" />
                    <span className="font-inter">NFT SHOP</span>
                  </button>
                )}

                {state === "TRANSMUTE" ? (
                  <button
                    className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("TRANSMUTE");
                    }}
                  >
                    <Cubes color="#111" />
                    <span className="font-inter">TRANSMUTE</span>
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("TRANSMUTE");
                    }}
                  >
                    <Cubes color="#111" />
                    <span className="font-inter">TRANSMUTE</span>
                  </button>
                )}
                {state === "STATS" ? (
                  <button
                    className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("STATS");
                    }}
                  >
                    <Sort color="#111" />
                    <span className="font-inter ">STATS</span>
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 hover:bg-gray-300  text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("STATS");
                    }}
                  >
                    <Sort color="#111" />
                    <span className="font-inter">STATS</span>
                  </button>
                )}
                {state === "TRADE" ? (
                  <button
                    className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("TRADE");
                    }}
                  >
                    <Money color="#111" />
                    <span className="font-inter">P2P TRADE</span>
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setState("TRADE");
                    }}
                  >
                    <Money color="#111" />
                    <span className="font-inter">P2P TRADE</span>
                  </button>
                )}
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    logoutDashboard();
                  }}
                >
                  <LogoutIcon className={` min-h-5 min-w-5 max-h-5 max-w-5`} />
                  <span className="font-inter">LOGOUT</span>
                </button>
              </div>
              {state === "STATS" && (
                <>
                  <Stats
                    gold={gold}
                    health={health}
                    mana={mana}
                    experience={experience}
                  />
                </>
              )}
              {state === "SHOP" && (
                <>
                  <SHOP />
                </>
              )}

              {state === "TRANSMUTE" && (
                <>
                  <Transmute />
                </>
              )}
              {state !== "STATS" &&
                state !== "SHOP" &&
                state !== "TRANSMUTE" &&
                state !== "ACTIVATE" && (
                  <>
                    <div className="transparentBox lg:col-span-9 lg:row-span-2 sm:col-span-1 sm:row-span-1 p-4 flex justify-center">
                      <h4 className="text-gray-50 font-inter self-center">
                        COMING SOON!
                      </h4>
                    </div>
                  </>
                )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Panel;
