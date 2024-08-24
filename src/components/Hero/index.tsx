"use client";
import Image from "next/image";
import srcImage from "../../../public/home/slider-img.jpg";
import srcImageAlternative from "./julian-hochgesang-Yrl2GWeCA_8-unsplash.jpg";
import { motion } from "framer-motion";
import {
  variantPicture,
  variantText,
  variantTextTitle,
} from "@/variants/variants";

export const Hero = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className=" relative  w-full   rounded-2xl overflow-hidden "
    >
      <article className=" w-full h-full flex">
        <motion.picture
          className="flex w-full h-full bg-red-100 "
          variants={variantPicture}
        >
          <Image
            className=" hidden lg:block w-full h-full object-cover"
            src={srcImage}
            alt="image home"
          ></Image>
          <Image
            className="  lg:hidden  w-full h-full object-cover"
            src={srcImageAlternative}
            alt="image home"
          ></Image>
        </motion.picture>
        <motion.div className=" p-5 lg:px-[80px] absolute w-full flex flex-col items-start gap-[20px] ">
          <motion.h2
            variants={variantTextTitle}
            className=" font-bold text-[58px] text-white"
          >
            Woodhouse
          </motion.h2>
          <motion.button
            variants={variantText}
            className="text-white px-4 py-2 bg-[#F88500] rounded-md"
          >
            {" "}
            high level design
          </motion.button>
          <motion.p
            variants={variantText}
            className=" text-[15px] max-w-[450px] text-white rounded-md p-4 bg-[#202328]"
          >
            The development and implementation of beautiful wood interiors has
            never been so accessible. Interiors made of wood of various species
            will make your home cozy and warm, delighting you and your guests.
          </motion.p>
        </motion.div>
      </article>

      {/* <div className="hidden lg:block  absolute right-0 bottom-0 w-full max-w-[400px] max-h-[100px] h-full bg-[#202328] "></div> */}
    </motion.section>
  );
};
