import React, { useState, useContext, useEffect } from "react";
import freeNft from "../public/free-nft.png";
import almost from "../public/almost.png";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";
import { EOSContext } from "../contexts/EOSContext";
import { Web3Context } from "../contexts/Web3Context";
import metamask from "../public/assets/metamask.svg";
import polygon from "../public/assets/blockchain_logo/polygon.png";
import icon from "../public/icon.png";
import Head from "next/head";
import { StatusGood, StatusWarning } from "grommet-icons";
import { useRouter } from "next/router";
import loadingText from "../public/assets/loading.png";
import loading from "../public/assets/loreImageSectionFive.gif";

function FreeNFT() {
  //const [accounts, setAccounts] = useState([]);

  const [emptyError, setEmptyError] = useState(false);
  const [metaMaskConnected, setMetaMaskConnected] = useState(false);
  const [metaMaskAuthError, setMetaMaskAuthError] = useState(false);
  const recaptchaRef = React.createRef();
  const [captchaCode, setCaptchaCode] = useState(undefined);
  const [freeNftSubmitted, setFreeNftSubmitted] = useState(false);
  const router = useRouter();

  const {
    setUser,
    setIsLoading,
    isLoading,
    setEmail,
    setPassword,
    registerFreeNFT,
    user,
    email,
    url,
    submitted,
    password,
    logout,
    AOS,
    registerError,
    userError,
    emailError,
    passwordError,
    metaMaskError,
    setIsHomePage,
    userValid,
    setUserValid,
    emailValid,
    setEmailValid,
    addressValid,
    setAddressValid,
    setWaitingForSignature,
  } = useContext(EOSContext);
  const { accounts, setAccounts, address, setAddress, freeNFTTxLink } =
    useContext(Web3Context);

  useEffect(async () => {
    try {
      await Axios.post(`${url}/is-address-valid`, {
        address: accounts[0],
      }).then((response) => {
        setAddressValid(response.data.valid);
      });
    } catch (err) {
      console.log(err);
    }
  }, [accounts]);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum
          .request({
            method: "eth_accounts",
          })
          .catch((err) => {
            console.error(err);
          });

        setAccounts(accounts);
        setAddress(accounts[0]);
        setMetaMaskConnected(true);
      } else {
        setMetaMaskConnected(false);
      }
    };

    init();
  }, []);

  useEffect(() => {
    setAddress(accounts[0]);
  }, [accounts]);

  useEffect(() => {
    console.log(address);
  }, [address]);

  const containsWhitespace = (str) => {
    return /\s/.test(str);
  };

  const authWithMetaMask = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (accounts) => {
          setAccounts(await accounts);
          //setAddress(accounts[0]);
          setMetaMaskConnected(true);
        });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/captcha", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        recaptchaRef.current.reset();

        setFreeNftSubmitted(true);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    }
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    setCaptchaCode(captchaCode);
  };

  return (
    <>
      <Head>
        <title>Free NFT! | Empire of Sight</title>
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

      <>
        {isLoading ? (
          <>
            <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen">
              <div className="flex flex-col items-center px-4 sm:px-0">
                <div className="max-w-xl mx-auto p-4">
                  <div
                    className="headingWrapper textSection rounded"
                    data-aos="zoom-in"
                  >
                    <Image
                      className="object-center pointer-events-none"
                      src={loadingText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <>
              {submitted ? (
                <div className="flex flex-col items-center justify-center bg-gray-900 ">
                  <div className="flex flex-col items-center px-4 sm:px-0">
                    <div
                      className="flex flex-col bg-green-300 text-gray-900 px-4 py-3 rounded relative mb-2 sm:mb-6"
                      role="alert"
                    >
                      <strong className="font-bold block mb-2">Success!</strong>
                      <span className="block  space-y-2 sm:space-y-0">
                        <p className="flex items-center space-x-2">
                          <span role="img" aria-label="rocket">
                            🚀
                          </span>
                          <span>Your Free NFT is on its way!</span>
                          <span role="img" aria-label="rocket">
                            🚀
                          </span>
                        </p>
                        <p className="text-sm sm:text-base">
                          <a
                            href={freeNFTTxLink}
                            className="inline-block text-blue-600 hover:underline flex flex-wrap"
                          >
                            Click here to check your transaction on Polygonscan!
                          </a>
                        </p>
                        <p className="mt-2 text-sm sm:text-base">
                          Verify your email to start your Web3 MMORPG adventure
                          now!
                        </p>
                      </span>
                    </div>
                    <button
                      className="hover:bg-gray-400 bg-gray-50 hover:text-gray-50 text-gray-900 font-bold py-2 px-4 rounded w-full"
                      onClick={async (e) => {
                        e.preventDefault();
                        logout();
                        router.push("/login");
                      }}
                    >
                      <div className="flex flex-row justify-center items-center space-x-2">
                        <div>Play Now!</div>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center bg-gray-900 ">
                  <div className="flex flex-col items-center px-4 sm:px-0">
                    <div className="pb-12 md:pb-20">
                      {/* Form */}
                      <div className="max-w-xl mx-auto mh-auto p-4">
                        {!freeNftSubmitted ? (
                          <>
                            <Image
                              className="rounded mx-auto block"
                              src={freeNft}
                              placeholder="blur"
                              alt="Enter the Empire Of Sight!"
                            />
                            <form>
                              <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                  <label
                                    className="block text-gray-50 text-sm font-medium mb-1"
                                    htmlFor="address"
                                  >
                                    Your Blockchain Address (Polygon Network)
                                  </label>
                                  <input
                                    id="address"
                                    type="text"
                                    className="form-input w-full text-gray-800"
                                    placeholder={
                                      address
                                        ? address
                                        : "Enter your address 0x..."
                                    }
                                    onChange={(e) => {
                                      e.preventDefault();
                                      setAddress(e.target.value);
                                    }}
                                    disabled={
                                      accounts.length > 0 ? true : false
                                    } // This disables the input field
                                    required
                                  />
                                  {emptyError && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative mt-1"
                                      role="alert"
                                    >
                                      <strong className="font-bold">
                                        Blockchain Address cannot be empty!
                                      </strong>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                  {metaMaskConnected && accounts.length > 0 ? (
                                    <>
                                      <button
                                        className="flex justify-center bg-gray-400 text-gray-50 font-bold py-2 px-4 gap-2 rounded w-full  mb-2"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setMetaMaskConnected(false);
                                          setAccounts([]);
                                          setAddress("");
                                        }}
                                      >
                                        <>
                                          {addressValid ? (
                                            <StatusGood
                                              height={25}
                                              width={25}
                                              color="#00C781"
                                            />
                                          ) : (
                                            <StatusWarning
                                              height={25}
                                              width={25}
                                              color="#ff4040"
                                            />
                                          )}
                                        </>
                                        <div>
                                          {"Connected: " +
                                            accounts[0].substring(0, 6) +
                                            "..." +
                                            accounts[0].substring(
                                              accounts[0].length - 4,
                                              accounts[0].length
                                            )}
                                        </div>
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        className="flex justify-center bg-gray-100 hover:bg-gray-400 text-gray-900 hover:text-gray-50 font-bold py-2 px-4 gap-2 rounded w-full  mb-1"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          authWithMetaMask();
                                        }}
                                      >
                                        <Image
                                          height={25}
                                          width={25}
                                          src={metamask}
                                        />
                                        <div>Ask MetaMask</div>
                                        <Image
                                          height={25}
                                          width={25}
                                          src={metamask}
                                        />
                                      </button>
                                    </>
                                  )}
                                  {!addressValid && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong class="font-bold">
                                        Address already taken!
                                      </strong>
                                    </div>
                                  )}
                                  {metaMaskAuthError && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative mt-1"
                                      role="alert"
                                    >
                                      <strong className="font-bold">
                                        There's no account attached to this
                                        MetaMask wallet.
                                      </strong>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={
                                  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                                }
                                theme="dark"
                                onExpired={() => {
                                  recaptchaRef.current.reset();
                                }}
                                onChange={onReCAPTCHAChange}
                              />
                              <div className="flex flex-wrap -mx-3 mt-12">
                                <div className="w-full px-3">
                                  <button
                                    className="flex justify-center hover:bg-gray-400 bg-gray-50 hover:text-gray-50 text-gray-900 font-bold py-2 px-4 gap-2 rounded w-full"
                                    onClick={async (e) => {
                                      e.preventDefault();
                                      handleSubmit(e);
                                      //setFreeNftSubmitted(true);
                                    }}
                                  >
                                    <Image
                                      className="rounded"
                                      src={polygon}
                                      placeholder="blur"
                                      alt="Enter the Empire Of Sight!"
                                      width={25}
                                      height={5}
                                    />
                                    <div>Send Me My Free NFT!</div>
                                    <Image
                                      className="rounded"
                                      src={icon}
                                      placeholder="blur"
                                      alt="Enter the Empire Of Sight!"
                                      width={25}
                                      height={5}
                                    />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </>
                        ) : (
                          <>
                            <Image
                              className="rounded mx-auto block max-w-full h-auto"
                              src={almost}
                              placeholder="blur"
                              alt="Enter the Empire Of Sight!"
                            />
                            <form>
                              <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                  <label
                                    className="block text-gray-50 text-sm font-medium mb-1"
                                    htmlFor="name"
                                  >
                                    Username{" "}
                                    <span className="text-link-800">*</span>
                                  </label>
                                  <input
                                    id="name"
                                    type="text"
                                    className="form-input w-full text-gray-800 mb-1"
                                    placeholder="Enter your username"
                                    onChange={(e) => {
                                      e.preventDefault();
                                      setUser(e.target.value);
                                    }}
                                    required
                                  />
                                  {!userValid && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong class="font-bold">
                                        Username is already taken.
                                      </strong>
                                    </div>
                                  )}
                                  {userError && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong className="font-bold">
                                        Username cannot be empty!
                                      </strong>
                                    </div>
                                  )}
                                  {containsWhitespace(user) && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong className="font-bold">
                                        Username cannot contain space!
                                      </strong>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                  <label
                                    className="block text-gray-50 text-sm font-medium mb-1"
                                    htmlFor="email"
                                  >
                                    Email{" "}
                                    <span className="text-link-800">*</span>
                                  </label>
                                  <input
                                    id="email"
                                    type="email"
                                    className="form-input w-full text-gray-800 mb-1"
                                    placeholder="Enter your email address"
                                    onChange={(e) => {
                                      e.preventDefault();
                                      setEmail(e.target.value);
                                    }}
                                    required
                                  />
                                  {email.includes("@") && !emailValid && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong clasNames="font-bold">
                                        Email address is already taken.
                                      </strong>
                                    </div>
                                  )}
                                  {emailError && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong className="font-bold">
                                        Email address cannot be empty!
                                      </strong>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                  <label
                                    className="block text-gray-50 text-sm font-medium mb-1"
                                    htmlFor="password"
                                  >
                                    Password{" "}
                                    <span className="text-link-800">*</span>
                                  </label>
                                  <input
                                    id="password"
                                    type="password"
                                    className="form-input w-full text-gray-800"
                                    placeholder="Enter your password"
                                    onChange={(e) => {
                                      e.preventDefault();
                                      setPassword(e.target.value);
                                    }}
                                    required
                                  />
                                  {passwordError && (
                                    <div
                                      className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                                      role="alert"
                                    >
                                      <strong className="font-bold">
                                        Password cannot be empty!
                                      </strong>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex flex-wrap -mx-3 mt-12">
                                <div className="w-full px-3">
                                  <button
                                    className="hover:bg-gray-400 bg-gray-50 hover:text-gray-50 text-gray-900 font-bold py-2 px-4 rounded w-full"
                                    onClick={async (e) => {
                                      e.preventDefault();
                                      await registerFreeNFT();
                                    }}
                                  >
                                    <div className="flex flex-row justify-center items-center space-x-2">
                                      <div>
                                        Create Account & Receive My FREE NFT!
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="text-sm text-gray-100 text-center mt-3">
                                By creating an account, you agree to the{" "}
                                <a
                                  className="underline font-bold text-link-800 hover:text-green-100"
                                  href="/terms-of-use"
                                >
                                  Terms of Use
                                </a>
                                , and our{" "}
                                <a
                                  className="underline font-bold text-link-800 hover:text-green-100"
                                  href="/privacy-policy"
                                >
                                  Privacy Policy
                                </a>
                                .
                              </div>
                            </form>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          </>
        )}
      </>
    </>
  );
}

export default FreeNFT;
