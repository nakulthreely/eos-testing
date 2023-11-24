import Image from "next/image";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";
import useCharacter from "../hooks/useCharacter";
import Axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { Sort, Cubes, Shop, Cube, Money } from "grommet-icons";

import success from "../public/assets/success_page.png";
import successMobile from "../public/assets/successmobile.png";

const Success = () => {
  const { setBlur, user, url, setIsHomePage } = useContext(EOSContext);
  const [selectedClass, setSelectedClass] = useState(undefined);
  const router = useRouter();

  /* Classes:
    0: SPIRITUAL WARRIOR
    1: DARK KNIGHT
    2: MAGICIAN
    3: WIND WALKER
    4: WANDERER
  */

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
  }, []);

  return (
    <>
      <Head>
        <title>Success | Empire Of Sight</title>
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
                          className="rounded"
                          src={successMobile}
                          placeholder="blur"
                          alt="Select your Class"
                        />
                      </div>
                      <div className="lg-view-now">
                        <Image
                          className="rounded"
                          src={success}
                          placeholder="blur"
                          alt="Select your Class"
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
                          e.preventDefault();
                          router.push("/login");
                        }}
                      >
                        <div className="cinzelStyle hover:text-gold-100">
                          GO TO THE DASHBOARD
                        </div>
                      </button>
                    </div>

                    {/* BUTTON */}
                    <div className=" col-span-5 rounded buttonScale">
                      <button
                        className="w-full bg-gray-900  text-white lg:text-2xl sm:text-xl font-bold py-2  rounded h-14"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        onClick={(e) => {
                          router.push("/playnow");
                        }}
                      >
                        <div className="cinzelStyle hover:text-gold-100">
                          PLAY NOW
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

export default Success;
