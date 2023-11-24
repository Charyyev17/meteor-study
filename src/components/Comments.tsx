"use client";

import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Comments = () => {
  const comments = [1, 2, 3];
  return (
    <div className="relative w-full md:h-screen flex flex-col items-center justify-center gap-6 mt-20 lg:px-10 xl:px-40">
      <div className="lg:w-[800px] flex flex-col justify-center lg:items-center px-4 lg:px-0 gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold lg:text-center"
        >
          Testimonials
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:px-20 lg:text-center lg:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsa id doloremque suscipit, distinctio exercitationem impedit
          perspiciatis nihil ab illum nam in recusandae inventore.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/about"
            className="group flex items-center gap-3 w-[175px] text-center font-medium text-xl bg-[#0052DE] text-white px-6 py-3 rounded-md border border-[#0052DE] hover:bg-transparent hover:border-white transition-all duration-300"
          >
            About Us
            <FontAwesomeIcon
              icon={faArrowRight}
              color="white"
              width={18}
              height={18}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:flex items-center justify-center text-center px-4 lg:px-0 my-10 md:my-0 gap-8"
      >
        {comments.map((comment) => (
          <div
            key={comment}
            className={
              comment === 2
                ? "md:w-1/3 md:mt-14 border border-[#0051de33] border-b-4 border-b-[#0052DE] rounded-md rounded-b-xl p-4 flex flex-col gap-4 items-center justify-center"
                : "md:w-1/3 border border-[#0051de33] border-b-4 border-b-[#0052DE] rounded-md rounded-b-xl p-4 flex flex-col gap-4 items-center justify-center"
            }
          >
            <div className="w-12 h-12 p-[3px] border-2 border-[#0052DE] rounded-full">
              <Image
                src="/avatar.jpg"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-sm italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              quis neque ipsum eligendi distinctio debitis modi iste velit. Quod
              atque quam suscipit voluptas exercitationem!
            </h3>
            <h1 className="font-semibold text-lg">Nathan Taylor</h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Comments;
