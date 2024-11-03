import React from "react";
import { motion } from "framer-motion";
export default function SectionWrapper(props) {
  const { children, header, title, id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-red-950 py-10 flex flex-col gap-2 justify-center items-center p-4">
        <motion.p
          whileInView={{ x: [-400, 0] }}
          transition={{ duration: 1 }}
          className="uppercase font-medium"
        >
          {header}
        </motion.p>
        <motion.h2
          whileInView={{ x: [400, 0] }}
          transition={{ duration: 1 }}
          className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title[0]} <span className="uppercase text-red-400">{title[1]}</span>{" "}
          {title[2]}
        </motion.h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4 ">
        {children}
      </div>
    </section>
  );
}
