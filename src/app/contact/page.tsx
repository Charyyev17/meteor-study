"use client";

import Navbar from "@/components/Navbar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex flex-col md:flex-row md:items-center justify-center pt-72 md:pt-0 px-4 md:p-8 py-14 xl:px-40">
        <div className="md:w-1/2 h-full flex flex-col md:justify-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <h1 className="font-extrabold text-4xl">Contact</h1>
            <div className="w-10 h-1 bg-[#0052DE] rounded-md"></div>
            <h3 className="text-lg hover:text-gray-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">
              example@gmail.com
            </h3>
            <h3 className="text-lg hover:text-gray-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">
              +123 456 789
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-2"
          >
            <h1 className="font-extrabold text-4xl">Follow</h1>
            <div className="w-10 h-1 bg-[#0052DE] rounded-md"></div>
            <Link
              className="text-lg hover:text-gray-500 hover:translate-x-1 transition-all duration-300"
              href="/"
            >
              Linkedin
            </Link>
            <Link
              className="text-lg hover:text-gray-500 hover:translate-x-1 transition-all duration-300"
              href="/"
            >
              Instagram
            </Link>
            <Link
              className="text-lg hover:text-gray-500 hover:translate-x-1 transition-all duration-300"
              href="/"
            >
              Twitter
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <button className="flex items-center gap-3 text-lg font-bold transition-all duration-300 uppercase">
              <span className="pb-[2px]">Send Message</span>
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                width={18}
                height={18}
                className="animate-bounce"
              />
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 h-full pt-10 pb-5 md:pb-0 md:pt-24 flex justify-end"
        >
          <Image
            src="/contact.jpg"
            alt=""
            width={550}
            height={400}
            className="rounded-md object-cover border-2 p-[2px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
