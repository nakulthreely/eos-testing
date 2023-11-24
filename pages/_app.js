import "rsuite/dist/rsuite.min.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import "aos/dist/aos.css";
import  Head from "next/head";
import AOS from "aos";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import * as gtag from "../lib/gtag";

import useWeb3 from "../hooks/useWeb3";
import useHasAccessPass from "../hooks/useHasAccessPass";
import useAccessPassContract from "../hooks/useAccessPassContract";
import useItemContract from "../hooks/useItemContract";
import { useTriaConnector, useAccount } from "@tria-sdk/connect";

import { EOSContext } from "../contexts/EOSContext";
import { Web3Context } from "../contexts/Web3Context";
import SelectNetworkModal from "../components/select-network-modal/SelectNetworkModal";
import SelectNetworkModalAP from "../components/select-network-modal/SelectNetworkModalAP";
import SelectNetworkModalMT from "../components/select-network-modal/SelectNetworkModalMT";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  // test localhost
  /*
  const url = "http://localhost:8080";
  const web3ServerUrl = "http://localhost:8080";
 */
  // production
  const url = "https://api.empireofsight.com";
  const web3ServerUrl = "https://api.empireofsight.com";

  const [isHomePage, setIsHomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reset, setReset] = useState(false);

  // web3 hooks
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [accountsMetaMask, setAccountsMetaMask] = useState([]);
  const { web3, web3HTTP } = useWeb3();
  const {
    accessPassContractEthereum,
    accessPassContractBSC,
    accessPassContractAvalanche,
    accessPassContractPolygon,
  } = useAccessPassContract(web3);
  const [selectedNetwork, setSelectedNetwork] = useState(undefined);
  const [selectedAccessPassID, setSelectedAccessPassID] = useState(0);
  const [ownedAccessPasses, setOwnedAccessPasses] = useState([]);
  const {
    itemContractEthereum,
    itemContractBSC,
    itemContractAvalanche,
    itemContractPolygon,
  } = useItemContract();
  const [selectedItemName, setSelectedItemName] = useState(undefined);
  const [selectedItemID, setSelectedItemID] = useState(undefined);
  const [selectedItemAmount, setSelectedItemAmount] = useState(undefined);
  const [selectedItemPrice, setSelectedItemPrice] = useState(undefined);
  const [selectedItemImg, setSelectedItemImg] = useState(undefined);
  const [selectedItemFinalPrice, setSelectedItemFinalPrice] =
    useState(undefined);

  const [selectedAPName, setSelectedAPName] = useState(undefined);
  const [selectedAPID, setSelectedAPID] = useState(undefined);
  const [selectedAPAmount, setSelectedAPAmount] = useState(undefined);
  const [selectedAPPrice, setSelectedAPPrice] = useState(undefined);
  const [selectedAPImg, setSelectedAPImg] = useState(undefined);

  // register/login hooks
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [blur, setBlur] = useState(false);
  const [hasCharacter, setHasCharacter] = useState(undefined);
  const [afterLogout, setAfterLogout] = useState(false);
  const [waitingForSignature, setWaitingForSignature] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [metaMaskError, setMetaMaskError] = useState(false);
  const [userLoginError, setUserLoginError] = useState(false);
  const [passwordLoginError, setPasswordLoginError] = useState(false);
  const [metaMaskAuthError, setMetaMaskAuthError] = useState(false);
  const [userValid, setUserValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);

  // Select Network Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceETH, setPriceETH] = useState(undefined);
  const [priceBNB, setPriceBNB] = useState(undefined);
  const [priceAVAX, setPriceAVAX] = useState(undefined);
  const [priceMATIC, setPriceMATIC] = useState(undefined);
  const [txStarted, setTxStarted] = useState(false);
  const [itemPrice, setItemPrice] = useState(undefined);

  // Access Pass Select Network Modal
  const [isAPModalOpen, setIsAPModalOpen] = useState(false);
  const [priceETH_AP, setPriceETH_AP] = useState(undefined);
  const [priceBNB_AP, setPriceBNB_AP] = useState(undefined);
  const [priceAVAX_AP, setPriceAVAX_AP] = useState(undefined);
  const [priceMATIC_AP, setPriceMATIC_AP] = useState(undefined);
  const [txStarted_AP, setTxStarted_AP] = useState(false);
  const [accessPassPrice, setAccessPassPrice] = useState(undefined);
  //const [hasAccessPass, setHasAccessPass] = useState(undefined);
  // temporary solution
  const [hasAccessPass, setHasAccessPass] = useState(true);

  // Mayne Transfer Select Network Modal
  const [isMTModalOpen, setIsMTModalOpen] = useState(false);
  const [itemSlot, setItemSlot] = useState(undefined);
  const [priceETH_MT, setPriceETH_MT] = useState(undefined);
  const [priceBNB_MT, setPriceBNB_MT] = useState(undefined);
  const [priceAVAX_MT, setPriceAVAX_MT] = useState(undefined);
  const [priceMATIC_MT, setPriceMATIC_MT] = useState(undefined);
  const [txStarted_MT, setTxStarted_MT] = useState(false);
  const [waitingForConfirmation, setWaitingForConfirmation] = useState(false);
  const [itemsReset, setItemsReset] = useState(false);
  const [userAddress, setUserAddress] = useState(undefined);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [isRightAddress, setIsRightAddress] = useState(false);
  const [isSyncingAddress, setIsSyncingAddress] = useState(false);
  const [syncErrorMessage, setSyncErrorMessage] = useState("");

  // for free nft
  const [address, setAddress] = useState("");
  const [freeNFTTxLink, setFreeNFTTxLink] = useState("");

  const [triaName, setTriaName] = useState("");
  const [triaAccount, setTriaAccount] = useState("");

  const { globalData } = useTriaConnector({
    authUrl: "https://auth.tria.so",
    walletUrl: "https://wallet.tria.so",
  });

  const [Application2, setApplication2] = useState();
  const [TriaConnectProvider2, setTriaConnectProvider2] = useState();
  useEffect(() => {
    const importApplication = async () => {
      console.log("typeof Window --->", window);
      if (typeof window !== "undefined") {
        try {
          const { default: Application, TriaConnectProvider } = await import(
            "@tria-sdk/authenticate"
          );
          setApplication2(
            <Application
              logo="https://www.empireofsight.com/assets/images/logo-icon.svg"
              dappName="Empire of Sight"
              dappDomain={window.parent.origin}
              primaryColor="#FFA800"
            />
          );
          //setTriaConnectProvider2(<TriaConnectProvider />);
          console.log(Application2, TriaConnectProvider2);
          // Now you can use Application and TriaConnectProvider here
          // Example:
          console.log(Application);
          console.log(TriaConnectProvider);
        } catch (error) {
          console.error("Error importing @tria-sdk/authenticate:", error);
        }
      } else {
        console.log("window is not defined");
      }
    };

    importApplication();
  }, []);

  //const { account } = useAccount();

  useEffect(() => {
    if (window.localStorage.getItem("tria.wallet.store") !== null) {
      //setShowOnboarding(false);
      setTriaName(
        JSON.parse(window.localStorage.getItem("tria.wallet.store"))?.triaName
      );
      setTriaAccount(
        JSON.parse(window.localStorage.getItem("tria.wallet.store"))?.evm
          .address
      );

      Axios.post(`${url}/tria-login`, {
        username: JSON.parse(window.localStorage.getItem("tria.wallet.store"))
          ?.triaName,
        address: JSON.parse(window.localStorage.getItem("tria.wallet.store"))
          ?.evm.address,
      }).then(async (response) => {
        console.log("TRIA login received");
        console.log(await response);

        if (!(await response.data.auth)) {
          setLoginStatus(false);
          //logout();
          setLoginError(true);
        } else {
          //console.log(response.data.result);
          //console.log(response.data.result.email);
          //console.log(response.data.result.address);
          //setEmail(response.data.result.email);
          setUser(response.data.result.name);
          //let accounts = [];
          //accounts[0] = response.data.result.address;
          //setAccounts(accounts);
          setUserAddress(response.data.result.address);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.result.name);
          //localStorage.setItem("email", response.data.result.email);
          localStorage.setItem("address", response.data.result.address);

          setLoginError(false);
          setLoginStatus(true);
          setAfterLogout(false);

          // router.push("/dashboard");
        }
      });
    }
  }, []);
  /*
  useEffect(() => {
    console.log("TRIA login posted");
    if (triaName && triaAccount)
      Axios.post(`${url}/tria-login`, {
        username: triaName,
        address: triaAccount,
      }).then(async (response) => {
        console.log("TRIA login received");
        console.log(await response);

        if (!(await response.data.auth)) {
          setLoginStatus(false);
          //logout();
          setLoginError(true);
        } else {
          //console.log(response.data.result);
          //console.log(response.data.result.email);
          //console.log(response.data.result.address);
          //setEmail(response.data.result.email);
          setUser(response.data.result.name);
          //let accounts = [];
          //accounts[0] = response.data.result.address;
          //setAccounts(accounts);
          setUserAddress(response.data.result.address);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.result.name);
          //localStorage.setItem("email", response.data.result.email);
          localStorage.setItem("address", response.data.result.address);

          setLoginError(false);
          setLoginStatus(true);
          setAfterLogout(false);

          router.push("/dashboard");
        }
      });
  }, [triaName, triaAccount]);
*/
  // google analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
    // eslint-disable-next-line no-unused-vars
    userAuthenticated();
    setBlur(false);
  }, []);

  useEffect(() => {
    Axios.post(`${url}/has-character`, {
      user: user,
    }).then(async (response) => {
      setHasCharacter(await response.data.hasCharacter);
    });
  }, [user, url]);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const accs = await window.ethereum
          .request({
            method: "eth_accounts",
          })
          .catch((err) => {
            console.error(err);
          });

        setAccounts(accs);
        setAccountsMetaMask(accs);

        if (accs.length > 0 && localStorage.getItem("user")) {
          //console.log(localStorage.getItem("user"));
          await Axios.post(`${url}/address`, {
            username: localStorage.getItem("user"),
          }).then(async (response) => {
            //console.log(response);

            if ((await response.data) !== "") {
              setConnected(true);
              setMetamaskConnected(true);
              setUserAddress(await response.data);
              //console.log("connected");
            } else {
              setConnected(false);
              setMetamaskConnected(false);

              //setMetamaskConnected(false);
            }
          });
        } else {
          setConnected(false);
          setMetamaskConnected(false);
        }
      } else {
        setConnected(false);
        setMetamaskConnected(false);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (
      metamaskConnected &&
      userAddress !== undefined &&
      accounts[0] !== undefined &&
      userAddress.toLowerCase() === accounts[0].toLowerCase()
    )
      setIsRightAddress(true);
    else if (
      metamaskConnected &&
      userAddress !== undefined &&
      accounts[0] !== undefined &&
      userAddress.toLowerCase() !== accounts[0].toLowerCase()
    )
      setIsRightAddress(false);
  }, [metamaskConnected, userAddress, accounts]);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async () => {
          const accs = await window.ethereum
            .request({
              method: "eth_accounts",
            })
            .catch((err) => {
              console.error(err);
            });
          setAccounts(accs);
          setAccountsMetaMask(accs);
          setSyncErrorMessage("");
          //setSyncErrorMessage("");
          if (accs.length > 0 && localStorage.getItem("user")) {
            await Axios.post(`${url}/address`, {
              username: localStorage.getItem("user"),
            }).then(async (response) => {
              //console.log(response);
              //setUserAddress(response.data);
              if (response.data !== "") {
                setAccounts(accs);
                setConnected(true);
                setUserAddress(await response.data);
                //setMetamaskConnected(true);
                //console.log("connected");
              } else {
                setConnected(false);

                setMetamaskConnected(false);
              }
            });
          } else {
            setConnected(false);
            setMetamaskConnected(false);
          }
        });
      } else {
        setConnected(false);
        setMetamaskConnected(false);
      }
    };
    /* temporary */
    init();
  }, []);

  useEffect(() => {
    if (accounts.length > 0)
      Axios.post(`${url}/accesspass`, {
        address: accounts[0],
      }).then(async (response) => {
        try {
          /*
          const owned = [false, false, false, false, false, false];
          if (
            //response.data.Ethereum[0] > 0 ||
            response.data.BSC[0] > 0 ||
            response.data.Polygon[0] > 0 ||
            response.data.Avalanche[0] > 0
          ) {
            owned[0] = true;
          } else if (
            //response.data.Ethereum[1] > 0 ||
            response.data.BSC[1] > 0 ||
            response.data.Polygon[1] > 0 ||
            response.data.Avalanche[1] > 0
          ) {
            owned[1] = true;
          } else if (
            //response.data.Ethereum[2] > 0 ||
            response.data.BSC[2] > 0 ||
            response.data.Polygon[2] > 0 ||
            response.data.Avalanche[2] > 0
          ) {
            owned[2] = true;
          } else if (
            //response.data.Ethereum[3] > 0 ||
            response.data.BSC[3] > 0 ||
            response.data.Polygon[3] > 0 ||
            response.data.Avalanche[3] > 0
          ) {
            owned[3] = true;
          } else if (
            //response.data.Ethereum[4] > 0 ||
            response.data.BSC[4] > 0 ||
            response.data.Polygon[4] > 0 ||
            response.data.Avalanche[4] > 0
          ) {
            owned[4] = true;
          } else if (
            //response.data.Ethereum[5] > 0 ||
            response.data.BSC[5] > 0 ||
            response.data.Polygon[5] > 0 ||
            response.data.Avalanche[5] > 0
          ) {
            owned[5] = true;
          }

          setOwnedAccessPasses(owned);*/
          setOwnedAccessPasses(response.data.hasAccessPass);
        } catch (err) {
          console.log(err);
        }
      });
  }, [accounts, url]);

  //-------------------------------------------------------------------------
  // REGISTER/LOGIN
  //-------------------------------------------------------------------------

  const register = async () => {
    //console.log("user: " + user);
    //console.log("password: " + password);
    //console.log("userValid: " + userValid);
    //console.log("emailValid: " + emailValid);
    setWaitingForSignature(true);
    if (
      //accounts.length > 0 &&
      user !== "" &&
      password !== "" &&
      email !== "" &&
      userValid &&
      emailValid
      //&& addressValid
    ) {
      //console.log("okkkk");
      //setWaitingForSignature(true);
      //await web3.eth.personal
      //.sign("Account Creation - Empire Of Sight", accounts[0])
      //.then((result) => {
      Axios.post(`${url}/register`, {
        email: email,
        username: user,
        password: password,
        //,address: accounts[0],
        //, signature: result,
      }).then((response) => {
        //console.log(response);
        if (response.data.success) {
          setSubmitted(true);
          setWaitingForSignature(false);
          setMetaMaskError(false);
          setEmailError(false);
          setUserError(false);
          setPassword(false);
        } else {
          setWaitingForSignature(false);
          setRegisterError(true);
          setSubmitted(false);
        }
      });
      //});
    } else {
      //if (accounts.length === 0) {
      //setMetaMaskError(true);
      //}
      if (email === "") {
        setEmailError(true);
      }
      if (user === "") {
        setUserError(true);
      }
      if (password === "") {
        setPasswordError(true);
      }
    }
  };

  const registerFreeNFT = async () => {
    setWaitingForSignature(true);
    setIsLoading(true);
    if (
      //accounts.length > 0 &&
      user !== "" &&
      password !== "" &&
      email !== "" &&
      userValid &&
      emailValid
      //&& addressValid
    ) {
      Axios.post(`${url}/register-free-nft`, {
        email: email,
        username: user,
        password: password,
        address: address,
        //, signature: result,
      }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          const txLink = "https://polygonscan.com/tx/" + response.data.txHash;
          setFreeNFTTxLink(txLink);
          setSubmitted(true);
          setWaitingForSignature(false);
          setMetaMaskError(false);
          setEmailError(false);
          setUserError(false);
          setPassword(false);
          setIsLoading(false);
        } else {
          setWaitingForSignature(false);
          setRegisterError(true);
          setSubmitted(false);
          setIsLoading(false);
        }
      });
      //});
    } else {
      //if (accounts.length === 0) {
      //setMetaMaskError(true);
      //}
      if (email === "") {
        setEmailError(true);
      }
      if (user === "") {
        setUserError(true);
      }
      if (password === "") {
        setPasswordError(true);
      }
    }
  };

  const login = async () => {
    if (user !== "" && password !== "") {
      await Axios.post(`${url}/login`, {
        username: user,
        password: password,
      }).then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
          //logout();
          setLoginError(true);
        } else {
          //console.log(response.data.result);
          //console.log(response.data.result.email);
          //console.log(response.data.result.address);
          setEmail(response.data.result.email);
          setUser(response.data.result.name);
          //let accounts = [];
          //accounts[0] = response.data.result.address;
          //setAccounts(accounts);
          setUserAddress(response.data.result.address);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.result.name);
          localStorage.setItem("email", response.data.result.email);
          localStorage.setItem("address", response.data.result.address);

          setLoginError(false);
          setLoginStatus(true);
          setAfterLogout(false);

          // router.push("/dashboard");
        }
      });
    } else {
      if (user === "") {
        setUserLoginError(true);
      }
      if (password === "") {
        setPasswordLoginError(true);
      }
    }
  };

  const userAuthenticated = () => {
    if (!afterLogout) {
      Axios.get(`${url}/is-user-auth`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
          logout();
        } else {
          setUser(localStorage.getItem("user"));
          setEmail(localStorage.getItem("email"));
          let accounts = [];
          accounts[0] = localStorage.getItem("address");

          setAccounts(accounts);
          setLoginStatus(true);

          // if (router.pathname !== "/" || "/test") router.push("/dashboard");
        }
      });
    }
  };

  //-------------------------------------------------------------------------
  // WEB3
  //-------------------------------------------------------------------------

  const connectMetaMask = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      const accs = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accs);
      if (accs.length > 0) {
        setConnected(true);
      } else setConnected(false);

      return accs;
    } else {
      router.push("https://metamask.io/");
    }
  };

  const connectBlockchain = async () => {
    if (window.ethereum && window.ethereum.isConnected)
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (result) => {
          setAccounts(result);
          //console.log("result.length " + result.length);
          /*
          if (result.length > 0) {
            setConnected(true);
          } else setConnected(false);
*/
          await Axios.post(`${url}/address`, {
            username: user,
          }).then(async (response) => {
            // if there's no address added yet, we have to add one
            if ((await response.data) === "") {
              await ethereum
                .request({
                  method: "personal_sign",
                  params: [
                    "Blockchain address registration - Empire of Sight",
                    await result[0],
                  ],
                })
                .then(async (signature) => {
                  setIsSyncingAddress(true);
                  await Axios.post(`${url}/register-blockchain`, {
                    username: user,
                    address: await result[0],
                    signature: await signature,
                  }).then(async (response) => {
                    if (await response.data.success) {
                      setUserAddress(await result[0]);
                      setMetamaskConnected(true);
                      setIsSyncingAddress(false);
                      setSyncErrorMessage("");
                    } else {
                      setIsSyncingAddress(false);
                      setMetamaskConnected(false);

                      if (response.data.message === "Address taken.") {
                        setSyncErrorMessage(response.data.message);
                      }
                    }
                  });
                });
            } // check if the right address is connected in MetaMask
            else {
              setUserAddress(await response.data);
              setMetamaskConnected(true);
            }
          });
        });
  };
  /* if (window.ethereum && window.ethereum.isConnected) {
      if (accounts === []) {
          method: "eth_requestAccounts",
        });
        setAccounts(accs);
        if (accs.length > 0) {
          setConnected(true);
        } else setConnected(false);
      }

      setWaitingForSignature(true);
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (accounts) => {
          
        });
    }*/
  //};
  /*
  const authWithMetaMask = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      setWaitingForSignature(true);
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (accounts) => {
          await Axios.get(`${url}/users/${accounts[0]}`).then(
            async (response) => {
              await web3.eth.personal
                .sign(
                  `Connect - Empire of Sight (${response.data.nonce})`,
                  accounts[0]
                )
                .then(async (result) => {
                  Axios.post(`${url}/login/metamask`, {
                    address: await accounts[0],
                    signature: await result,
                  }).then((response) => {
                    if (!response.data.auth) {
                      setLoginStatus(false);
                      //logout();
                      setWaitingForSignature(false);
                      setMetaMaskAuthError(true);
                    } else {
                      localStorage.setItem("token", response.data.token);
                      localStorage.setItem(
                        "user",
                        response.data.result[0].name
                      );
                      localStorage.setItem(
                        "email",
                        response.data.result[0].email
                      );
                      localStorage.setItem(
                        "address",
                        response.data.result[0].address
                      );
                      setAccounts(accounts);
                      setUser(response.data.user);
                      setEmail(response.data.result[0].email);
                      setWaitingForSignature(false);
                      setLoginStatus(true);
                      setAfterLogout(false);
                      router.push("/dashboard");
                    }
                  });
                });
            }
          );
        });
    }
  };
*/
  const logout = () => {
    setUser("");
    setPassword("");
    setEmail("");
    setAccounts([]);
    setAccountsMetaMask([]);
    setLoginStatus(false);
    setConnected(false);
    setMetamaskConnected(false);
    setUserAddress("");
    setHasCharacter(undefined);
    setOwnedAccessPasses([]);
    setSubmitted(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setAfterLogout(true);
    //router.push("/");
  };

  const logoutDashboard = () => {
    setUser("");
    setPassword("");
    setEmail("");
    setAccounts([]);
    setAccountsMetaMask([]);
    setLoginStatus(false);
    setConnected(false);
    setHasCharacter(undefined);
    setOwnedAccessPasses([]);
    setSubmitted(false);
    setUserAddress("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAfterLogout(true);
    router.push("/");
  };

  useState(() => {
    setLoginError(false);
    setRegisterError(false);
    setUserError(false);
    setEmailError(false);
    setPasswordError(false);
    setMetaMaskError(false);
    setUserLoginError(false);
    setPasswordLoginError(false);
    setMetaMaskAuthError(false);
  }, []);

  return (
    <>
    <Head>
       <meta http-equiv="origin-trial" content="AjnsJ8kellgF8AiHLBeUBJWBrCGvfJoumtdvGmLF9avx8cUpBu58v3KLil/s1BumxQKbxw6v4iM8UXIKZALKRg4AAACHeyJvcmlnaW4iOiJodHRwczovL2Vvcy10ZXN0aW5nLnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWV9"/>
    </Head>
      <div className="min-h-screen bg-gray-900">
        <EOSContext.Provider
          value={{
            user,
            email,
            password,
            setUser,
            setEmail,
            setPassword,
            register,
            login,
            loginStatus,
            userAuthenticated,
            submitted,
            setBlur,
            blur,
            url,
            hasCharacter,
            ownedAccessPasses,
            setHasCharacter,
            accounts,
            setOwnedAccessPasses,
            logout,
            waitingForSignature,
            setWaitingForSignature,
            setSubmitted,
            AOS,
            loginError,
            registerError,
            userError,
            emailError,
            passwordError,
            metaMaskError,
            userLoginError,
            passwordLoginError,
            metaMaskAuthError,
            isHomePage,
            setIsHomePage,
            logoutDashboard,
            isModalOpen,
            setIsModalOpen,
            txStarted,
            setTxStarted,
            isAPModalOpen,
            setIsAPModalOpen,
            isLoading,
            setIsLoading,
            web3ServerUrl,
            isMTModalOpen,
            setIsMTModalOpen,
            reset,
            setReset,
            userValid,
            setUserValid,
            emailValid,
            setEmailValid,
            addressValid,
            setAddressValid,
            hasAccessPass,
            setHasAccessPass,
            accountsMetaMask,
            setAccountsMetaMask,
            userAddress,
            setUserAddress,
            isRightAddress,
            registerFreeNFT,
            Application2,
          }}
        >
          <Web3Context.Provider
            value={{
              connected,
              metamaskConnected,
              setMetamaskConnected,
              connectBlockchain,
              accounts,
              web3,
              connectMetaMask,
              //authWithMetaMask,
              selectedAccessPassID,
              setSelectedAccessPassID,
              setSelectedNetwork,
              selectedNetwork,
              accessPassContractEthereum,
              accessPassContractBSC,
              accessPassContractAvalanche,
              accessPassContractPolygon,
              setConnected,
              setAccounts,
              itemContractEthereum,
              itemContractBSC,
              itemContractAvalanche,
              itemContractPolygon,
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
              priceETH,
              setPriceETH,
              priceBNB,
              setPriceBNB,
              priceAVAX,
              setPriceAVAX,
              priceMATIC,
              setPriceMATIC,
              itemPrice,
              setItemPrice,
              priceETH_AP,
              setPriceETH_AP,
              priceBNB_AP,
              setPriceBNB_AP,
              priceAVAX_AP,
              setPriceAVAX_AP,
              priceMATIC_AP,
              setPriceMATIC_AP,
              txStarted_AP,
              setTxStarted_AP,
              accessPassPrice,
              setAccessPassPrice,
              selectedAPName,
              setSelectedAPName,
              selectedAPID,
              setSelectedAPID,
              selectedAPAmount,
              setSelectedAPAmount,
              selectedAPPrice,
              setSelectedAPPrice,
              selectedAPImg,
              setSelectedAPImg,
              web3HTTP,
              //wsWeb3Client,
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
              itemsReset,
              setItemsReset,
              selectedItemFinalPrice,
              setSelectedItemFinalPrice,
              isSyncingAddress,
              syncErrorMessage,
              address,
              setAddress,
              freeNFTTxLink,
              setFreeNFTTxLink,
            }}
          >
            <GlobalStyle />
            {TriaConnectProvider2 && TriaConnectProvider2}
            <Layout>
              <SelectNetworkModal />
              <SelectNetworkModalAP />
              <SelectNetworkModalMT />
              <Component {...pageProps} />
            </Layout>
          </Web3Context.Provider>
        </EOSContext.Provider>
      </div>
    </>
  );
}

export default MyApp;
