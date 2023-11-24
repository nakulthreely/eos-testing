import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

import Form from "../components/create-account/Form";
import Success from "../components/create-account/Success";
import WaitingForSign from "../components/WaitingForSign";

import { EOSContext } from "../contexts/EOSContext";
import { Web3Context } from "../contexts/Web3Context";

import loginBg from "../public/assets/sectionTwoBg.jpg";

const CreateAccount = () => {
  //const waitingForSignature = true;
  const {
    setUser,
    setEmail,
    setPassword,
    register,
    loginStatus,
    submitted,
    setBlur,
    waitingForSignature,
    setIsHomePage,
  } = useContext(EOSContext);

  const router = useRouter();

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
  }, []);

  useEffect(() => {
    if (loginStatus) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Account | Empire Of Sight</title>
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
      {!loginStatus && (
        <>
          {submitted ? (
            <div className="container">
              <div className="pageWrapper">
                <Success />
              </div>
            </div>
          ) : (
            <>
              {waitingForSignature ? (
                <>
                  <div className="container">
                    <div className="loginWrapper">
                      <WaitingForSign />
                    </div>
                  </div>
                </>
              ) : (
                <div className="container">
                  <div className="loginWrapper">
                    <Form />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default CreateAccount;
