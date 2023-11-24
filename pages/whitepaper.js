import Image from "next/image";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

const Whitepaper = () => {
  const { setBlur } = useContext(EOSContext);

  useEffect(() => {
    setBlur(true);
  }, []);

  useEffect(() => {
    Router.push("/preamble");
  }, []);

  return <></>;
};

export default Whitepaper;
