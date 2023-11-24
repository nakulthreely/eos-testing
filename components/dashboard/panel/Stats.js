import Image from "next/image";
import cardPrototype from "../../../public/assets/cardPrototype.png";

const Stats = (props) => {
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

  return (
    <>
      {/* temporary solution */}
      {/*<div className="transparentBox p-4 col-span-6">*/}
      <div className="transparentBox p-4 col-span-9">
        <h4 className="text-gray-50 font-inter">
          Gold: {nFormatter(props.gold, 2)}
        </h4>
        <h4 className="text-gray-50 font-inter">XP: {props.experience}</h4>
      </div>

      {/*
      <div className="transparentBox col-span-3 lg:row-span-2 sm:row-span-1 p-4">
        <Image
          className="rounded"
          src={cardPrototype}
          placeholder="blur"
          alt="Access Pass"
        />
      </div>
       */}
      {/*<div className="transparentBox col-span-6 p-4">*/}
      <div className="transparentBox p-4 col-span-9">
        <h4 className="text-gray-50 font-inter">Health: {props.health}</h4>
        <h4 className="text-gray-50 font-inter">Mana: {props.mana}</h4>
      </div>
    </>
  );
};

export default Stats;
