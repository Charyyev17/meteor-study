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
  const comments = [1, 2];

  const articles = [
    {
      id: 1,
      img: "/article4.jpg",
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
          <div className="flex flex-col md:items-center justify-center gap-8 xl:px-40">
            <h1 className="font-extrabold text-3xl sm:text-4xl xl:text-5xl">Article Title</h1>
            <div className="flex flex-col sm:flex-row text-sm sm:text-base gap-4 sm:gap-8">
              <span className="flex items-center gap-2 font-medium">
                <FontAwesomeIcon
                  icon={faBarsStaggered}
                  color="white"
                  width={14}
                  height={14}
                  className=""
                />
                Technology
              </span>
              <span className="flex items-center gap-2 font-medium">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="white"
                  width={14}
                  height={14}
                  className=""
                />
                21.10.2023
              </span>
              <span className="flex items-center gap-2 font-medium">
                <FontAwesomeIcon
                  icon={faEye}
                  color="white"
                  width={14}
                  height={14}
                  className=""
                />
                523
              </span>
            </div>
            <div className="w-full md:h-96">
              <Image
                src="/article1.jpg"
                alt=""
                width={500}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/*Content */}
          <div className="flex flex-col mt-5 xl:px-40">
            <div className="flex flex-col gap-3">
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
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia magnam tempore, culpa vel illo explicabo quia expedita
                ipsam amet corporis nisi ut laudantium sit autem aspernatur
                voluptate, fuga repellat eaque. Tenetur doloremque aliquam amet
                quasi quidem quia maiores. Animi nesciunt ut, repudiandae cum
                qui in autem recusandae minima maxime quasi explicabo quaerat a
                odio nobis vero itaque voluptatum sunt aliquam? Iste repellat
                mollitia error. Porro molestias ex nisi incidunt hic optio
                aliquid quo dolorem maiores dignissimos, nostrum a sit tempora
                iste dolores quos vel ducimus recusandae repudiandae excepturi
                voluptas modi. Unde, maxime libero ea natus ipsa tempora itaque
                placeat impedit eveniet eius vero culpa in earum quia. Facilis
                ratione labore natus minus alias placeat tempora, nisi commodi,
                voluptatum, voluptatibus asperiores?
              </p>
              <span className="border-l-4 border-[#0052DE] my-4 md:w-3/4 px-4 md:text-lg font-semibold italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                nostrum ipsa beatae tempore iste perspiciatis reiciendis eos
                architecto, possimus quaerat totam dolorum tenetur magni eum
                laboriosam ea quae officiis dolore. Cum soluta dicta illo ab
                recusandae molestias, sit nulla omnis obcaecati, repudiandae non
                sint veritatis libero vero, repellendus incidunt.
              </span>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis magnam at est in ratione quo enim, aliquam vel,
                iusto, aut saepe quis voluptatem neque temporibus nihil rerum
                obcaecati laboriosam minima? Accusamus assumenda ipsa a. Nihil,
                eligendi voluptate necessitatibus odit reiciendis veritatis quo
                consequuntur totam doloribus sed fugiat distinctio explicabo
                nulla maiores voluptas quas officia corporis cumque et hic
                provident incidunt? Quasi porro, exercitationem ad, nam fugit
                nesciunt laudantium iusto doloribus laboriosam accusamus eos sed
                deleniti reprehenderit molestiae delectus quod praesentium
                aspernatur expedita non ex perspiciatis soluta sapiente a.
                Provident, cum! Dolores rem iure reiciendis quae minus nisi
                labore aspernatur ea eveniet dicta neque possimus quos voluptate
                magnam nam quis, quam illo doloribus doloremque delectus
                suscipit repellendus pariatur ab? Suscipit, ea? Adipisci, quam
                quae? Voluptas, repudiandae itaque cum quas sapiente qui quaerat
                nihil iusto reprehenderit vitae molestias porro magnam sunt,
                iure beatae modi culpa sequi.
              </p>
              <p className="text-sm md:text-base">
                Ratione dolorem expedita consequuntur eius non. Obcaecati,
                adipisci doloremque incidunt, expedita nisi ratione quasi a ut
                voluptas libero alias nostrum deleniti nihil, dolorum sed
                repellat maxime sapiente magni earum. Possimus dicta porro
                accusantium tempora fuga vitae? Delectus minus laudantium, animi
                dolore voluptatibus est aperiam similique mollitia
                necessitatibus consequatur, nam totam. Quos atque rem nulla
                rerum cumque est, repellat sunt voluptatibus architecto libero
                consequuntur ratione debitis voluptates? Esse, eligendi nostrum
                ducimus ipsum fugit quae incidunt modi magni tempore vel
                provident ex nulla?
              </p>
              <ul className="list-disc px-4 my-4 font-semibold md:text-lg">
                <li>
                  Quasi porro, exercitationem ad, nam fugit nesciunt laudantium
                  iusto doloribus
                </li>
                <li className="my-2">
                  Esse, eligendi nostrum ducimus ipsum fugit quae incidunt modi
                  magni tempore
                </li>
                <li>
                  Nostrum, ea maxime. Ex adipisci aut a similique iste nostrum
                  dolore id
                </li>
              </ul>
              <p className="text-sm md:text-base">
                Consequuntur, ipsam atque ex placeat quas obcaecati doloremque
                quod pariatur, a tempore voluptatum, culpa amet? Fugit iure
                harum repellat excepturi pariatur nostrum quod totam facilis
                eligendi perspiciatis laborum et dolorum temporibus inventore
                reprehenderit fuga nam nobis expedita eveniet commodi quis
                dignissimos, dolores officia! Laborum, natus. Asperiores
                pariatur autem, optio veniam atque velit? Vero ad numquam enim
                pariatur, unde eos, corrupti veniam minima ex tempore quia
                obcaecati atque debitis itaque aperiam rem molestiae maiores
                mollitia sed! Unde, ipsa veniam fugit doloribus iste labore
                excepturi quasi sapiente minus vitae eveniet beatae, ex quaerat
                asperiores voluptatum. Vitae dolor similique aliquam porro
                deleniti ea necessitatibus aliquid iste alias provident? Culpa
                earum voluptas explicabo nihil necessitatibus vero, tenetur id,
                nemo cupiditate fugit odio sed!
                <br />
                <br />
                Accusantium quaerat rem odit corrupti dolorem explicabo
                accusamus repellat atque laborum voluptatem at, totam distinctio
                repellendus labore quam corporis dignissimos magni consectetur?
                Quibusdam. Nisi deserunt velit praesentium assumenda illo
                beatae, qui voluptas impedit laborum eligendi aspernatur, at
                repudiandae vitae sunt excepturi harum veritatis. Deleniti
                doloribus dignissimos obcaecati, suscipit libero modi repellat
                neque ipsa? Ex laborum obcaecati labore odit placeat reiciendis
                necessitatibus corporis, quaerat ab officia tenetur officiis
                earum distinctio omnis enim facilis, repellat fugiat expedita
                minima beatae cupiditate dignissimos ut dicta? Perspiciatis,
                beatae.
              </p>
            </div>
          </div>

          {/*More */}
          <div className="flex flex-col gap-10">
            {/*Articles */}
            <div className="flex flex-col gap-10 mt-10 mb-20">
              <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Recommended Articles
                </h1>
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
