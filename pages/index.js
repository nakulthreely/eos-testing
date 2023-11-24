import Head from "next/head";
import Image from "next/image";

import { useContext, useEffect, useState, useRef } from "react";
import { EOSContext } from "../contexts/EOSContext";

import styles from "../styles/Home.module.css";
import Hero from "../components/homePage/Hero";
import SectionOne from "../components/homePage/SectionOne";
import SectionTwo from "../components/homePage/SectionTwo";
import Roadmap from "../components/homePage/Roadmap";
import Footer from "../components/Footer";

import initializeSlider from "../components/addons/revolutionSlider";

export default function Home() {
  const { setIsHomePage } = useContext(EOSContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgElementRef = useRef(null);

  useEffect(() => {
    setIsHomePage(true);
  }, []);

  useEffect(() => {
    initializeSlider();
  }, []);

  useEffect(() => {
    function adjustHeaderOpacity() {
      const header = document.querySelector(".nk-header");

      if (header) {
        // Assuming 768px as a breakpoint for mobile view
        if (window.innerWidth <= 768) {
          header.classList.remove("nk-header-opaque");
        } else {
          header.classList.add("nk-header-opaque");
        }
      }
    }

    adjustHeaderOpacity(); // Adjust on page load
    window.addEventListener("resize", adjustHeaderOpacity); // Adjust when the window is resized

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener("resize", adjustHeaderOpacity);
    };
  }, []);

  useEffect(() => {
    const images = [
      "/assets/images/image-1.jpg",
      "/assets/images/image-2.jpg",
      "/assets/images/image-3.jpg",
      "/assets/images/image-4.jpg",
    ];

    function changeImage() {
      if (imgElementRef.current) {
        imgElementRef.current.style.opacity = "0";

        const timeoutId = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

          if (imgElementRef.current) {
            imgElementRef.current.src = images[currentIndex];
            imgElementRef.current.style.animation = "none";
            imgElementRef.current.offsetWidth; // Force a reflow
            imgElementRef.current.style.animation = "";
            imgElementRef.current.style.opacity = "1";
          }
        }, 750); // Match the transition time in the CSS

        return () => clearTimeout(timeoutId);
      }
    }

    const intervalId = setInterval(changeImage, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    const images = [
      "/assets/images/image-1.jpg",
      "/assets/images/image-2.jpg",
      "/assets/images/image-3.jpg",
      "/assets/images/image-4.jpg",
    ];

    if (imgElementRef.current) {
      imgElementRef.current.src = images[currentIndex];
      imgElementRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home | Empire of Sight</title>
         
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
      <iframe
        src="/index-main.html"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    </>
  );
}
