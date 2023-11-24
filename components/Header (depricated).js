import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { EOSContext } from "../contexts/EOSContext";

import logo from "../public/assets/logo.png";

const Header = () => {
  const { loginStatus } = useContext(EOSContext);

  return (
    <div className="headerWrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="d-flex justify-content-start">
              {/* <Link href="/accesspass">Access Pass</Link> */}
              <Link href="/lore">Lore</Link>
              <Link href="/create-account" target="_blank">
                Play For Free
              </Link>
              {!loginStatus ? (
                <>
                  <Link href="/login">Login</Link>
                </>
              ) : (
                <>
                  <Link href="/dashboard">Dashboard</Link>
                </>
              )}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center">
              <Link href="/" passHref>
                <div className="logo">
                  <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                    src={logo}
                    alt="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, BSC Token profitability, and its Virtual Item Economy."
                    placeholder="blur"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end align-self-center align-items-center">
              <Link href="/preamble">Preamble</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/faqs">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
