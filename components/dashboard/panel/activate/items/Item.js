import Image from "next/image";
import { useEffect, useState, useContext } from "react";

const Item = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-rose-50 to-teal-50 col-span-1 p-2 rounded">
        <div className="flex flex-col w-full justify-end">
          <div className="relative flex flex-col items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex rounded">
              <span className="relative z-50 p-2 text-md leading-none text-gray-50 font-inter text-center bg-gray-900 shadow-lg rounded">
                {props.tooltip}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
          </div>
          <Image
            src={props.image}
            className="hover:scale-110 transition delay-150 duration-300 ease-in-out cursor-default"
          />
          <p className="font-bold font-inter self-center text-md text-center cursor-default">
            {props.name}
          </p>
          <div className="self-center w-full">
            {!isShown ? (
              <div className="flex justify-between items-center w-full ">
                <button
                  type="button"
                  className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 w-full font-inter font-bold text-xl rounded "
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  {props.price}
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="shadow-2xl shadow-indigo-500/40 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-inter font-bold text-xl p-2 w-full rounded"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  Activate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
