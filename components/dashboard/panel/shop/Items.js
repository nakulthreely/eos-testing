import { useEffect, useState, useContext } from "react";
import Item from "./items/Item";
import metadata from "../../../../shopItems.json";

const Items = () => {
  /* return (
    <h4 className="text-gray-50 font-inter self-center">
      The NFT shop isn't available yet.
    </h4>
  );*/

  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-4 gap-2 w-full h-1/2 scroll-smooth px-3">
        {metadata.items.map((item, i) => (
          <Item
            name={item.name}
            price={item.price}
            tooltip={item.description}
            id={item.id}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default Items;
