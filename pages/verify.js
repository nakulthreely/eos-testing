import { Compliance } from "grommet-icons";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";
import Image from "next/image";
import { useRouter } from "next/router";
import verificationlink from "../public/assets/verificationlink.png";
import verficaitonlinkmobile from "../public/assets/verficaitonlinkmobile.png";

const Verify = () => {
  const { setBlur, AOS, setIsHomePage } = useContext(EOSContext);

  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  useEffect(() => {
    setIsHomePage(false);
    setBlur(false);
  }, []);

  return (
    <>
      <Head>
        <title>Verify | Empire Of Sight</title>
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
                          src={verficaitonlinkmobile}
                          placeholder="blur"
                          alt="Select your Class"
                        />
                      </div>
                      <div className="lg-view-now">
                        <Image
                          className="rounded"
                          src={verificationlink}
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
                          // router.push("/dashboard");
                        }}
                      >
                        <div className="cinzelStyle hover:text-gold-100">
                          GO TO THE DASHBOARD
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

export default Verify;
