"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBarsStaggered,
  faCalendarDays,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Articles = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-650, 450]);
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -450]);

  const articles = [
    {
      id: 1,
      img: "/article1.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima quam eum dolores labore. Possimus, officiis culpa. Voluptatum tempora.",
    },
    {
      id: 2,
      img: "/article2.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima quam eum dolores labore. Possimus, officiis culpa. Voluptatum tempora.",
    },
    {
      id: 3,
      img: "/article3.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima quam eum dolores labore. Possimus, officiis culpa. Voluptatum tempora.",
    },
    {
      id: 4,
      img: "/article4.jpg",
      title: "Lorem ipsum dolor sit, amet consectetur elit.",
      category: "Technology",
      date: "21.10.2023",
      views: 523,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti deserunt minima quam eum dolores labore. Possimus, officiis culpa. Voluptatum tempora.",
    },
  ];
  return (
    <div className="w-full lg:h-screen flex items-center justify-center gap-20 my-20 lg:my-0 px-4 lg:px-10 2xl:px-40 relative overflow-hidden">
      <div className="w-1/2 h-full hidden lg:grid grid-cols-2 gap-6 -rotate-[10deg]">
        {articles.map((article) => (
          <motion.div
            style={article.id === 1 || article.id === 3 ? { y: y1 } : { y: y2 }}
            className={
              article.id === 1 || article.id === 3
                ? "h-[530px] border border-[#0051de5f] rounded-md relative -mt-48 overflow-hidden"
                : "h-[530px] border border-[#0051de5f] rounded-md relative overflow-hidden"
            }
            key={article.id}
          >
            <div className="w-full h-1/3">
              <Image
                src={article.img}
                alt=""
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="p-3 px-4 flex flex-col items-center gap-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <h1 className="w-full font-bold xl:text-xl">{article.title}</h1>
                  <div className="flex items-center gap-2 xl:gap-4">
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
                    <span className="text-xs hidden xl:flex items-center gap-1">
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
              <p className="text-sm xl:text-base">{article.content}</p>
              <div className="z-10 absolute bottom-6 right-0 px-3 py-2 border-2 border-[#0052DE] bg-[#0052DE] rounded-s-md hover:translate-x-2 transition-all duration-300">
                <Link href="/" className="flex items-center gap-[6px] text-xs">
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden 2xl:flex absolute -right-60 top-10 brightness-[.15] text-[#0051dee1] font-extrabold text-[15rem]"
      >
        Articles
      </motion.h1>
      <div className="lg:w-1/2 z-10 lg:pl-20 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-extrabold text-4xl md:text-6xl lg:text-8xl"
        >
          Articles
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="xl:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolores commodi in voluptatibus, asperiores, libero est dolor tempore
          excepturi, facilis at quia quis optio eaque voluptas.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:hidden xl:text-lg"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus hic
          numquam rem eos. Totam est accusantium, officiis, iure ab voluptates
          enim qui ut, minima asperiores eos officia voluptatem facilis omnis!
          Exercitationem deleniti perferendis excepturi soluta vitae ex odit,
          non, iusto esse ea natus reiciendis cum molestiae nesciunt quam eaque
          voluptates.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/articles"
            className="group flex items-center gap-3 w-[200px] text-center font-medium text-xl bg-[#0052DE] text-white px-6 py-3 rounded-md border border-[#0052DE] hover:bg-transparent hover:border-white transition-all duration-300"
          >
            Take a Look
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
    </div>
  );
};

export default Articles;
