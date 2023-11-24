"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMeteor, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "About", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Articles", url: "/articles" },
    { name: "Contact", url: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="z-50 fixed top-0 left-0 w-full h-20 px-4 md:px-0 flex justify-between md:justify-center items-center gap-24 backdrop-blur-md shadow-sm transition-all duration-300">
        {/* Left Side */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/courses"
            className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Courses
          </Link>
          <Link
            href="/articles"
            className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Articles
          </Link>
        </div>

        {/* Logo */}
        <div className="md:w-11 md:h-11 flex items-center gap-3">
          <Link href="/">
            <FontAwesomeIcon
              icon={faMeteor}
              color="white"
              size="lg"
              className="w-8 h-8 md:w-11 md:h-11 hover:text-[#0052DE] hover:scale-110 transition-all duration-700 cursor-pointer"
            />
          </Link>
          <h1 className="font-bold text-xl md:hidden">Meteor</h1>
        </div>

        {/* Menu */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            size="lg"
            className="hover:text-[#0052DE] cursor-pointer transition-all duration-300"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/about"
            className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Contact
          </Link>
        </div>
      </div>
      {open && (
        <div className="z-[9999] fixed w-full h-screen flex items-center justify-center top-0 left-0 backdrop-blur-md">
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-black w-[320px] h-[350px] flex flex-col items-center justify-center gap-6 m-20 p-20 rounded-md shadow-xl"
          >
            <FontAwesomeIcon
              icon={faXmark}
              color="#dc2626"
              size="lg"
              className="absolute top-0 right-0 m-5 cursor-pointer hover:text-red-400 transition-all duration-300"
              onClick={() => setOpen(!open)}
            />
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className="text-center font-semibold text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
