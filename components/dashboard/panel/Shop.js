import { useContext, useEffect, useState } from "react";
import Items from "./shop/Items";

const Market = () => {
  const [state, setState] = useState("FLASK");

  return (
    <>
      <div className="transparentBox p-2 col-span-9 rounded inline-flex justify-center w-full flex-col">
        <h2 className="cinzelStyle text-3xl text-gray-50 self-center">
          NFT SHOP
        </h2>
        <p className="font-inter text-lg text-gray-50 self-center px-6 text-center">
          Experience the magic! These unique NFTs can increase your gaming
          experience.
        </p>
      </div>
      {/* Listing items here */}
      <div className="transparentBox p-4 row-span-2 col-span-9 rounded inline-flex justify-center w-full">
        <Items />
      </div>
      {/*
        <div className="transparentBox p-4 col-span-2 row-span-2 rounded inline-flex justify-center w-full">
          <div className="flex flex-col gap-2 w-full">
            {state === "FLASK" ? (
              <button
                className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("STATS");
                }}
              >
                <span className="font-inter">Flask</span>
              </button>
            ) : (
              <button
                className="bg-gray-50 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("FLASK");
                }}
              >
                <span className="font-inter">Flask</span>
              </button>
            )}
            {state === "NECKLACE" ? (
              <button
                className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("NECKLACE");
                }}
              >
                <span className="font-inter">Necklace</span>
              </button>
            ) : (
              <button
                className="bg-gray-50 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("NECKLACE");
                }}
              >
                <span className="font-inter">Necklace</span>
              </button>
            )}
            {state === "RING" ? (
              <button
                className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("RING");
                }}
              >
                <span className="font-inter">Ring</span>
              </button>
            ) : (
              <button
                className="bg-gray-50 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("RING");
                }}
              >
                <span className="font-inter">Ring</span>
              </button>
            )}
            {state === "ARMOR" ? (
              <button
                className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("ARMOR");
                }}
              >
                <span className="font-inter">Armor</span>
              </button>
            ) : (
              <button
                className="bg-gray-50 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("ARMOR");
                }}
              >
                <span className="font-inter">Armor</span>
              </button>
            )}
            {state === "WEAPON" ? (
              <button
                className="bg-gray-300 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("WEAPON");
                }}
              >
                <span className="font-inter">Weapon</span>
              </button>
            ) : (
              <button
                className="bg-gray-50 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded inline-flex justify-between w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setState("WEAPON");
                }}
              >
                <span className="font-inter">Weapon</span>
              </button>
            )}
          </div>
        </div>
              */}
    </>
  );
};

export default Market;
