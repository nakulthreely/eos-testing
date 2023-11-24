import Image from "next/image";
import roadmapBg from "../../public/assets/roadmapBg.jpg";
import { EOSContext } from "../../contexts/EOSContext";
import { useEffect, useState, useContext } from "react";

const Roadmap = () => {
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
    <div className="roadmapWrapper">
      <div className="bgWrap">
        <div className="sm-view-now "></div>
        <div className="lg-view-now no-gutters mx-0">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="right top"
            src={roadmapBg}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="timeline">
        <ul className="mainTimeUl">
          <li className="mainTimeLi" data-aos="fade-down">
            <div className="content">
              <h6 className="headingMain timeLineHead">
                <span>What’s an NFT?</span>
              </h6>
              <p className="font-inter text-white p-4 text-xl">
                An NFT is a cryptographic record of ownership for a unique item
                that is encoded into a blockchain. This allows you to own and
                sell your weapons, skins, armor, and items as you please.
              </p>
              <br />
            </div>
          </li>

          <li className="mainTimeLi" data-aos="fade-down" data-aos-delay="300">
            <div className="content">
              <h6 className="headingMain timeLineHead">
                <span>What’s a blockchain?</span>
              </h6>
              <p className="font-inter text-white p-4 text-xl">
                Blockchain is a shared, immutable ledger that facilitates the
                process of recording transactions and tracking assets. Which is
                perfect for selling your assets without worry of getting a
                chargeback or refund.
              </p>
              <br />
            </div>
          </li>

          <li className="mainTimeLi" data-aos="fade-down">
            <div className="content">
              <h6 className="headingMain timeLineHead">
                <span>What’s a wallet?</span>
              </h6>
              <p className="font-inter text-white p-4 text-xl">
                A blockchain wallet is a cryptocurrency wallet that allows users
                to manage different kinds of cryptocurrencies—for example,
                Bitcoin or Ethereum. A blockchain wallet helps someone exchange
                funds easily. Transactions are secure, as they are
                cryptographically signed.
              </p>
              <br />
            </div>
          </li>

          <li className="mainTimeLi" data-aos="fade-down" data-aos-delay="300">
            <div className="content">
              <h6 className="headingMain timeLineHead">
                <span>Safety</span>
              </h6>
              <p className="font-inter text-white p-4 text-xl">
                When it comes to a Crypto Wallet the best safety is to never
                share your SEED or AKA the “Key to your wallet” with anyone and
                don’t sign transactions with websites you don’t know well.
                Please NEVER give someone access to your wallet… No one needs
                that access but you!
              </p>
              <br />
              <br />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
