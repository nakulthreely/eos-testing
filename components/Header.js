import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { EOSContext } from "../contexts/EOSContext";
import Script from "next/script";
import logo from "../public/assets/logo.png";
import styles from "../public/assets/css/Header.module.css";
import logoSmall from "../public/assets/images/logo-small.png";

const Header = () => {
  const { loginStatus, user, userAuthenticated } = useContext(EOSContext);
  const [text, setText] = useState("Log In");

  useEffect(() => {
    console.log(user);
    console.log(loginStatus);
    console.log(userAuthenticated);
    if (userAuthenticated) setText(user);
  }, []);

  return (
    <>
      <Head>
        {/* GSAP */}
        <Script src="/assets/vendor/gsap/dist/gsap.min.js"></Script>
        <Script src="/assets/vendor/gsap/dist/ScrollToPlugin.min.js"></Script>
        {/* GODLIKE */}
        <Script src="/assets/js/godlike.min.js"></Script>
        <Script src="/assets/js/godlike-init.js"></Script>
        <header className={`nk-header nk-header-opaque ${styles.navText}`}>
          <nav className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-transparent">
            <div className="container">
              <div className="nk-nav-table">
                <a href="/" className="nk-nav-logo">
                  <img
                    src={"/assets/images/logo.svg"}
                    className="desktop-logo"
                    alt=""
                    style={{ width: "100px", height: "auto" }}
                  />
                  <img
                    src="/assets/images/logo-icon.svg"
                    className="mobile-logo"
                    alt=""
                    width="40"
                  />
                </a>
                <ul
                  className="nk-nav nk-nav-right d-none d-lg-block ${styles.navText}"
                  data-nav-mobile="#nk-nav-mobile"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="https://play.empireofsight.com/">Play Now</a>
                  </li>
                  <li>
                    <a href="/lore">Lore</a>
                  </li>
                  <li>
                    <a href="/preamble">Preamble</a>
                  </li>
                  <li>
                    <a href="/faqs">Faqs</a>
                  </li>
                  <li>
                    <a href="/login">Log In</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div
          id="nk-nav-mobile"
          className="nk-navbar nk-navbar-side nk-navbar-left-side nk-navbar-overlay-content d-lg-none"
        >
          <div className="nano">
            <div className="nano-content">
              <a href="/" className="nk-nav-logo">
                <img src="/assets/images/logo.svg" alt="" width="130" />
              </a>
              <div className="nk-navbar-mobile-content">
                <ul className="nk-nav"></ul>
              </div>
            </div>
          </div>
        </div>
      </Head>
    </>
  );
};

export default Header;
