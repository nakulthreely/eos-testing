import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Updates = () => {
  const { setBlur, AOS, setIsHomePage } = useContext(EOSContext);

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

  return (
    <>
      <Head>
        <title>Updates | Empire Of Sight</title>
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
      <style jsx>{`
        .neoh_fn_moving_blog .moving_img {
          opacity: 0;
          height: 0;
          width: 0;
          overflow: hidden;
          z-index: -2;
          position: absolute;
          margin: 0;
          padding: 0;
          outline: none;
          visibility: hidden;
        }

        .neoh_fn_moving_blog ul {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
          list-style-type: none;
          margin-left: -50px;
        }

        .neoh_fn_moving_blog li {
          padding-left: 50px;
          margin-bottom: 50px;
          width: 33.3333%;
        }

        .neoh_fn_moving_blog .item {
          width: 100%;
        }

        .neoh_fn_moving_blog .fn_date {
          display: flex;
          margin-bottom: 26px;
        }

        .neoh_fn_moving_blog .fn_date span {
          background-color: #efefef;
          line-height: 30px;
          text-align: center;
          display: block;
          position: relative;
          transition: all 0.3s ease;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          font-family: var(--hff);
          letter-spacing: 0px;
          padding: 0 15px;
        }

        .neoh_fn_moving_blog .fn_date span:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-color: transparent;
          transition: all 0.3s ease;
          border-width: 31px 0 0 12px;
          border-left-color: #111111;
          left: 100%;
          top: 0;
        }

        .neoh_fn_moving_blog .fn_title {
          margin: 0;
          padding: 0;
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 18px;
        }

        .neoh_fn_moving_blog .fn_desc {
          margin-bottom: 23px;
        }

        .neoh_fn_moving_blog .fn_read {
          margin-bottom: 0;
        }

        .neoh_fn_button {
          display: block;
          width: fit-content;
          max-width: 100%;
          text-decoration: none;
          color: var(--bc);
          font-size: 16px;
          text-transform: uppercase;
          font-family: var(--hff);
          border: 2px solid var(--extra-color);
          border-radius: 5px;
          line-height: 46px;
          padding: 0 20px 0 73px;
          position: relative;
          text-align: center;
          letter-spacing: 0.5px;
        }
        .neoh_fn_button .text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        .neoh_fn_button.only_text {
          padding: 0 28px;
        }
        .neoh_fn_button.full {
          width: 100%;
          line-height: 66px;
        }
        .neoh_fn_button .icon {
          display: block;
          position: absolute;
          left: 14px;
          top: 50%;
          margin-top: -11px;
        }
        .neoh_fn_button .icon:after {
          content: "";
          width: 2px;
          height: 26px;
          background-color: var(--extra-color);
          left: 100%;
          margin-left: 14px;
          top: 50%;
          margin-top: -13px;
          position: absolute;
        }
        .neoh_fn_button .icon:before {
          content: "";
          width: 2px;
          height: 0;
          background-color: var(--mc);
          left: 100%;
          margin-left: 14px;
          top: -2px;
          position: absolute;
          z-index: 3;
          transition: all 0.3s ease;
        }
        .neoh_fn_button .fn__svg {
          width: 22px;
          height: 22px;
          display: block;
        }
        .neoh_fn_button:hover {
          border-color: var(--mc);
          color: #eee;
        }
        .neoh_fn_button:hover .icon:after {
          opacity: 0;
        }
        .neoh_fn_button:hover .icon:before {
          height: 26px;
        }
      `}</style>
      <div className="container">
        <div className="pageWrapper">
          <div
            className="headingWrapper textSection rounded"
            data-aos="zoom-in"
          >
            <div>
              {/* Main Title */}
              <div className="neoh_fn_title">
                <h1 className="heading">UPDATES</h1>
              </div>

              <div className=" rounded" data-aos="zoom-in">
                <div className="w-full px-4 lg:pt-0 pt-20">
                  <div className="w-full max-w-5xl p-2   darkTransparentBg rounded">
                    {/* What is Empire Of Sight? */}
                    <div className="pt-2">
                      <>
                        <div className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50  bg-gray-900 rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">v1.0.29</span>
                          <span className=" fn_date text-error-200">
                            August 23, 2023
                          </span>
                        </div>

                        <div className="px-4 pt-4 pb-2 text-lg text-gray-100 text-left">
                          <ul className="list-disc list-inside">
                            <li>
                              A new platform for clients is added. The game is
                              available in the browser too at the following
                              link:{" "}
                              <a
                                href="https://play.empireofsight.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-error-200"
                              >
                                https://play.empireofsight.com
                              </a>
                            </li>
                            <li>
                              Fixed UI pop-up bug activated by the space bar.
                            </li>
                            <li>
                              Removed the unclickable "server" option in the
                              login menu.
                            </li>
                            <li>
                              Added colored glow for NFT items dropped on the
                              ground.
                            </li>
                            <li>Fixed mining bug.</li>
                            <li>
                              Fixed collider near armory shop in Belengrand.
                            </li>
                            <li>
                              Fixed the order of skills based on the required
                              level for new characters.
                            </li>
                            <li>
                              Juicy NPC fixes. They are smoothly clickable now.
                            </li>
                            <li>
                              NFT potions are set to add 25 health/mana points
                              and 10s cooldown.
                            </li>
                            <li>
                              Simplified email design and fixed
                              verification/forgot-password email sending to
                              Yahoo Mail, Hotmail/Outlook, and any other type of
                              email addresses.
                            </li>
                            <li>
                              Fixed MetaMask wallet synchronization with the
                              off-chain database.
                            </li>
                            <li>Update page created on the website.</li>
                          </ul>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  /*
  return (
    <>
      <Head>
        <title>Updates | Empire Of Sight</title>
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
        <div className="pageWrapper">
          <div
            className="headingWrapper textSection rounded"
            data-aos="zoom-in"
          >
            <h1 className="heading">COMING SOON!</h1>

            <Image
              className="object-center  pointer-events-none"
              width={716}
              height={585}
              src={comingSoon}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </>
  );*/
};

export default Updates;
