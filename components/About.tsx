import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const background = `I am a Full Stack Developer based in Lagos, Nigeria. I have acquired several skills including HTML, CSS,
JavaScript, Front-end Development, Java, Back-end Development with Node.js and Spring Boot. I worked
part-time as an intern at Isurf Consulting Limited where I perform several tasks which include creating
websites, handling company phone calls, learning new programming languages to help make our duties more
efficient. I also worked as an intern at Sysserve Solutions as a Java Developer. I am currently working as a
Node.js Backend Developer at Tribinnov Africa.`;

  return (
    <div className="h-screen flex relative flex-col items-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly">
      <h3 className="absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="w-32 h-32 rounded-full object-cover -mb-24 md:mb-0 flex-shrink-0 
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px]"
        alt=""
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-5 md:space-y-10 px-0 md:px-10 mt-10 md:mt-0"
      >
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
