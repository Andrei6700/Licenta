import React from "react";
import { useRef } from "react";
import {  useTransform, useScroll } from "framer-motion";

const Content4 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);
  return <div className="" ref={ref} style={{ y }}></div>;
};

export default Content4;