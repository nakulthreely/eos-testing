import Image from "next/image";
import Link from "next/link";

import discord from "../public/assets/discord.png";
import facebook from "../public/assets/facebook.png";
import github from "../public/assets/github.png";
import instagram from "../public/assets/instagram.png";
import telegram from "../public/assets/telegram.png";
import tiktok from "../public/assets/tiktok.png";
import twitter from "../public/assets/twitter.png";
import youtube from "../public/assets/youtube.png";

const SocialSlider = () => {
  return (
    <>
      <div className="socialWrapper">
        <div className="row">
          <div className="icons">
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="https://discord.gg/kShT4GCTpQ">
                  <Image
                    width={50}
                    height={50}
                    src={discord}
                    objectPosition="center top"
                    alt="Empire Of Sight - Discord"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
            {/*
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="/">
                  <Image
                    width={50}
                    height={50}
                    src={facebook}
                    objectPosition="center top"
                    alt="Empire Of Sight - Facebook"
                    placeholder="blur"
                  />
                </a>
              </div>
  </div>*/}
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="https://github.com/Empire-Of-Sight">
                  <Image
                    width={50}
                    height={50}
                    src={github}
                    objectPosition="center top"
                    alt="Empire Of Sight - Github"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>{" "}
            {/*
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="/">
                  <Image
                    width={50}
                    height={50}
                    src={instagram}
                    objectPosition="center top"
                    alt="Empire Of Sight - Instagram"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="/">
                  <Image
                    width={50}
                    height={50}
                    src={telegram}
                    objectPosition="center top"
                    alt="Empire Of Sight - Telegram"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
            
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="/">
                  <Image
                    width={50}
                    height={50}
                    src={tiktok}
                    objectPosition="center top"
                    alt="Empire Of Sight - TikTok"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>*/}
            <div className="col-sm-1">
              <div className="imgIcon">
                <a target="_blank" href="https://twitter.com/EmpireOfSight">
                  <Image
                    width={50}
                    height={50}
                    src={twitter}
                    objectPosition="center top"
                    alt="Empire Of Sight - Twitter"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-1">
              <div className="imgIcon">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCkybc0vZUzhouRS8QcV2UuQ"
                >
                  <Image
                    width={50}
                    height={50}
                    src={youtube}
                    objectPosition="center top"
                    alt="Empire Of Sight - YouTube"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SocialSlider;
