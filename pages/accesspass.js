import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import AccessPassCard from "../components/AccessPassCard";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

import accessPassHeading from "../public/assets/accessPassHeading.png";
import accessPassMobile from "../public/assets/accesspassmobile.png";
import cardPrototype from "../public/assets/cardPrototype.png";
//import card30Day from "../public/assets/card30Day.png";
//import card60Day from "../public/assets/card60Day.png";
//import card90Day from "../public/assets/card90Day.png";
//import card180Day from "../public/assets/card180Day.png";
//import card365Day from "../public/assets/card365Day.png";
import card30Day from "../public/assets/card30DayComingSoon.png";
import card60Day from "../public/assets/card60DayComingSoon.png";
import card90Day from "../public/assets/card90DayComingSoon.png";
import card180Day from "../public/assets/card180DayComingSoon.png";
import card365Day from "../public/assets/card365DayComingSoon.png";
import defaultBg from "../public/assets/defaultBg.png";

const AccessPass = () => {
  const { setBlur, setIsHomePage } = useContext(EOSContext);
  const router = useRouter();

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
  }, []);

  useEffect(() => {
    router.prefetch("/select-network");
  }, []);

  return (
    <>
      <Head>
        <title>Access Pass | Empire Of Sight</title>
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
          <div className="flex flex-col min-h-screen overflow-visible">
            <main className="grow">
              <section>
                <div
                  className="darkTransparentBg max-w-6xl mx-auto p-4 rounded"
                  data-aos="fade-down"
                >
                  <div className="transparentBox lg:col-span-12 sm:col-span-1 row-span-3">
                    <div className="sm-view-now">
                      <Image
                        className="rounded"
                        src={accessPassMobile}
                        placeholder="blur"
                        alt="Obtain your access pass - Choose your access pass and enter the Empire Of Sight! The passes range between 30-365 days as well as a prototype pass."
                      />
                    </div>

                    <div className="lg-view-now">
                      <Image
                        className="rounded"
                        src={accessPassHeading}
                        placeholder="blur"
                        alt="Obtain your access pass - Choose your access pass and enter the Empire Of Sight! The passes range between 30-365 days as well as a prototype pass."
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-x-10 pt-3">
                    <div>
                      <AccessPassCard
                        type="accessPass"
                        id={0}
                        buttonType="activateButtonComingSoon"
                        image={card365Day}
                        alt="Access Pass - 365 DAY"
                        comingSoon={true}
                        price="COMING SOON!"
                        placeholder="blur"
                      />
                    </div>

                    <div>
                      <AccessPassCard
                        type="accessPass"
                        id={0}
                        buttonType="activateButtonPrototype"
                        image={cardPrototype}
                        name="Access Pass - Prototype"
                        price={4.99}
                        comingSoon={false}
                        placeholder="blur"
                      />
                    </div>

                    <div>
                      <AccessPassCard
                        type="accessPass"
                        id={4}
                        buttonType="activateButton"
                        image={card180Day}
                        alt="Access Pass - 180 DAY"
                        comingSoon={true}
                        price="$9.99"
                        placeholder="blur"
                      />
                    </div>

                    <div>
                      <AccessPassCard
                        type="accessPass"
                        id={3}
                        buttonType="activateButton"
                        image={card90Day}
                        alt="Access Pass - 90 DAY"
                        comingSoon={true}
                        price="$9.99"
                        placeholder="blur"
                      />
                    </div>

                    <div className="mt-8">
                      <AccessPassCard
                        type="accessPass"
                        id={2}
                        buttonType="activateButton"
                        image={card60Day}
                        alt="Access Pass - 60 DAY"
                        comingSoon={true}
                        price="$9.99"
                        placeholder="blur"
                      />
                    </div>

                    <div>
                      <AccessPassCard
                        type="accessPass"
                        id={1}
                        buttonType="activateButton"
                        image={card30Day}
                        alt="Access Pass - 30 DAY"
                        comingSoon={true}
                        price="$9.99"
                        placeholder="blur"
                      />
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

export default AccessPass;
