import loading from "../public/assets/loreImageSectionFive.gif";
import waiting from "../public/assets/waitingforsignature.png";
import Image from "next/image";

const WaitingForSign = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden rounded">
      <div
        className="flex flex-col textSection items-center rounded"
        data-aos="zoom-in"
      >
        <Image
          className="object-center pointer-events-none"
          width={343}
          height={97.5}
          src={waiting}
        />
        <Image
          className="object-center pointer-events-none"
          width={300}
          height={300}
          src={loading}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default WaitingForSign;
