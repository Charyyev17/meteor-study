"use client";

import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/home.jpg"
            alt=""
            fill
            className="z-0 h-screen object-cover md:object-contain brightness-[.8]"
          />
        </motion.div>
        <div className="absolute top-52 md:top-44 md:w-[800px] z-20 flex flex-col justify-center items-center gap-7 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-7xl font-extrabold text-center"
          >
            Lorem, ipsum{" "}
            <span className="border-b-4 border-[#0052DE]">adipisicing</span>{" "}
            elit
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="px-4 md:px-28 text-center sm:text-lg md:text-xl"
          >
            Aspernatur tenetur vel aliquid dolor laboriosam autem enim. Fuga,
            dolorem maxime quo tempora placeat perspiciatis quam.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/courses"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-purple-700 transition duration-300 ease-out rounded-md shadow-xl group hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-700 via-indigo-700 to-purple-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-700 rounded-full opacity-40 group-hover:rotate-90 ease"></span>
              <span className="relative text-white text-2xl font-semibold">
                Explore
              </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden absolute bottom-0 mb-8 w-auto z-20 text-white md:flex items-center justify-center gap-2 text-sm"
        >
          Scroll Down
          <FontAwesomeIcon
            icon={faArrowDown}
            color="#0052DE"
            className="animate-bounce w-4 h-4"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
