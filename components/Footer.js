import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../public/assets/logo.png";
import discord from "../public/assets/discordfooter.png";
import facebook from "../public/assets/facebookfooter.png";
import github from "../public/assets/githubfooter.png";
import instagram from "../public/assets/instagramfooter.png";
import telegram from "../public/assets/telegramfooter.png";
import tiktok from "../public/assets/tiktokfooter.png";
import twitter from "../public/assets/twitterfooter.png";
import youtube from "../public/assets/youtubefooter.png";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer class="nk-footer">
        <img
          class="nk-footer-top-corner"
          src="assets/images/footer-corner.png"
          alt=""
        />
        <div class="container">
          <div class="nk-gap-2"></div>
          <div class="nk-gap"></div>
          <p>
            &copy; 2023 Empire of Sight. Developed in association with Unveiled
            Tech. All Rights Reserved.
          </p>
          <div class="nk-footer-links">
            <a href="/terms-of-use" class="link-effect">
              Terms of Service
            </a>{" "}
            <span>|</span>
            <a href="/privacy-policy" class="link-effect">
              Privacy Policy
            </a>
          </div>
          <div class="nk-gap-4"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
