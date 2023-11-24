import { Compliance } from "grommet-icons";
import { useContext, useEffect } from "react";
import { EOSContext } from "../../contexts/EOSContext";
import Image from "next/image";
import { useRouter } from "next/router";

import verificationlink from "../../public/assets/verificationlink.png";
import verficaitonlinkmobile from "../../public/assets/verficaitonlinkmobile.png";

const Success = () => {
  const { setBlur, logout, AOS, setIsHomePage } = useContext(EOSContext);
  const router = useRouter();

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

  return (
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
                    e.preventDefault();
                    logout();
                    router.push("/login");
                  }}
                >
                  <div className="cinzelStyle hover:text-gold-100">
                    GO TO DASHBOARD
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Success;
