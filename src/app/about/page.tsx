"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full md:h-screen flex items-center justify-center pt-40 sm:pt-0 px-4 lg:px-20 xl:px-80">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs md:text-base font-semibold uppercase"
          >
            A b o u t
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
      <div className="w-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-20 sm:pt-0 px-4 lg:px-20 xl:px-40 overflow-hidden">
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/about1.jpg"
              alt=""
              width={400}
              height={500}
              className="object-contain rounded-md"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            Lorem ipsum consectetur.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-14 md:w-20 h-2 bg-[#0052DE] mb-3 mr-[2px] rounded-md"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            consequuntur perferendis libero nesciunt rerum nemo id blanditiis
            odio quidem assumenda impedit saepe, voluptatum vitae nihil sequi?
            Explicabo quibusdam expedita voluptatibus. Ipsam quos voluptatum
            necessitatibus beatae provident.
          </motion.p>
        </div>
      </div>
      <div className="w-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-20 sm:pt-0 px-4 lg:px-20 xl:px-40 overflow-hidden">
        <div className="md:w-1/2 flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            Lorem ipsum consectetur dolor elit.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-14 md:w-20 h-2 bg-[#0052DE] mb-3 mr-[2px] rounded-md"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nisi,
            error molestias culpa consequatur quia iure voluptatibus voluptates
            libero adipisci, perferendis expedita corporis odio voluptatum
            doloribus aliquid repellat ducimus delectus.
          </motion.p>
        </div>
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/about2.jpg"
              alt=""
              width={400}
              height={500}
              className="object-contain rounded-md"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full md:h-screen flex items-center justify-center pt-20 sm:pt-0 px-4 lg:px-20 xl:px-80">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs md:text-base font-semibold uppercase"
          >
            V i s i o n
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
      <div className="w-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20 md:py-0 px-4 lg:px-20 xl:px-40 overflow-hidden">
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/about3.jpg"
              alt=""
              width={400}
              height={500}
              className="object-contain rounded-md"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            Lorem ipsum culpa consequatur.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-14 md:w-20 h-2 bg-[#0052DE] mb-3 mr-[2px] rounded-md"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nisi,
            error molestias culpa consequatur quia iure voluptatibus voluptates
            libero adipisci, perferendis expedita corporis odio voluptatum
            doloribus aliquid repellat ducimus delectus.
          </motion.p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
