import Header from "./Header";
import HeaderResponsive from "./HeaderResponsive";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { createMedia } from "@artsy/fresnel";
import Image from "next/image";
import loginImg from "../public/assets/letsgetyoursightback.png";
import loginBg from "../public/assets/sectionTwoBg.jpg";
import loginBgBlurred from "../public/assets/sectionTwoBgBlurred.jpg";

import { EOSContext } from "../contexts/EOSContext";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

const Layout = ({ children }) => {
  const { isHomePage, blur } = useContext(EOSContext);
  /*
  const content = (
    <>
      <div className="responsiveDesktop">
        <Header />
      </div>
      <div className="responsiveMobile">
        <HeaderResponsive />
      </div>
    </>
  );
*/

  const content = (
    <>
      <Header />
    </>
  );
  return (
    <>
      <MediaContextProvider>
        {content}
        {children}
      </MediaContextProvider>
    </>
  );
};

export default Layout;
