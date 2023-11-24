import { useEffect, useState, useContext } from "react";
import Axios from "axios";

import Item from "./items/Item";
import { EOSContext } from "../../../../contexts/EOSContext";
import metadata from "../../../../all.json";
import { Web3Context } from "../../../../contexts/Web3Context";

const Items = () => {
  const [isShown, setIsShown] = useState(false);
  const { web3ServerUrl, user, reset, url } = useContext(EOSContext);
  const {
    web3,
    priceETH_MT,
    setPriceETH_MT,
    priceBNB_MT,
    setPriceBNB_MT,
    priceAVAX_MT,
    setPriceAVAX_MT,
    priceMATIC_MT,
    setPriceMATIC_MT,
    waitingForConfirmation,
    setWaitingForConfirmation,

    accounts,
    itemsReset,
    setItemsReset,
    itemSlot,
    setItemSlot,
  } = useContext(Web3Context);

  const [playersItems, setPlayersItems] = useState([]);
  const [itemSlots, setItemSlots] = useState([]); // same index with playersItems, tells which slot is associated to the item
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    if (itemSlot !== undefined) {
      const interval = setInterval(async () => {
        //console.log(itemSlot);
        let slots = [];
        slots[0] = itemSlot;
        await Axios.post(
          `${web3ServerUrl}/character-inventory/is-valid-to-transmute`,
          {
            address: accounts[0],
            slots: slots,
          }
        ).then(async (response) => {
          //console.log(response.data);
          if (response.data === false) {
            setItemsReset(!itemsReset);
            //setWaitingForConfirmation(false);
            setItemSlot(undefined);
            clearInterval(interval);
          }
        });
      }, 5000);
    }
  }, [itemSlot]);

  useEffect(async () => {
    await Axios.post(`${web3ServerUrl}/character-inventory`, {
      username: user,
    }).then(async (response) => {
      //console.log(response.data[0].name);
      let result = [];
      let resultSlots = [];
      //console.log("query inventory");
      //console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        for (let j = 0; j < metadata.items.length; j++) {
          if (
            response.data[i].name.substring(
              0,
              response.data[i].name.length - 4
            ) === metadata.items[j].name
          ) {
            result.push(metadata.items[j]);
            resultSlots.push(response.data[i].slot);
          }
        }
      }

      setPlayersItems(result);
      setItemSlots(resultSlots);
      setIsLoaded(true);
      setWaitingForConfirmation(false);
    });
  }, [user, itemsReset]);

  /*  {
    temporary solution 
  }
  return (
    <h4 className="text-gray-50 font-inter self-center">
      Transmuting isn't available yet.
    </h4>
  );
*/

  return (
    <>
      {playersItems.length > 0 ? (
        <>
          {waitingForConfirmation ? (
            <>
              <h4 className="text-gray-50 font-inter self-center">
                Mayne Transmuting...
              </h4>
            </>
          ) : (
            <div className="grid grid-flow-row-dense grid-cols-4 gap-2 w-full h-1/2 scroll-smooth px-3">
              {playersItems.map((item, key) => (
                <Item
                  name={item.name}
                  price={9.99}
                  tooltip={item.description}
                  id={item.id}
                  slot={itemSlots[key]}
                />
              ))}
            </div>
          )}
          <></>
        </>
      ) : (
        <>
          {!isLoaded ? (
            <h4 className="text-gray-50 font-inter self-center">Loading...</h4>
          ) : (
            <h4 className="text-gray-50 font-inter self-center">
              You don't have any transmutable in-game items yet.
            </h4>
          )}
        </>
      )}
    </>
  );
};

export default Items;
