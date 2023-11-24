import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBarsStaggered,
  faCalendarDays,
  faCirclePlay,
  faClockRotateLeft,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const skills = [
    "Debugging",
    "Encryption",
    "Algorithms and Techniques",
    "Customer Service",
    "Network Protocols",
    "Cloud Computing",
  ];

  const substances = [1, 2, 3, 4, 5, 6, 7];

  const comments = [1, 2];

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
  ];

  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-20 xl:px-40 pt-32">
        <div className="w-full flex flex-col gap-10">
          {/*Title */}
          <div className="flex flex-col md:items-center justify-center gap-8">
            <h1 className="font-extrabold text-3xl sm:text-4xl xl:text-5xl">
              Course Name
            </h1>
            <div className="flex flex-col sm:flex-row text-sm sm:text-base gap-4 sm:gap-8">
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

          {/*Player */}
          <div className="w-full h-[200px] sm:h-[300px] md:h-[450px] mt-4 mb-10 flex md:items-center md:justify-center">
            <div className="relative w-full xl:w-full 2xl:w-3/4 h-full flex items-center justify-center border border-[#0051de5f] shadow-2xl shadow-[#0052DE] rounded-md">
              <div className="absolute w-10 h-10 md:w-20 md:h-20 2xl:w-24 2xl:h-24 rounded-full border-2 border-[#0052DE] bg-transparent animate-ping"></div>
              <FontAwesomeIcon
                icon={faCirclePlay}
                color="#0052DE"
                width={70}
                height={70}
                className="z-10 w-10 h-10 md:w-[70px] md:h-[70px] cursor-pointer hover:scale-110 hover:animate-pulse transition-all duration-300"
              />
            </div>
          </div>

          {/*Content */}
          <div className="flex flex-col gap-16 mt-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold">About Course</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti fugit cumque officiis vel voluptate. Porro quod tenetur
                incidunt enim ipsam. Quibusdam pariatur corrupti repellat ipsam
                expedita est nulla, perspiciatis dolor. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Odio ipsum reprehenderit
                corrupti quidem repellat, accusamus culpa, vel iste qui sequi
                ducimus eius illo similique perferendis nisi facere praesentium,
                quas quam.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia fugiat nihil, sed ipsam quidem iste reiciendis. Laborum
                distinctio architecto eaque consequuntur? Voluptatem ex
                praesentium sapiente minima, quod rem asperiores commodi!
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">Skills You Will Gain</h1>
              <div className="grid md:grid-cols-3 gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="py-2 px-2 mr-2 cursor-default bg-[#0051de5f] rounded-md font-medium hover:translate-x-2 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold">Substance</h1>
              <div className="flex flex-col gap-3">
                {substances.map((substance) => (
                  <span
                    key={substance}
                    className="flex gap-3 text-sm md:text-base cursor-default items-center py-4 border-b border-[#0051de5f] hover:scale-105 hover:translate-x-10 transition-all duration-300"
                  >
                    <span className="text-4xl font-extrabold text-[#0051de5f]">
                      0{substance}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/*More */}
          <div className="flex flex-col gap-10">
            {/*Comments */}
            <div className="flex flex-col gap-10 my-20">
              <h1 className="text-2xl md:text-3xl font-bold">
                Why People Choose{" "}
                <span className="border-b-2 border-[#0052DE]">Meteor</span>?
              </h1>
              <div className="w-full flex flex-col md:flex-row items-center justify-center text-center gap-4 md:gap-16">
                {comments.map((comment) => (
                  <div
                    key={comment}
                    className="md:w-1/2 xl:h-72 border border-[#0051de33] border-b-4 border-b-[#0052DE] rounded-md rounded-b-xl p-6 flex flex-col gap-4 items-center justify-center"
                  >
                    <div className="w-16 h-16 p-[3px] border-2 border-[#0052DE] rounded-full">
                      <Image
                        src="/avatar.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-sm italic mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quis neque ipsum eligendi distinctio debitis modi
                      iste velit. At in hic sit maxime nisi magnam nulla
                      praesentium perferendis exercitationem consequatur eaque
                      beatae, consectetur, ullam eos distinctio similique.
                      Illum, cumque commodi?
                    </h3>
                    <h1 className="font-semibold text-xl mt-2">
                      Nathan Taylor
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            {/*Articles */}
            <div className="flex flex-col gap-10 mt-10 mb-20">
              <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-center">
                <h1 className="text-2xl md:text-3xl font-bold">Recommended Articles</h1>
                <Link
                  href="/articles"
                  className="flex gap-2 items-center group"
                >
                  All Articles{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color="white"
                    width={14}
                    height={14}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12">
                {articles.map((article) => (
                  <div
                    className="md:w-1/3 h-[520px] border border-[#0051de33] rounded-md relative overflow-hidden hover:border-[#0052DE] hover:scale-105 transition-all duration-300"
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
                      <div className="z-10 absolute bottom-5 right-0 px-3 py-2 border-2 border-[#0052DE] bg-[#0052DE] rounded-s-md hover:translate-x-2 transition-all duration-300">
                        <Link
                          href="/articles/1"
                          className="flex items-center gap-[6px] text-xs"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
