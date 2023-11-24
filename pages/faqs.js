import { Accordion } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import defaultBg from "../public/assets/defaultBg.png";

const Faqs = () => {
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
      <Head>
        <title>FAQs | Empire Of Sight</title>
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
      <div className="faqsPageWrapper">
        <div className="container">
          <div className=" rounded " data-aos="zoom-in">
            <div className="w-full px-4 lg:pt-0 pt-20">
              <div className="w-full max-w-5xl p-2 mt-16 mx-auto darkTransparentBg rounded">
                {/* What is Empire Of Sight? */}
                <div className="pt-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50 hover:text-gray-900 bg-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">
                            What is Empire Of Sight?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            }  min-h-10 min-w-10 max-h-10 max-w-10`}
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-500 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-100">
                            Empire Of Sight is a 2D MMORPG with a strong focus
                            on unique NFTs and its Virtual Item Economy. The
                            gameplay will be rich with content, you will be able
                            to join an in-game guild, PVP in an open-world
                            setting, level up, collect items, trade, and play
                            with others while experiencing the most unique
                            features that incorporate NFTs that Web3 can
                            provide.
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="pt-2">
                  {/* Will Empire Of Sight be Play-to-Earn? */}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50 hover:text-gray-900 bg-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">
                            Will Empire Of Sight be Play-to-Earn?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } min-h-10 min-w-10 max-h-10 max-w-10`}
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-500 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-100">
                            Not in the general sense... It is a game with
                            quests, bosses, as well other forms of gameplay
                            content that will award you with not NFTs, but with
                            virtual currencies/virtual items that can be sold
                            between players allowing gamers a way to RWT as they
                            please.
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="pt-2">
                  {/* Why did our team start creating an MMORPG in 2D? */}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50 hover:text-gray-900 bg-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">
                            Why did our developers start creating an MMORPG in
                            2D?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            }  min-h-10 min-w-10 max-h-10 max-w-10`}
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-500 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-100">
                            We felt that the retro-style gameplay brings that
                            desired nostalgia we all had while playing MMORPGs
                            as kids/teens. The idea is to have a fully
                            functioning MMORPG built off the 2D design that
                            allows you to go on a near-endless solo or group
                            adventure. As kids, most of us played solo and as
                            MMORPGs became popular they allowed players to
                            choose their own way of playing a game so we wanted
                            to focus on what made us all happy during our gaming
                            experiences. We do plan to make a 3D version of the
                            game in a future expansion but we will keep the 2D
                            version alive with updates for everyone who enjoys
                            the gameplay.
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="pt-2">
                  {/* Why did we make an NFT/P2E game instead of a
                  traditional one? */}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50 hover:text-gray-900 bg-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">
                            Why did we make a Blockchain-Based MMORPG?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            }  min-h-10 min-w-10 max-h-10 max-w-10`}
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-500 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-100">
                            Playing games growing up we always felt that even
                            though it was fun and we bonded with a lot of great
                            people online we weren’t getting to own what we
                            earned. I remember thinking as a teenager how great
                            it would have been to be able to sell some of my
                            items or gold to help out around the house with
                            bills or even purchase some things for myself that I
                            wanted. As I got older and stopped playing games in
                            my late teen's early twenties I ended up wishing
                            that some of what I had achieved, earned, or built
                            could have been sold to start my adult life. Now
                            nearing 30 and having a ton of experience under my
                            belt with all the possibilities that NFTs / Web3 can
                            bring I felt it was time to create something truly
                            unique that could not only bring fun to someone's
                            life but bring the feeling that you get to own what
                            you earned grinding a game.
                            <br />
                            We believe developing quality content with passion
                            involved is one of our strongest traits as a team
                            and know that the players are the actual heart of
                            any successful game. Our main objectives are to
                            create a great game that you can enjoy playing and
                            not what most NFT games are these days which is a
                            profit button until the bubble pops. We want to
                            create you a game that doesn’t just rely on tokens
                            but actual NFTs that you will want to own long-term
                            to play the game to its fullest potential. We know
                            that there will be really rare and desired items
                            that you will get to own and use in the game.
                            Creating a game that’s a game will be the only way
                            to ensure a strong and healthy economy built on
                            multiple blockchains so that the items that have a
                            higher chance to hold value. Our intentions aren’t
                            to sell a bunch of NFT heroes on launch, we will
                            only be focusing on offering membership
                            passes/packages just like any real game would do
                            instead of stuffing a bunch of tokens and NFTs down
                            your throats.
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="pt-2">
                  {/* How to join the community and reach out to the
                  team? */}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50 hover:text-gray-900 bg-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">
                            How to join the community and reach out to the team?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            }  min-h-10 min-w-10 max-h-10 max-w-10`}
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-500 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-100">
                            You’ll be able to contact us directly by email,
                            Twitter, or Discord! We’ll hold AMAs so you can
                            communicate with us with live video chats and you
                            can stop in the discord anytime! We also have a chat
                            room on the website where you can stop in and say
                            hi!
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="pt-2">
                  {/* Will Empire Of Sight be Play-to-Earn? */}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-50 hover:text-gray-900 bg-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  items-center justify-center">
                          <span className="text-2xl">
                            The Creators emotional connection to gaming and the
                            blockchains potential for the industry
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } min-h-10 min-w-10 max-h-10 max-w-10`}
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-500 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-100">
                            I’ve been playing games and when I say playing I’m
                            talking about thousands upon thousands of hours of
                            my life’s been “spent” on gaming. I use the word
                            “spent” because time is a resource, you can use time
                            on earning money, self-improvement such as exercise,
                            learning a trade, studying, relaxation, hobbies, or
                            an endless amount of other activities humans decide
                            is worth trading time to participate in.
                            <br />
                            We all have an unknown amount of time on this
                            planet, as human nature insists we are always trying
                            to find ways to improve on existing systems,
                            technology, time management, or anything that has
                            the ability to evolve into a better version of
                            itself, first and foremost ourselves. Therefore we
                            are always attracted to newer, more innovative ideas
                            or creations that simplify while fulfilling that
                            need for progression, whether it be the newest
                            versions of a phone, console, application, computer,
                            car, or any of the other products we use on a daily
                            basis.
                            <br />
                            For me, the longest-running thought has been what if
                            I had the ability to integrate the time spent
                            playing games into a form of reality where once I
                            was done with a game or started playing a new game
                            that the time wasn’t entirely lost to that period of
                            my life. I do admit there were amazing moments
                            playing games that easily outweighed time spent and
                            trading time to experience them was well worth it,
                            however as a young kid calculating the amount of
                            time I was spending playing games to hours worked
                            for minimum wage would often run through my mind
                            even though I was far too young for employment. It
                            primarily stemmed from the point that my family was
                            rather poor and I always felt guilty that I couldn’t
                            assist in a way other than just being grateful while
                            showing understanding of the situation that existed.
                            I remember thinking what if I could sell the
                            experience points I gained in the game, my character
                            itself, the name I had created, the resources,
                            armor, weapons, trinkets, gold, or for that matter
                            anything and everything that existed in that virtual
                            reality I loved being a part of on a daily basis.
                            Then it really hit home when I realized that all of
                            it wasn’t actually “mine” even though “I” called it
                            my own it really was still in the ownership of the
                            company that created the game itself.
                            <br />
                            Many years went by before I realized that there was
                            an industry called “Real World Trading” where in
                            MMORPG or other online gaming genres people traded
                            their in-game assets behind the backs of the gaming
                            companies for “Real Life Profits”. The players would
                            sell their gold, characters, and names they had
                            created, and would also offer services called
                            “boosting” that would help acquire things such as
                            levels for the characters, items that couldn't be
                            traded, ranks for player versus player, but by doing
                            so they risked bans which would normally inflict
                            suffering to either the person purchasing said
                            services or those offering them. At the time I
                            couldn’t understand the game company's stance
                            outside the fact that it was almost like a modern
                            version of cheat codes, they would use their TOS to
                            ban both provider and client saying it was to
                            maintain the integrity of the game for those who
                            didn’t want to participate in said activities.
                            <br />
                            Then it clicked as I witnessed all the companies who
                            were ANTI-RWT beginning to offer what we call
                            nowadays “microtransactions” and “loot boxes”. To my
                            surprise the players who were originally against
                            Real World Trading were even more disgusted by the
                            offering of MTs and LBs because now there weren't
                            bans happening to those who wanted a shortcut in the
                            game, it was encouraged and almost required to use
                            these new features to maintain in a competitive
                            gaming environment. This not only upset the player
                            base but also made it nearly impossible for the
                            everyday player to keep up with those who had the
                            extra financial resources to do so.
                            <br />
                            This mixture of greed and their disconnect with
                            those who played their games has caused some of our
                            favorite games to lose the nostalgic feeling, our
                            desire to grind out content, and the trust we had in
                            these companies to respect the time we spent inside
                            the virtual worlds we loved. These companies have
                            been selling skins, levels, gold, and numerous other
                            assets that are instantly lost to their revenue
                            streams while providing us with a reality of gaming
                            that is far from the potential available to us.
                            <br />
                            After spending years getting involved in the RWT
                            industry and having met some of the most influential
                            providers/companies I’ve realized that it’s
                            impossible to stop such things by banning users as
                            well as not practical to remove ways for people to
                            get ahead of the gaming curve. The only true
                            solution is to create a system that allows a proper
                            stream of “time” exchanges. Some people have
                            full-time jobs, a family, obligations, and hobbies,
                            and when they get on a game they want to be able to
                            do content with their friends who have more free
                            time to grind while others have a ton of free time
                            they would rather choose to spend inside the game
                            grinding out content and items. The solution is to
                            innovate on the current gaming model by stepping
                            back as a company from direct profits through the
                            Micro Transactions and selling of Virtual Assets. We
                            now have in the palms of our hands a simple way of
                            setting up a system that allows players to own and
                            trade their assets. Blockchain technology gives the
                            players a way to own their assets and trade freely
                            from Player to Player without the need for in-game
                            interactions. It also allows for separation within
                            the game’s fundamental functionality, now you can
                            have “virtual” items that are in-game assets only
                            for the game that's being played as well as a way to
                            convert NFTs owned in one game to another game.
                            <br />
                            I won’t claim to be a prophet of the future of
                            gaming, but I will explain how and why what is being
                            described can and will work eventually. Imagine if a
                            company created decent games, facilitated real-world
                            trading, and allowed users to do this without
                            scalping as much of the profits as possible. The
                            goal is to create a sustainable method in which a
                            player who wishes to play for fun can trade his
                            earned experience, gold, and other assets easily
                            with those who wish to purchase said resources.
                            Instead of creating a game where profits are
                            distributed upwards this will allow for those
                            playing the game together to bond, create a strong
                            economy, and have the say on how they play the game
                            without added pressure or stress from the current
                            gaming industry.
                            <br />
                            To best describe what we are designing in short form
                            is a system that allows the average everyday player
                            to either sell portions of their items, gold,
                            experience, or characters to those who wish to
                            purchase said boosts to their gameplay. It gives
                            those who want to grind every day a way to benefit
                            from their gameplay with possible profits off their
                            time and those who want to save time a way to do so
                            while supporting their fellow players. It also gives
                            an opportunity to those who want to play games as a
                            full-time job the chance to do so and those who want
                            to just play for fun without ever interacting with
                            said “trading” to have no animosity as it’s their
                            choice to play the game in their own way while still
                            having the options if so desired. Imagine in one
                            game you have an NFT pet and you’ve become so
                            endeared to the little guy that when you switch to
                            another game you miss it. Well with this system
                            you’ll be able to move around specific NFTs that you
                            love between the games so you can enjoy and use what
                            you’ve become attached to. The items won't always be
                            the exact same in each game, have the same
                            attributes, or even the same animation/model version
                            but the blockchain it allows for endless
                            possibilities. With this concept, you could have an
                            MMORPG where you grind all day and then take the
                            NFTs into a MOBA game where you use the items in a
                            completely different way or the game entirely, as
                            well it creates multiple utilities for the NFTs
                            while connecting multiple player bases throughout
                            all the genres.
                            <br />
                            The goal is to create an open-minded gaming company
                            that produces the best games possible with what
                            resources we have available, currently, we can’t
                            produce AAA games, and a lot of possibilities are
                            limited because it's such a new space with endless
                            amounts of learning curves ahead, but I really hope
                            with what is released people can find fun and
                            entertainment in the ever-evolving Web3 environment.
                            Thanks for reading this TLDR wall of text and I’m
                            really excited to get some games published for those
                            who want to be put first as players.
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faqs;
