import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

import text from "../../public/assets/heroText.png";
import heroBg from "../../public/assets/heroBg.jpg";

import { EOSContext } from "../../contexts/EOSContext";
import { ArrowDownIcon } from "@heroicons/react/solid";

const Hero = () => {
  const { AOS } = useContext(EOSContext);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <div className="heroWrapper">
      <div className="bgWrap">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="left top"
          src={heroBg}
          placeholder="blur"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-sm-12 col-lg-10">
            <div className="label">
              <Image
                src={text}
                alt="The future of NFT gaming is in sight, the Empire Of Sight."
                data-aos="fade-down"
              />

              <button
                className="bg-gray-900 hover:bg-gray-50 text-gray-50 hover:text-gray-900 text-2xl font-bold py-2 px-4 mx-1 rounded h-14"
                data-aos="zoom-in"
                data-aos-delay="300"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    "https://client.empireofsight.com/Empire_of_Sight_Launcher_Installer.exe"
                  );
                }}
              >
                <div className="cinzelStyle gap-2 flex flex-row">
                  DOWNLOAD NOW
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
