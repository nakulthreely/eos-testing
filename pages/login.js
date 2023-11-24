import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import "@tria-sdk/authenticate/dist/index.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { EOSContext } from "../contexts/EOSContext";
import { Web3Context } from "../contexts/Web3Context";

import WaitingForSign from "../components/WaitingForSign";

import { LoginIcon } from "@heroicons/react/solid";

import loginImg from "../public/assets/login.png";
import defaultBg from "../public/assets/defaultBg.png";
import metamask from "../public/assets/metamask.svg";
import loginBg from "../public/assets/sectionTwoBg.jpg";
import Loading from "../components/Loading";

const LoginPage = () => {
  const {
    setUser,
    setEmail,
    setPassword,
    login,
    loginStatus,
    userAuthenticated,
    sendEmail,
    setBlur,
    waitingForSignature,
    AOS,
    loginError,
    userLoginError,
    passwordLoginError,
    metaMaskAuthError,
    setIsHomePage,
    Application2,
  } = useContext(EOSContext);
  const { authWithMetaMask } = useContext(Web3Context);

  const router = useRouter();

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
    if (loginStatus) {
      router.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Login | Empire Of Sight</title>
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
        <meta http-equiv="origin-trial" content=" AjnsJ8kellgF8AiHLBeUBJWBrCGvfJoumtdvGmLF9avx8cUpBu58v3KLil/s1BumxQKbxw6v4iM8UXIKZALKRg4AAACHeyJvcmlnaW4iOiJodHRwczovL2Vvcy10ZXN0aW5nLnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWV9"/>
        <meta
          property="twitter:image"
          content="https://www.empireofsight.com/assets/sectionOneBg.jpg"
        />
        <meta property="twitter:site" content="@EmpireOfSight" />
        <meta property="twitter:creator" content="@EmpireOfSight" />
      </Head>

      <main className="">
        <div className="">{Application2 && Application2}</div>
      </main>
    </>
  );
};

export default LoginPage;
