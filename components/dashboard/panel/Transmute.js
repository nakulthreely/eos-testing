import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import cardPrototype from "../../../public/assets/cardPrototype.png";
import Items from "./transmute/Items";

const Transmute = (props) => {
  const [state, setState] = useState("FLASK");

  return (
    <>
      <div className="transparentBox p-2 col-span-9 rounded inline-flex justify-center w-full flex-col">
        <h2 className="cinzelStyle text-3xl text-gray-50 self-center">
          MAYNE TRANSMUTE
        </h2>
        <p className="font-inter text-lg text-gray-50 self-center px-6 text-center">
          Turn in-game items into NFTs.
        </p>
      </div>
      {/* Listing items here */}
      <div className="transparentBox p-4 row-span-2 col-span-9 rounded inline-flex justify-center">
        <Items />
      </div>
    </>
  );
};
export default Transmute;
