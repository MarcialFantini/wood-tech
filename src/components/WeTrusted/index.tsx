"use client";
import { activeLeft, activeRight } from "@/variants/variants";
import { motion } from "framer-motion";

export const WeTrusted = () => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.8 }}
      className=" overflow-hidden bg-[#171A1A] grid gap-4 lg:grid-cols-3 min-h-[250px] p-[80px] text-[#6F7A8B]"
    >
      <article className=" col-span-2">
        <h2 className="text-[18px]">WE ARE TRUSTED</h2>
        <div className="grid grid-cols-3 text-[14px] ">
          <motion.ul variants={activeLeft} className="flex flex-col gap-3">
            <li>860 clients worldwide</li>
            <li>36 best franchisees</li>
            <li>38 suppliers</li>
          </motion.ul>
          <motion.ul variants={activeLeft} className="flex flex-col gap-3">
            <li>23 reliable partners</li>
            <li>108 furniture manufacturers</li>
            <li>256 eight-bit colors</li>
          </motion.ul>
          <motion.ul variants={activeRight} className="flex flex-col gap-3">
            <li>85 employees</li>
          </motion.ul>
        </div>
      </article>
      <motion.article variants={activeRight}>
        <p className="text-[14px]">
          Call us or leave a request from the site. We will call you back within
          10 minutes.
        </p>
        <h2 className="text-[28px]">+48 (525) 282 547</h2>
        <button className="text-[20px] bg-[#F88500] px-8 py-3 text-white rounded-md">
          Apply Now
        </button>
      </motion.article>
    </motion.section>
  );
};
