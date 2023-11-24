import Image from "next/image";
import Head from "next/head";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

import defaultBg from "../public/assets/defaultBg.png";
import loreImageSectionOne from "../public/assets/loreImageSectionOne.png";
import loreImageSectionTwo from "../public/assets/loreImageSectionTwo.png";
import loreImageSectionThree from "../public/assets/loreImageSectionThree.png";
import loreImageSectionFour from "../public/assets/loreImageSectionFour.png";
import loreImageSectionFive from "../public/assets/loreImageSectionFive.gif";

const Lore = () => {
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
      {" "}
      <Head>
        <title>Lore | Empire Of Sight</title>
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
          <div className="textSection rounded">
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={108}
                height={222}
                src={loreImageSectionOne}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              Have you ever had the feeling you have done what you are doing
              before, the feeling of Deja Vu, the fear, the excitement that
              comes with nostalgia even though you have never done what you are
              experiencing at that moment? We all have, we have all had those
              moments where we question what path to take, what road to go down,
              what action to take or not to take. Its called having the Sight,
              the 6th Sense, the intuition of something thats deep inside us
              all.
            </p>
          </div>
          <div className="textSection rounded">
            <div className="wrapImageLeft" data-aos="zoom-in">
              <Image
                width={174}
                height={276}
                src={loreImageSectionTwo}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              Welcome to the Empire Of Sight, a piece of the past, in the
              present, creating the future one level, NFT, and boss at a time.
              Experience a world where everything is possible, gain your sight
              back and become the hero you were meant to be by defeating the
              Legions Of the Fallen, collecting NFTs, Virtual Items, playing to
              earn, creating a mythic guild known throughout the Empire, and
              verse others in PVP risking it all to get what you truly desire...
              your sight back.
            </p>
          </div>
          <div className="textSection rounded">
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={162}
                height={228}
                src={loreImageSectionThree}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              You have awakened, you feel where you are is familiar but you have
              no memories its as if you have been here before, started here,
              realized at one point that this was where you were meant to be.
              The air is cold, the air is stale so stale you can taste your past
              but you can not seem to remember how you got here. You lift
              yourself up and look towards the light in front of you gasping at
              the two shadow figures barely grazed by the light from above, you
              start having flashbacks of these ghastly figures, their red eyes,
              you feel a flutter of air from above your head and with a quick
              glance, you see the Fairy of Sight. She whispers to you its time,
              you know this path, you have been here before get up and move
              forward if you stop you will never satisfy that sense of reality
              you have lost, that feeling you crave in every fiber of your
              being. You feel a rush of nostalgia, you stand up and run directly
              to the staircase. As your head emerges from the cellar you smell a
              scent, you know this smell, the fresh air you have felt before and
              thats when you remember, the first memory you have had since
              awakening from your slumber, you must head to the wise old woman,
              she must have something that can lead you on your path.
            </p>
          </div>
          <div className="textSection rounded">
            <div className="wrapImageLeft" data-aos="zoom-in">
              <Image
                width={108}
                height={228}
                src={loreImageSectionFour}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              She already waiting for you outside, as soon as she sees the white
              of your eyes she smiles, a smile so familiar to you, the scar that
              curls on her lip as her teeth begin to show triggers a memory of
              her teaching you, training your inner sight, its the scar you
              caused when the power inside you first came out. She embraces you
              and tells you in such a sweet voice You chose this, bewildered you
              ask her chose what? She responds by saying, you will see, just not
              yet, and to become what you have always wanted to be you must
              rewalk the path in order to walk a new one.
            </p>
          </div>
          <div className="textSection rounded">
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={234}
                height={234}
                src={loreImageSectionFive}
                unoptimized={true}
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              As you walk away you feel a sense of relief, as if you have a
              second chance, an opportunity to change a part of yourself that
              can bring you truth, power, and greatness. You run into the forest
              knowing it is your time, your world, your destiny. You now have
              something more powerful than sight alone, you have the desire to
              see. Look through the covered veil and discover your true self,
              enter a world unlike any other and conquer the Empire Of Sight.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lore;
