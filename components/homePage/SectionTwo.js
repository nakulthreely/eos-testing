import Image from "next/image";
import { useEffect, useState, useContext } from "react";

import howToEnterTheEmpireOfSight from "../../public/assets/howToEnterTheEmpireOfSight.png";
import howToEnterTheEmpireOfSight_mobile from "../../public/assets/howToEnterTheEmpireOfSight_mobile.png";
import sectionTwoBg from "../../public/assets/sectionTwoBg.jpg";

import { EOSContext } from "../../contexts/EOSContext";

const SectionTwo = () => {
  const { AOS } = useContext(EOSContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <div className="sectionTwoWrapper">
      <div className="bgWrap">
        <div className="sm-view-now no-gutters mx-0">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="right top"
            src={sectionTwoBg}
            placeholder="blur"
          />
        </div>
        <div className="lg-view-now no-gutters mx-0">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="left top"
            src={sectionTwoBg}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="lg-view-now ">
        <div
          className="mx-auto d-block"
          style={{ height: "auto", width: "1200px" }}
        >
          <Image
            className="object-center object-cover pointer-events-none rounded"
            objectFit="cover"
            src={howToEnterTheEmpireOfSight}
            objectPosition="center top"
            alt="How to enter the Empire Of Sight"
            data-aos="fade-down"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row sm-view-now no-gutters mx-0">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
            <Image
              className="object-center object-cover pointer-events-none rounded"
              objectFit="cover"
              src={howToEnterTheEmpireOfSight_mobile}
              objectPosition="center top"
              alt="How to enter the Empire Of Sight"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
