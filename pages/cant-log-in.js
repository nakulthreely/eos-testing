import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import { EOSContext } from "../contexts/EOSContext";

import loginImg from "../public/assets/letsgetyoursightback.png";
import { StatusGood } from "grommet-icons";

const CantLogIn = () => {
  const { email, setEmail, loginStatus, setBlur, url, AOS, setIsHomePage } =
    useContext(EOSContext);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const recaptchaRef = React.createRef();
  const [captchaCode, setCaptchaCode] = useState(undefined);
  const [isWaiting, setIsWaiting] = useState(false);
  const [buttonText, setButtonText] = useState("WATING...");

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

  useEffect(() => {
    if (loginStatus) {
      // router.push("/dashboard");
    }
  }, []);

  const forgotPassword = () => {
    Axios.post(`${url}/forgot-password`, {
      email: email,
    }).then((response) => {
      if (!response.data.success) {
        setFailed(true);
        setButtonText("FAILED!");
      } else {
        setSuccess(true);
        setButtonText("SUCCESS!");
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
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
        // If the response is ok than show the success alert
        forgotPassword();
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      //recaptchaRef.current.reset();
      //setEmail("");
    }
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    setCaptchaCode(captchaCode);
  };

  return (
    <>
      <Head>
        <title>Can't Log In? | Empire Of Sight</title>
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
      <div className="container">
        <div className="loginWrapper">
          <div className="flex flex-col min-h-screen overflow-hidden rounded">
            <main className="grow">
              <section>
                <div
                  className="darkTransparentBg max-w-6xl mx-auto rounded"
                  data-aos="zoom-in"
                >
                  <div className="pt-5 pb-5 max-w-sm mx-auto flex flex-wrap -mx-4 mb-4">
                    <Image
                      className="rounded"
                      src={loginImg}
                      placeholder="blur"
                      alt="Enter the Empire Of Sight!"
                    />
                    <div className="pt-3 max-w-sm mx-auto w-full">
                      {/* SUCCESS MESSAGE */}
                      {success ? (
                        <div
                          className="bg-green-300 text-gray-900 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <strong class="font-bold">Success!</strong>
                          <br />
                          <span class="block sm:inline">
                            A magical link for resetting your password has been
                            sent to your email. Await its arrival!
                          </span>
                        </div>
                      ) : (
                        <>
                          {/* Form */}

                          <form>
                            <div className="flex flex-wrap -mx-3 mb-4">
                              <div className="w-full px-3">
                                <label
                                  className="block text-gray-100 text-sm font-medium mb-1"
                                  htmlFor="email"
                                >
                                  Email <span className="text-link-800">*</span>
                                </label>
                                <input
                                  id="email"
                                  type="email"
                                  className="form-input w-full text-gray-800 relative mb-2"
                                  placeholder="Enter your email address"
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  required
                                />
                                <ReCAPTCHA
                                  ref={recaptchaRef}
                                  sitekey={
                                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                                  }
                                  theme="dark"
                                  onChange={onReCAPTCHAChange}
                                />
                              </div>
                            </div>

                            {/* FAILED MESSAGE */}
                            {failed && (
                              <div
                                className="bg-error-100 text-gray-900 px-4 py-3 rounded relative"
                                role="alert"
                              >
                                <strong class="font-bold">Failed! </strong>
                                <br />
                                <span class="block sm:inline">
                                  Please check if your email address is correct.
                                </span>
                              </div>
                            )}

                            <div className="flex flex-wrap -mx-3 mt-6">
                              <div className="w-full px-3">
                                {!isWaiting ? (
                                  <>
                                    <button
                                      className="hover:bg-gray-400 bg-gray-50 hover:text-gray-50 text-gray-900 font-bold py-2 px-4 rounded w-full"
                                      onClick={(e) => {
                                        handleSubmit(e);
                                        setIsWaiting(true);
                                      }}
                                    >
                                      <div className="cinzelStyle">
                                        SEND RESET LINK
                                      </div>
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button className="bg-gray-400 text-gray-50  font-bold py-2 px-4 rounded w-full cursor-default">
                                      <div className="cinzelStyle">
                                        {buttonText}
                                      </div>
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </form>
                        </>
                      )}

                      <Link href="/login" passHref>
                        <div className="text-gray-50 font-extrabold hover:text-green-100 text-center mt-6 cursor-pointer">
                          Now you remember? Log In
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default CantLogIn;
