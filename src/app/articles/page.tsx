"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  faArrowRight,
  faBarsStaggered,
  faCalendarDays,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Articles = () => {
  const categories = ["All", "Technology", "Programming", "Self Improvement"];
  const articles = [
    {
      id: 1,
      img: "/article1.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima plamantita de tutta benido marta...",
    },
    {
      id: 2,
      img: "/article2.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima plamantita de tutta benido marta...",
    },
    {
      id: 3,
      img: "/article3.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima plamantita de tutta benido marta...",
    },
    {
      id: 4,
      img: "/article4.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima plamantita de tutta benido marta...",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex justify-between pt-40 md:pt-28 px-4 lg:px-20 xl:px-40">
        <div className="flex flex-col w-full md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/articles2.jpg"
              alt=""
              width={400}
              height={200}
              className="w-full rounded-xl object-cover h-80 border-2 p-1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-1 mt-20"
          >
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl md:text-left font-bold">
              Consectetur, sit
            </h1>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl md:text-left font-bold">
              tempore accusan
            </h1>
          </motion.div>
          <div className="w-14 md:w-28 h-2 bg-[#0052DE] mt-12 ml-1 rounded-md"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden w-2/3 xl:w-1/2 md:flex justify-end"
        >
          <Image
            src="/articles1.jpg"
            alt=""
            width={450}
            height={500}
            className="rounded-xl object-cover h-[620px] border-2 p-1"
          />
        </motion.div>
      </div>
      <div className="w-full h-screen flex items-center justify-center px-4 lg:px-20 xl:px-80">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs md:text-base font-semibold uppercase"
          >
            A r t i c l e s
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            Lorem ipsum dolor consectetur adipisicing elit.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nisi,
            error molestias culpa consequatur quia iure voluptatibus voluptates
            libero adipisci, perferendis expedita corporis odio voluptatum
            doloribus aliquid repellat ducimus delectus. Quisquam impedit
            aliquid, sint hic distinctio sequi explicabo odit expedita eligendi
            voluptatem.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nesciunt, voluptate quae qui sit corporis dolores
            doloremque iste impedit distinctio accusantium corrupti excepturi,
            cum.
          </motion.p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10 mb-20 px-4 lg:px-20 xl:px-40">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl"
        >
          All Articles
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex gap-4 my-12"
        >
          {categories.map((category, id) => (
            <div
              key={id}
              className="bg-[#0052DE] py-2 px-4 rounded-md cursor-pointer border border-[#0052DE] hover:border-white hover:bg-transparent transition-all duration-300"
            >
              {category}
            </div>
          ))}
        </motion.div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 mt-10 mb-20">
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {articles.map((article) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className=" h-[520px] border border-[#0051de33] rounded-md relative overflow-hidden hover:border-[#0052DE] hover:scale-105 transition-all duration-300"
                  key={article.id}
                >
                  <div className="w-full 2xl:h-[265px]">
                    <Image
                      src={article.img}
                      alt=""
                      width={390}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 px-4 flex flex-col items-center gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-3">
                        <h1 className="w-full font-bold text-xl">
                          {article.title}
                        </h1>
                        <div className="flex items-center gap-4">
                          <span className="text-xs flex items-center gap-1">
                            <FontAwesomeIcon
                              icon={faBarsStaggered}
                              color="white"
                              width={11}
                              height={11}
                              className=""
                            />
                            {article.category}
                          </span>
                          <span className="text-xs flex items-center gap-1">
                            <FontAwesomeIcon
                              icon={faCalendarDays}
                              color="white"
                              width={11}
                              height={11}
                              className=""
                            />
                            {article.date}
                          </span>
                          <span className="text-xs flex items-center gap-1">
                            <FontAwesomeIcon
                              icon={faEye}
                              color="white"
                              width={11}
                              height={11}
                              className=""
                            />
                            {article.views}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="">{article.content}</p>
                    <motion.div
                      initial={{ opacity: 0, x: 90 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="z-10 absolute bottom-5 right-0 px-3 py-2 border-2 border-[#0052DE] bg-[#0052DE] rounded-s-md hover:translate-x-2 transition-all duration-300"
                    >
                      <Link
                        href="/articles/1"
                        className="flex items-center gap-[6px] text-xs"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Articles;
