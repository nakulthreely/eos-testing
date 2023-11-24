import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

import { Web3Context } from "../contexts/Web3Context";

const AccessPassCard = (props) => {
  const [isShown, setIsShown] = useState(false);

  const { setSelectedAccessPassID, connectMetaMask } = useContext(Web3Context);
  const router = useRouter();

  return (
    <>
      <div className="sm-view-now">
        <div className={props.type}>
          <div className="cardBox">
            <Image
              src={props.image}
              className="object-center object-cover pointer-events-none "
              objectFit="cover"
              alt={props.alt}
              placeholder="blur"
            />
          </div>
          {!props.comingSoon && (
            <div className="bottomSection">
              {!isShown ? (
                <a
                  href="#"
                  className={props.buttonType}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  {props.price}
                </a>
              ) : (
                <a
                  href="#"
                  className={props.buttonType}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={async () => {
                    await connectMetaMask();
                    setSelectedAccessPassID(props.id);
                    router.push("/select-network");
                  }}
                >
                  ACTIVATE
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="lg-view-now">
        <div className={props.type}>
          <div className="cardBox" data-aos="zoom-in">
            <Image
              src={props.image}
              className="object-center object-cover pointer-events-none "
              objectFit="cover"
              alt={props.alt}
              placeholder="blur"
            />
          </div>
          {!props.comingSoon && (
            <div className="bottomSection">
              {!isShown ? (
                <a
                  href="#"
                  className={props.buttonType}
                  data-aos="zoom-in"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  {props.price}
                </a>
              ) : (
                <a
                  href="#"
                  className={props.buttonType}
                  data-aos="zoom-in"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={async () => {
                    await connectMetaMask();
                    setSelectedAccessPassID(props.id);
                    router.push("/select-network");
                  }}
                >
                  ACTIVATE
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccessPassCard;
