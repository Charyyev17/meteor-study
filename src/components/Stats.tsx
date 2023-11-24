"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="w-full md:h-screen block lg:flex items-center justify-center gap-20 pt-20 lg:pt-0 lg:px-10 2xl:px-40 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden 2xl:flex absolute left-0 top-10 brightness-[.15] text-[#0051dee1] font-extrabold text-[15rem]"
      >
        Stats
      </motion.h1>
      <div className="px-4 lg:px-0 lg:w-2/5 z-10 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-extrabold text-4xl md:text-6xl lg:text-8xl"
        >
          Stats
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="xl:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolores commodi in voluptatibus, asperiores, libero est dolor tempore
          excepturi, facilis at quia quis optio eaque.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="xl:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolores commodi in voluptatibus, asperiores.
        </motion.h3>
      </div>
      <div className="z-10 px-4 lg:px-0 mt-8 lg:mt-0 lg:w-3/5 md:flex gap-6">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 md:w-1/3 h-80 border border-[#0051de47] shadow-xl shadow-[#0052DE] rounded-md p-6"
        >
          <FontAwesomeIcon icon={faUser} className="w-10 h-10" />
          <h1 className="font-semibold text-2xl">Members</h1>
          <span className="font-extrabold text-6xl text-[#0052DE] mt-4">
            10K
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-3 my-5 md:my-0 md:w-1/3 h-80 border border-[#0051de47] shadow-xl shadow-[#0052DE] rounded-md p-6"
        >
          <FontAwesomeIcon icon={faEye} className="w-10 h-10" />
          <h1 className="font-semibold text-2xl">Views</h1>
          <span className="font-extrabold text-6xl text-[#0052DE] mt-4">
            375K
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-3 md:w-1/3 h-80 border border-[#0051de47] shadow-xl shadow-[#0052DE] rounded-md p-6"
        >
          <FontAwesomeIcon icon={faBook} className="w-10 h-10" />
          <h1 className="font-semibold text-2xl">Courses</h1>
          <span className="font-extrabold text-6xl text-[#0052DE] mt-4">
            56
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
