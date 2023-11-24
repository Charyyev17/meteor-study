"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import {
  faBarsStaggered,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Courses = () => {
  const courses = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex justify-between pt-40 md:pt-28 px-4 lg:px-20 xl:px-40 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex w-2/3 xl:w-1/2"
        >
          <Image
            src="/courses1.jpg"
            alt=""
            width={450}
            height={500}
            className="rounded-xl object-cover h-[620px] border-2 border-[#3e4e4b71] p-1"
          />
        </motion.div>
        <div className="w-full flex flex-col md:items-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/courses2.jpg"
              alt=""
              width={400}
              height={200}
              className="w-full rounded-xl object-cover h-72 border-2 border-[#93491057] p-1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-1 mt-16"
          >
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl md:text-right font-bold">
              Consectetur, sit
            </h1>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl md:text-right font-bold">
              tempore accusan
            </h1>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl md:text-right font-bold">
              mollitia facere
            </h1>
          </motion.div>
          <div className="w-14 md:w-28 h-2 bg-[#0052DE] mt-10 mr-[2px] rounded-md"></div>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center px-4 lg:px-20 xl:px-80">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs md:text-base font-semibold uppercase"
          >
            C o u r s e s
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
            cum eligendi laboriosam dolorum repellat voluptatem reprehenderit.
            Itaque quibusdam quam cupiditate officiis. Odio, eveniet doloremque
            mollitia unde ab quaerat placeat, ea tenetur quod beatae rem
            perferendis.
          </motion.p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10 mb-40 px-4 lg:px-20 xl:px-40">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl mb-16"
        >
          All Courses
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full"
        >
          {courses.map((course) => (
            <Link
              href="/courses/1"
              key={course}
              className="group w-full h-80 md:border-b md:border-[#0051de5f] rounded-md flex flex-col md:flex-row md:items-center gap-6 py-10 md:hover:scale-105 md:hover:border-[#0052DE] md:hover:border-b-2 transition-all duration-300"
            >
              <h1 className="text-5xl md:text-8xl font-bold text-[#0051de5f] group-hover:text-[#0052DE] transition-all duration-300">
                0{course}
              </h1>
              <Image
                src="/course1.jpg"
                alt=""
                width={300}
                height={100}
                className="object-cover rounded-md hidden lg:flex"
              />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl">Course Name</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia ipsa tempore omnis, ullam sit adipisci, porro dicta
                  suscipit distinctio placeat reprehenderit esse dignissimos
                  delectus nemo iusto? Numquam libero quas quidem.
                </p>
                <div className="hidden md:flex gap-8">
                  <span className="flex items-center gap-2 font-medium">
                    <FontAwesomeIcon
                      icon={faBarsStaggered}
                      color="white"
                      width={14}
                      height={14}
                      className=""
                    />
                    Computer Science
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <FontAwesomeIcon
                      icon={faBuffer}
                      color="white"
                      width={14}
                      height={14}
                      className=""
                    />
                    Intermediate
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <FontAwesomeIcon
                      icon={faClockRotateLeft}
                      color="white"
                      width={14}
                      height={14}
                      className=""
                    />
                    1-4 Weeks
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Courses;
