import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as ISkill } from "../typings";

type Props = {
  skills: ISkill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center"
    >
      <h3 className="absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute tracking-[3px] uppercase top-24 md:top-36 text-gray-500 text-sm">
        Hover a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
        {/* <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill /> */}
      </div>
    </motion.div>
  );
};

export default Skills;
