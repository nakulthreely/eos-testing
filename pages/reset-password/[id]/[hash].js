import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Axios from "axios";

import { EOSContext } from "../../../contexts/EOSContext";

import loginImg from "../../../public/assets/letsgetyoursightback.png";
import { hasBasePath } from "next/dist/shared/lib/router/router";

const ResetPassword = () => {
  const router = useRouter();
  const { id, hash } = router.query;
  const [passDontMatch, setPassDontMatch] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [received, setReceived] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const { loginStatus, setBlur, url } = useContext(EOSContext);

  useEffect(() => {
    setBlur(false);
  }, []);

  useEffect(() => {
    //(loginStatus);
    if (loginStatus) {
      // router.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    //console.log("id", id);
    //console.log("hash", hash);
  }, [id, hash]);

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPassDontMatch(true);
    } else {
      setPassDontMatch(false);
    }
  }, [password, confirmPassword]);

  const resetPassword = () => {
    Axios.post(`${url}/reset-password`, {
      id: id,
      token: hash,
      password: password,
    }).then((response) => {
      setReceived(true);
      setConfirmationMessage(response.data.message);
      if (!response.data.success) {
        setFailed(true);
      } else {
        setSuccess(true);
      }
    });
  };

  return (
    <>
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

                    {/* Form */}
                    <div className="pt-3 max-w-sm mx-auto w-full">
                      {received ? (
                        <>
                          {/* SUCCESS MESSAGE */}
                          {success && (
                            <div
                              className="bg-green-300 text-gray-900 px-4 py-3 rounded relative"
                              role="alert"
                            >
                              <strong class="font-bold">Success! </strong>
                              <br />
                              <span class="block sm:inline">
                                {confirmationMessage}
                              </span>
                            </div>
                          )}
                          {/* FAILED MESSAGE */}
                          {failed && (
                            <div
                              className="bg-error-100 text-gray-900 px-4 py-3 rounded relative"
                              role="alert"
                            >
                              <strong class="font-bold">Failed! </strong>
                              <br />
                              <span class="block sm:inline">
                                {confirmationMessage}
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <form>
                            <div className="flex flex-wrap -mx-3 mb-1">
                              <div className="w-full px-3">
                                <label
                                  className="block text-gray-50 text-sm font-medium mb-1"
                                  htmlFor="password"
                                >
                                  New Password{" "}
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
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label
                                  className="block text-gray-50 text-sm font-medium mb-1"
                                  htmlFor="password"
                                >
                                  Confirm New Password
                                  <span className="text-link-800">*</span>
                                </label>
                                <input
                                  id="password"
                                  type="password"
                                  className="form-input w-full text-gray-800"
                                  placeholder="Confirm password"
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setConfirmPassword(e.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>

                            {/* Passwords don't match */}
                            {passDontMatch && (
                              <div
                                className="bg-error-100 text-gray-900 px-4 py-3 rounded relative"
                                role="alert"
                              >
                                <strong class="font-bold">
                                  Passwords don't match!
                                </strong>
                                <br />
                                <span class="block sm:inline">
                                  Please try again!
                                </span>
                              </div>
                            )}

                            <div className="flex flex-wrap -mx-3 mt-6">
                              <div className="w-full px-3">
                                <button
                                  className="hover:bg-gray-900 bg-gray-50 hover:text-gray-50 text-gray-900 font-bold py-2 px-4 rounded w-full"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (!passDontMatch) resetPassword();
                                  }}
                                >
                                  <div className="cinzelStyle">SEND</div>
                                </button>
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

export default ResetPassword;
