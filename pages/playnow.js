import Image from "next/image";
import Head from "next/head";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

import defaultBg from "../public/assets/defaultBg.png";
import comingSoon from "../public/assets/comingSoon.gif";

const PlayNow = () => {
  const { setBlur } = useContext(EOSContext);

  useEffect(() => {
    setBlur(false);
  }, []);

  return (
    <>
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
  );
};

export default PlayNow;
