import Image from "next/image";
import Head from "next/head";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

import defaultBg from "../public/assets/defaultBg.png";
import whitepaperSectionOne from "../public/assets/whitepaperSectionOne.png";
import whitepaperSectionTwo from "../public/assets/whitepaperSectionTwo.gif";
import whitepaperSectionThree from "../public/assets/whitepaperSectionThree.png";
import whitepaperSectionFour from "../public/assets/whitepaperSectionFour.png";
import whitepaperSectionFive from "../public/assets/whitepaperSectionFive.gif";
import whitepaperSectionSix from "../public/assets/whitepaperSectionSix.png";
import whitepaperSectionSeven from "../public/assets/whitepaperSectionSeven.gif";
import whitepaperSectionEight from "../public/assets/whitepaperSectionEight.gif";
import whitepaperSectionNine from "../public/assets/whitepaperSectionNine.png";

const Whitepaper = () => {
  const { setBlur, AOS, setIsHomePage } = useContext(EOSContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
    setIsHomePage(false);
    setBlur(false);
  }, []);

  return (
    <>
      <Head>
        <title>Preamble | Empire of Sight</title>
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
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                INTRODUCTION
              </h1>
            </div>
            <div className="wrapImageLeft" data-aos="zoom-in">
              <Image
                width={140}
                height={260}
                src={whitepaperSectionOne}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              We will be as blunt as possible for everyone reading this, this is
              not a normal Web3 game that you’ve seen online where they only
              have a feature to mint-play-earn, mint-play-earn until the game
              dies. This is an actual game so do not expect the same type of
              whitepaper you see there promising you crazy things about the
              token and ROI in an attempt to make you think you will get rich
              instantly. We are here to deliver an actual game with a real
              game-like economy based on true gamer values related to items,
              gold coins, quests, dungeons, guilds, and bosses, but with a twist
              that includes blockchain capabilities. You will not see some fancy
              Pie Chart with everything split up into sections that mean
              absolutely nothing and you will not hear us tell you there is an
              insane ROI either. We will be direct and honest about the entire
              process to give you the choice of how you want to spend your time,
              money, and energy. Most questions you will have can be quickly
              answered by viewing the FAQs section on the website but we will
              cover some things here.
              <br />
              <br />
              Most questions you will have can be quickly answered by viewing
              the FAQs section on the website but we will cover some things
              here.
            </p>
          </div>
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                HOW THE GAME DEVELOPMENT TEAM SUSTAINS REVENUE
              </h1>
            </div>
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={178}
                height={170}
                src={whitepaperSectionTwo}
                unoptimized={true}
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              It is pretty simple, we offer Access Passes that allow us to
              generate the revenue needed to manage all marketing, servers,
              staff salary, and game development costs. In the future, we may
              develop a way to give unique NFT heroes directly for minting but
              for now, an Access Pass is all you will need to enter the game and
              play.
            </p>
          </div>
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                HOW YOU CAN PROFIT FROM PLAYING THE GAME
              </h1>
            </div>
            <div className="wrapImageLeft" data-aos="zoom-in">
              <Image
                width={156}
                height={258}
                src={whitepaperSectionThree}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              Well, if you have ever played any MMORPG, you know there is a
              large amount of the player base who buy gold, items, services, and
              many other assets in the game. In the Empire Of Sight, it is no
              different! You will be able to farm gold, items, NFTs, and
              blockchain assets but here we endorse RWT we want you to look at
              everything you do as potential profit because you can sell
              whatever you want to other players independently in-game or VIA
              our marketplace. Instead of us being the only ones selling you
              items, skins, and resources EOS allows you to sell whatever you
              want.
            </p>
          </div>
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                WHAT MAKES NFTS SPECIAL
              </h1>
            </div>
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={102}
                height={216}
                src={whitepaperSectionSix}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              In EOS NFTs will be the only “visible items” that will appear on
              your character in the game. You can still equip the “virtual
              items” such as armor, rings, potions, etc. but they will only
              provide you with bonuses to your character and not give you cool
              aesthetics. <br />
              NFTs will also be better overall, for example, if you find an “NFT
              shoulder slot” piece of armor in a region that also has “virtual
              item shoulders” the NFT will be visible on your character while
              wearing it and will be exponentially harder to get than its
              virtual counterpart as well better stats.
              <br /> We have had all of our NFTs cosmetically designed for EOS,
              they are uniquely beautiful and offer not only a great cosmetic
              upgrade to your character but an awesome upgrade to your PVM/PVP
              experience!
              <br /> We will be introducing and upgrading the entire system over
              time and hope to take the communities input throughout the future.
            </p>
          </div>

          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                HOW NFTS ARE OBTAINED
              </h1>
            </div>
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={102}
                height={216}
                src={whitepaperSectionSix}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              Hunting for NFTs can be fun, exciting, and sometimes even painful.
              Throughout your gameplay you will be able to collect materials to
              craft your own NFTs, you can purchase them from vendors for
              tokens, gold coins, or other various methods. They will be awarded
              through quests, completing a dungeon, working your way through a
              maze, killing a boss, or even a rare chance coming from a random
              monster kill! The game will be filled with wonderful exciting loot
              that you will want to record so you do not forget where it came
              from.
            </p>
          </div>
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                WHAT BLOCKCHAIN WE USE
              </h1>
            </div>
            <div className="wrapImageLeft" data-aos="zoom-in">
              <Image
                width={180}
                height={200}
                src={whitepaperSectionSeven}
                unoptimized={true}
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              Why would you use just one color when you have an entire pallet?
              We give the freedom for our players to use their favorite
              blockchain. This way our game is more enjoyable & affordable while
              reaching out to as many people we can. We start with four very
              popular blockchains: Ethereum, Binance Smart Chain, Avalanche and
              Polygon. Shortly we're planning to extend our system to Arbitrum,
              Fantom, Gnosis, Harmony, Moonriver, Optimism, and later on Solana
              as well.
            </p>
          </div>
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                WHY WE DECIDED TO USE THE ERC-1155 MULTI TOKEN STANDARD FOR
                ITEMS AND ACCESS PASSES
              </h1>
            </div>
            <div className="wrapImageRight" data-aos="zoom-in">
              <Image
                width={120}
                height={250}
                src={whitepaperSectionEight}
                unoptimized={true}
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              As we know MMORPGs can have hundreds if not thousands of item
              types. Somehow we had to put our in-game items to the blockchain
              in the most efficient way. If we chose the well-known ERC-721
              standard which the majority of NFTs are based on, we would have to
              deploy a separate smart contract for each item/token type. The
              ERC-1155 standard is flexible, it lets us use even thousands of
              token types in a single smart contract. That sounds exactly what
              we need, right?
            </p>
          </div>
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper" data-aos="fade-down">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                HOW WE STRUCTURE OUR CURRENCY, ITEMS, AND ACCESS PASSES ON THE
                BLOCKCHAIN
              </h1>
            </div>
            <div className="wrapImageLeft" data-aos="zoom-in">
              <Image
                width={126}
                height={216}
                src={whitepaperSectionNine}
                placeholder="blur"
              />
            </div>
            <p className="defaultText" data-aos="fade-down">
              Although the ERC-1155 standard has the mentioned flexibility to
              create thousands of token types in a single smart contract, we
              decided to go on the golden way and create at least a few
              categories, so our structure becomes more transparent for our
              players. Except for our currency which is an ERC-20 standard
              token, each item is based on the ERC-1155 standard. We defined the
              following categories: Access Passes, Weapons, Accessories,
              Potions, Armour Sets. Each category has a dedicated ERC-1155 smart
              contract and within a category, we have different item types. For
              example, we have the Weapons category, we have a separate Weapons
              smart contract, and within this category and smart contract, we
              have the following item/token types: Bow, Sword, Dagger, 2H Sword,
              Spear, Scythe, and so on... These types are separated by IDs and
              the trick is that more players can own from the same ID. The token
              types have limit caps, so an item can be owned only by a certain
              amount of players. Some of the items have many replicates, some
              have only a few or even only one. We truly wish you to be the one
              who will own some of the rarest items but you will have to play
              hard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whitepaper;
