import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";

import { EOSContext } from "../../contexts/EOSContext";
import { Web3Context } from "../../contexts/Web3Context";
import Loading from "../Loading";

import metamask from "../../public/assets/metamask.svg";
import loginImg from "../../public/assets/letsgetyoursightback.png";
import { StatusGood } from "grommet-icons";

const Form = () => {
  const { setBlur } = useContext(EOSContext);
  const recaptchaRef = React.createRef();
  const [captchaCode, setCaptchaCode] = useState(undefined);
  const {
    setUser,
    setEmail,
    setPassword,
    register,
    user,
    email,
    url,
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
  const { connectMetaMask, connected, accounts, setConnected, setAccounts } =
    useContext(Web3Context);

  const containsWhitespace = (str) => {
    return /\s/.test(str);
  };

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

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

  useEffect(async () => {
    try {
      await Axios.post(`${url}/is-email-valid`, {
        email: email,
      }).then((response) => {
        setEmailValid(response.data.valid);
      });
    } catch (err) {
      console.log(err);
    }
  }, [email]);

  useEffect(async () => {
    try {
      await Axios.post(`${url}/is-user-valid`, {
        user: user,
      }).then((response) => {
        setUserValid(response.data.valid);
      });
    } catch (err) {
      console.log(err);
    }
  }, [user]);

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

        register();
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

              {/* Form */}
              <div className="pt-3 max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-50 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Username <span className="text-link-800">*</span>
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
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-50 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-link-800">*</span>
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
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-50 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-link-800">*</span>
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
                  {/* 
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-50 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        MetaMask
                        <span className="text-link-800"> *</span>
                      </label>

                      {connected ? (
                        <>
                          <button
                            className="flex justify-center bg-gray-400 text-gray-50 font-bold py-2 px-4 gap-2 rounded w-full  mb-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setConnected(false);
                              setAccounts([]);
                            }}
                          >
                            <StatusGood
                              height={25}
                              width={25}
                              color="#00C781"
                            />
                            <div className="cinzelStyle">
                              {"CONNECTED: " +
                                accounts[0].substring(0, 6) +
                                "..." +
                                accounts[0].substring(
                                  accounts[0].length - 4,
                                  accounts[0].length
                                )}
                            </div>
                          </button>
                          {!addressValid && (
                            <div
                              className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                              role="alert"
                            >
                              <strong class="font-bold">
                                MetaMask address is already taken.
                              </strong>
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          className="flex justify-center bg-gray-100 hover:bg-gray-400 text-gray-900 hover:text-gray-50 font-bold py-2 px-4 gap-2 rounded w-full  mb-1"
                          onClick={(e) => {
                            e.preventDefault();
                            connectMetaMask();
                          }}
                        >
                          <Image height={25} width={25} src={metamask} />
                          <div className="cinzelStyle">
                            CONNECT WITH METAMASK
                          </div>
                        </button>
                      )}
                      {metaMaskError && (
                        <div
                          className="bg-error-100 text-gray-50 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <strong className="font-bold">
                            MetaMask must be connected!
                          </strong>
                        </div>
                      )}
                    </div>
                  </div>
                  */}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    theme="dark"
                    onExpired={() => {
                      recaptchaRef.current.reset();
                    }}
                    onChange={onReCAPTCHAChange}
                  />
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        className="hover:bg-gray-400 bg-gray-50 hover:text-gray-50 text-gray-900 font-bold py-2 px-4 rounded w-full"
                        onClick={async (e) => {
                          e.preventDefault();
                          handleSubmit(e);
                        }}
                      >
                        <div className="cinzelStyle">CREATE ACCOUNT</div>
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-100 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a
                      className="underline  font-bold text-link-800 hover:text-green-100 "
                      href="/terms-of-use"
                    >
                      Terms Of Use
                    </a>
                    , and our{" "}
                    <a
                      className="underline  font-bold  text-link-800 hover:text-green-100  "
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                    .
                  </div>
                </form>
                <Link href="/login" passHref>
                  <div className="text-gray-50 font-extrabold hover:text-green-100 text-center mt-6 cursor-pointer">
                    Already have an account? Log In
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Form;
