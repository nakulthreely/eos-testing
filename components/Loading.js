import loading from "../public/assets/loreImageSectionFive.gif";
import loadingText from "../public/assets/loading.png";
import Image from "next/image";
import { useContext } from "react";
import { EOSContext } from "../contexts/EOSContext";

const Loading = () => {
  const { isLoading } = useContext(EOSContext);

  return (
    <>
      <div className="container">
        <div className="loginWrapper">
          <div className="flex flex-col min-h-screen overflow-hidden rounded">
            <div
              className="headingWrapper textSection rounded"
              data-aos="zoom-in"
            >
              <Image
                className="object-center  pointer-events-none"
                src={loadingText}
              />
              <Image
                className="object-center  pointer-events-none"
                width={300}
                height={300}
                src={loading}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
