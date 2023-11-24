import Image from "next/image";

import SocialSlider from "../SocialSlider";
import { useEffect, useState, useContext } from "react";

import welcomeText from "../../public/assets/welcomeText.png";
import welcomeTextDetailed from "../../public/assets/welcomeTextDetailed.png";
import enterAnEverExpandingWorld from "../../public/assets/enterAnEverExpandingWorld.png";
import aNewWayToPlayAndEarn from "../../public/assets/aNewWayToPlayAndEarn.png";
import grindYourWayTowardsGreatness from "../../public/assets/grindYourWayTowardsGreatness.png";
import sectionOneBg from "../../public/assets/sectionOneBg.jpg";

import { EOSContext } from "../../contexts/EOSContext";

const SectionOne = () => {
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
    <div className="sectionOneWrapper">
      <div className="bgWrap">
        <div className="sm-view-now">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="left top"
            src={sectionOneBg}
            placeholder="blur"
          />
        </div>

        <div className="lg-view-now no-gutters mx-0">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="right bottom"
            src={sectionOneBg}
            placeholder="blur"
          />
        </div>
      </div>
      <SocialSlider />
      <div className="bgWrapMobile">
        <div className="lg-view-now" data-aos="fade-down">
          <div
            className="mx-auto d-block"
            style={{ height: "auto", width: "1200px" }}
          >
            <Image
              className="object-center object-cover pointer-events-none rounded relative"
              objectFit="cover"
              src={welcomeTextDetailed}
              objectPosition="center top"
              alt="Welcome to a true NFT gaming experience"
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
                src={welcomeText}
                objectPosition="center top"
                alt="Welcome to a true NFT gaming experience"
                placeholder="blur"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
              <Image
                className="object-center object-cover pointer-events-none "
                objectFit="cover"
                src={enterAnEverExpandingWorld}
                objectPosition="center top"
                alt="Enter an ever expanding world"
                placeholder="blur"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
              <Image
                className="object-center object-cover pointer-events-none "
                objectFit="cover"
                src={aNewWayToPlayAndEarn}
                objectPosition="center top"
                alt="A new way to play and earn"
                placeholder="blur"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <Image
                className="object-center object-cover pointer-events-none "
                objectFit="cover"
                src={grindYourWayTowardsGreatness}
                objectPosition="center top"
                alt="Grind your way towards greatness"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
