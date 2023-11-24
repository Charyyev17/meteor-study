import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMeteor,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:h-72 flex items-center justify-center bottom-0 border-t border-[#0051de33] p-4 lg:p-8 xl:px-40">
      <div className="">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
          <div className="lg:w-1/3 flex flex-col gap-3">
            <div className="md:w-11 md:h-11 flex items-center gap-3">
              <Link href="/">
                <FontAwesomeIcon
                  icon={faMeteor}
                  color="white"
                  size="lg"
                  className="w-8 h-8 hover:text-[#0052DE] hover:scale-110 transition-all duration-700 cursor-pointer"
                />
              </Link>
              <h1 className="font-bold text-xl">Meteor</h1>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsa iste necessitatibus. Metade consectetur adipisicing elit
            </p>
            <h3 className="hidden md:flex">© SCH 2023. All Rights Reserved</h3>
          </div>
          <div className="lg:w-1/3 md:flex lg:justify-end gap-4">
            <Link
              href="/courses"
              className="relative text-lg w-fit h-10 block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Courses
            </Link>
            <Link
              href="/articles"
              className="relative text-lg w-fit h-10 block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="relative text-lg w-fit h-10 block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="relative text-lg w-fit h-10 block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0052DE] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Contact
            </Link>
          </div>
          <div className="lg:w-1/3 flex flex-col lg:items-end">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold">Be In Touch</h1>
                <span className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="white"
                    width={14}
                    height={14}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />{" "}
                  example@gmail.com
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon
                    icon={faPhone}
                    color="white"
                    width={14}
                    height={14}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />{" "}
                  +123 456 89
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold">Social Media</h1>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="white"
                    width={16}
                    height={16}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="white"
                    width={16}
                    height={16}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    color="white"
                    width={16}
                    height={16}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
