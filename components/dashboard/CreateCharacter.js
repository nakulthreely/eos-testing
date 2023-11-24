import Image from "next/image";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { EOSContext } from "../../contexts/EOSContext";
import useCharacter from "../../hooks/useCharacter";
import Axios from "axios";

import { Sort, Cubes, Shop, Cube, Money } from "grommet-icons";

import profCH09 from "../../public/assets/profCH09.png";
import selectYourClass from "../../public/assets/select_your_class.png";
import profile_sp_1 from "../../public/assets/profile_sp_1.png";
import profile_sp_2 from "../../public/assets/profile_sp_2.png";
import profile_sp_3 from "../../public/assets/profile_sp_3.png";
import profile_sp_4 from "../../public/assets/profile_sp_4.png";
import profile_sp_5 from "../../public/assets/profile_sp_5.png";

const CreateCharacter = () => {
  const { setBlur, user, url, setHasCharacter, AOS, setIsHomePage } =
    useContext(EOSContext);
  const [selectedClass, setSelectedClass] = useState(undefined);

  /* Classes:
    0: Lucas the Wanderer
    1: Donovan the Shadow Stepper
    2: Kagutsuchi the Shinto
    3: Princess PingYang the Warrioress
    4: Isabella the Temptress
  */

  useEffect(() => {
    setBlur(false);
    setIsHomePage(false);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  const addCharacter = () => {
    Axios.post(`${url}/addcharacter`, {
      name: user,
      classname: selectedClass,
    }).then((response) => {
      if (response.data.success) setHasCharacter(true);
    });
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="grow">
        <section>
          <div
            className="darkTransparentBg flex max-w-6xl mx-auto p-4  rounded"
            data-aos="fade-down"
          >
            <div className="flex grid lg:grid-cols-5 sm:grid-cols-1 gap-2">
              <div className="transparentBox col-span-5 row-span-1 rounded">
                <Image
                  className="rounded"
                  src={selectYourClass}
                  placeholder="blur"
                  alt="Select your Class"
                />
              </div>

              {/* Lucas the Wanderer */}
              {selectedClass === "Lucas the Wanderer" ? (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded border-solid border-4 border-green-200 flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Lucas the Wanderer")
                        setSelectedClass(undefined);
                      else setSelectedClass("Lucas the Wanderer");
                    }}
                  >
                    <Image
                      className="rounded characterBox flex self-center"
                      height={177.5}
                      width={85}
                      src={profile_sp_1}
                      alt="Lucas the Wanderer"
                      layout="fixed"
                    />
                    <h6 className="cinzelStyle text-center text-gray-50">
                      LUCAS
                    </h6>
                    <h6 className="font-inter text-center text-gray-50">
                      The Wanderer
                    </h6>
                    <br />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Lucas the Wanderer")
                        setSelectedClass(undefined);
                      else setSelectedClass("Lucas the Wanderer");
                    }}
                  >
                    <Image
                      className="rounded characterBox flex self-center"
                      height={177.5}
                      width={85}
                      src={profile_sp_1}
                      alt="Lucas the Wanderer"
                      layout="fixed"
                    />
                    <div>
                      <h6 className="cinzelStyle text-center text-gray-50">
                        LUCAS
                      </h6>
                      <h6 className="font-inter text-center text-gray-50">
                        The Wanderer
                      </h6>
                    </div>
                  </div>
                </>
              )}

              {/* Donovan the Shadow Stepper */}
              {selectedClass === "Donovan the Shadow Stepper" ? (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded border-solid border-4 border-green-200 flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Donovan the Shadow Stepper")
                        setSelectedClass(undefined);
                      else setSelectedClass("Donovan the Shadow Stepper");
                    }}
                  >
                    <Image
                      className="rounded characterBox flex self-center"
                      height={185}
                      width={87.5}
                      src={profile_sp_2}
                      alt="Donovan the Shadow Stepper"
                      layout="fixed"
                    />

                    <h6 className="cinzelStyle text-center text-gray-50">
                      Donovan
                    </h6>
                    <h6 className="font-inter text-center text-gray-50">
                      The Shadow Stepper
                    </h6>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Donovan the Shadow Stepper")
                        setSelectedClass(undefined);
                      else setSelectedClass("Donovan the Shadow Stepper");
                    }}
                  >
                    <Image
                      className="rounded characterBox flex self-center"
                      height={185}
                      width={87.5}
                      src={profile_sp_2}
                      alt="Donovan the Shadow Stepper"
                      layout="fixed"
                    />
                    <div>
                      <h6 className="cinzelStyle text-center text-gray-50">
                        DONOVAN
                      </h6>
                      <h6 className="font-inter text-center text-gray-50">
                        The Shadow Stepper
                      </h6>
                    </div>
                  </div>
                </>
              )}

              {/* Kagutsuchi the Shinto */}
              {selectedClass === "Kagutsuchi the Shinto" ? (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded border-solid border-4 border-green-200 flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Kagutsuchi the Shinto")
                        setSelectedClass(undefined);
                      else setSelectedClass("Kagutsuchi the Shinto");
                    }}
                  >
                    <Image
                      className="rounded characterBox "
                      height={185}
                      width={87.5}
                      src={profile_sp_3}
                      alt="Kagutsuchi the Shinto"
                      layout="fixed"
                    />
                    <h6 className="cinzelStyle text-center text-gray-50">
                      KAGU-TSUCHI
                    </h6>
                    <h6 className="font-inter text-center text-gray-50">
                      The Shinto
                    </h6>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Kagutsuchi the Shinto")
                        setSelectedClass(undefined);
                      else setSelectedClass("Kagutsuchi the Shinto");
                    }}
                  >
                    <div className="flex align-center">
                      <Image
                        className="rounded characterBox "
                        height={185}
                        width={87.5}
                        src={profile_sp_3}
                        alt="Kagutsuchi the Shinto"
                        layout="fixed"
                      />
                    </div>
                    <div className=" ">
                      <h6 className="cinzelStyle text-center text-gray-50 ">
                        KAGU-TSUCHI
                      </h6>
                      <h6 className="font-inter text-center text-gray-50 ">
                        The Shinto
                      </h6>
                    </div>
                  </div>
                </>
              )}

              {/* Princess PingYang the Warrioress */}
              {selectedClass === "Princess PingYang the Warrioress" ? (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded border-solid border-4 border-green-200  flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Princess PingYang the Warrioress")
                        setSelectedClass(undefined);
                      else setSelectedClass("Princess PingYang the Warrioress");
                    }}
                  >
                    <Image
                      className="rounded characterBox"
                      height={185}
                      width={87.5}
                      src={profile_sp_4}
                      alt="Princess PingYang the Warrioress"
                      layout="fixed"
                    />
                    <h6 className="cinzelStyle text-center text-gray-50">
                      PINGYANG
                    </h6>
                    <h6 className="font-inter text-center text-gray-50">
                      The Warrioress
                    </h6>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded flex grid grid-rows-2 place-items-center gap-0"
                    onClick={() => {
                      if (selectedClass === "Princess PingYang the Warrioress")
                        setSelectedClass(undefined);
                      else setSelectedClass("Princess PingYang the Warrioress");
                    }}
                  >
                    <Image
                      className="rounded characterBox"
                      height={185}
                      width={87.5}
                      src={profile_sp_4}
                      alt="Princess PingYang the Warrioress"
                      layout="fixed"
                    />

                    <h6 className="cinzelStyle text-center text-gray-50">
                      PINGYANG
                    </h6>
                    <div>
                      <h6 className="font-inter text-center text-gray-50">
                        The Warrioress
                      </h6>
                    </div>
                  </div>
                </>
              )}

              {/* Isabella the Temptress */}
              {selectedClass === "Isabella the Temptress" ? (
                <>
                  <div
                    className="characterBox transparentBox p-2 roundedborder-solid border-4 border-green-200 flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Isabella the Temptress")
                        setSelectedClass(undefined);
                      else setSelectedClass("Isabella the Temptress");
                    }}
                  >
                    <Image
                      className="rounded characterBox"
                      height={185}
                      width={87.5}
                      src={profile_sp_5}
                      alt="Isabella the Temptress"
                      layout="fixed"
                    />
                    <h6 className="cinzelStyle text-center text-gray-50">
                      ISABELLA
                    </h6>
                    <h6 className="font-inter text-center text-gray-50">
                      Isabella the Temptress
                    </h6>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="characterBox transparentBox p-2 rounded flex grid grid-rows-2 place-items-center content-start gap-0"
                    onClick={() => {
                      if (selectedClass === "Isabella the Temptress")
                        setSelectedClass(undefined);
                      else setSelectedClass("Isabella the Temptress");
                    }}
                  >
                    <Image
                      className="rounded characterBox"
                      height={185}
                      width={87.5}
                      src={profile_sp_5}
                      alt="Isabella the Temptress"
                      layout="fixed"
                    />
                    <div className="self-start">
                      <h6 className="cinzelStyle text-center text-gray-50">
                        ISABELLA
                      </h6>
                      <h6 className="font-inter text-center text-gray-50">
                        Isabella the Temptress
                      </h6>
                    </div>
                  </div>
                </>
              )}

              {/* BUTTON */}
              <div className="col-span-5 rounded buttonScale justify-center">
                <button
                  className="w-full bg-gray-900  text-white text-2xl font-bold py-2  rounded h-14 flex flex-col justify-center"
                  onClick={(e) => {
                    if (selectedClass) addCharacter();
                  }}
                >
                  <div className="cinzelStyle hover:text-gold-100 self-center">
                    LET'S GO!
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateCharacter;
