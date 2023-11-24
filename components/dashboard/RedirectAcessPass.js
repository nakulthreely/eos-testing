import Image from "next/image";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { EOSContext } from "../../contexts/EOSContext";
import welcomeDashboard from "../../public/assets/dashboard_welcome.png";

const RedirectAccessPass = () => {
  const {
    setBlur,
    AOS,
    web3ServerUrl,
    accountsMetaMask,
    userAddress,
    setUserAddress,
    user,
  } = useContext(EOSContext);

  useEffect(() => {
    setBlur(false);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  const redirectToAccessPass = (e) => {
    e.preventDefault();
    Router.push("/accesspass");
  };

  return (
    <>
      <div className="container">
        <div className="pageWrapper">
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
          )}
          {accountsMetaMask[0] !== undefined &&
            userAddress !== undefined &&
            userAddress !== accountsMetaMask[0] && (
              <div className="lg:col-span-12 sm:col-span-1 row-span-1 pb-2">
                <div
                  className="bg-error-100 text-gray-50 px-4 py-3 rounded relative text-center"
                  role="alert"
                >
                  <strong className="font-bold">
                    You're connected with a different MetaMask account. Please
                    connect the account that is assigned to this user{" "}
                    {`(${user})`}!
                  </strong>
                  <br /> <br />
                  <p className="font-bold">
                    Connected account: {`${accountsMetaMask[0]}`} <br />
                    Account you should connect: {`${userAddress}`}
                  </p>
                </div>
              </div>
            )}
          <div className="flex flex-col min-h-screen overflow-hidden ">
            <main className="grow">
              <section>
                <div
                  className="darkTransparentBg max-w-6xl mx-auto p-4  rounded"
                  data-aos="fade-down"
                >
                  <div className="grid grid-cols-5 gap-2">
                    <div className="transparentBox col-span-5 row-span-1 rounded">
                      <div className="sm-view-now">
                        <Image
                          src={welcomeDashboard}
                          placeholder="blur"
                          alt="Obtain your access pass - Choose your access pass and enter the Empire Of Sight! The passes range between 30-365 days as well as a prototype pass."
                        />
                      </div>
                      <div className="lg-view-now">
                        <Image
                          src={welcomeDashboard}
                          placeholder="blur"
                          alt="Obtain your access pass - Choose your access pass and enter the Empire Of Sight! The passes range between 30-365 days as well as a prototype pass."
                        />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className=" col-span-5 rounded buttonScale">
                      <button
                        className="w-full bg-gray-900  text-white lg:text-2xl sm:text-xl font-bold py-2  rounded h-14"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        onClick={(e) => {
                          redirectToAccessPass(e);
                        }}
                      >
                        <div className="cinzelStyle hover:text-gold-100">
                          ACTIVATE YOUR ACCESS PASS HERE
                        </div>
                      </button>
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

export default RedirectAccessPass;
