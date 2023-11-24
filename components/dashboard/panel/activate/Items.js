import { useEffect, useState, useContext } from "react";
import Item from "./items/Item";
import EternalHealthPotion from "../../../../public/assets/items/eternal-health-potion.png";

const Items = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-4 gap-2 w-full h-1/2 scroll-smooth px-3">
        <Item
          image={EternalHealthPotion}
          name="Eternal Health Potion"
          price="$9.99"
          tooltip="Restores some Health. No limit on its use."
        />
      </div>
    </>
  );
};

export default Items;
