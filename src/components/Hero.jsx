import React from "react";
import { motion, transform } from "framer-motion";
import Button from "./Button";
function Hero() {
  return (
    <div className="hero w-full">
      <div className=" min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ y: -400, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              delay: 0.5,
            }}
          >
            IT'S TIME TO GET
          </motion.p>
          <motion.h1
            initial={{ y: -400, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 1,
            }}
            className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Swole<span className="text-red-400">normous</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ y: -400, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            delay: 1.5,
          }}
          className="text-sm md:text-base font-light"
        >
          I hereby acknowledgement that I may become{" "}
          <span className="text-red-400 font-medium">
            unbelievably swolenormous
          </span>{" "}
          and accept all risks of becoming the local{" "}
          <span className="text-red-400 font-medium">mass montrosity</span>,
          afflicted with severe body dismorphia, unable to fit through doors.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            type: "spring",
            delay: 2,
          }}
        >
          <Button
            func={() => {
              window.location.href = "#generate";
            }}
            text={"Accept & Begin"}
          ></Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
