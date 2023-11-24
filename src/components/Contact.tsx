"use client";

import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-96 hidden lg:flex items-center justify-center mt-20 mb-40 lg:px-40 2xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full flex bg-[#0052DE] rounded-md rounded-s-xl"
      >
        <div className="w-1/3 h-full flex flex-col justify-center gap-10 bg-black/90 rounded-md rounded-e-3xl p-8">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold"
          >
            Contact
          </motion.h1>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-14 h-[6px] rounded-md bg-[#0052DE]"
            ></motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              enim, nesciunt molestias obcaecati numquam magnam temporibus
              pariatur doloribus tempore.
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex gap-6 mt-8"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              width={22}
              height={22}
              className="w-5 h-5 hover:scale-125 cursor-pointer transition-all duration-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              width={22}
              height={22}
              className="w-5 h-5 hover:scale-125 cursor-pointer transition-all duration-300"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              color="white"
              width={22}
              height={22}
              className="w-5 h-5 hover:scale-125 cursor-pointer transition-all duration-300"
            />
          </motion.div>
        </div>
        <div className="w-2/3 flex flex-col justify-center gap-3 px-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-2"
          >
            <h3 className="font-semibold">Your Name</h3>
            <input
              type="text"
              className="w-full rounded-md p-3 text-sm bg-black/90 border-none"
              placeholder="Type Your Name ..."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-2"
          >
            <h3 className="font-semibold">Your Message</h3>
            <textarea
              name=""
              id=""
              className="h-32 w-full rounded-md p-3 text-sm bg-black/90"
              placeholder="Type Your Message ..."
            ></textarea>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex justify-end mt-3"
          >
            <Link
              href="/"
              className="group flex items-center gap-3 w-[195px] text-center font-medium bg-black/90 text-white px-6 py-3 rounded-md transition-all duration-300"
            >
              Send Message
              <FontAwesomeIcon
                icon={faPaperPlane}
                color="white"
                width={14}
                height={14}
                className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
