"use client";
import Image from "next/image";
import srcDefault from "./image.jpg";
import srcOrangeRound from "./wood-cut.svg";
import { motion } from "framer-motion";
import { activeLeft, activeRight } from "@/variants/variants";

export const AboutUs = () => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.8 }}
      className="bg-white flex items-center "
    >
      <article className="grid lg:grid-cols-2 gap-20 max-w-[1440px] px-[80px] m-auto overflow-hidden">
        <motion.div
          variants={activeLeft}
          className="w-full h-full max-h-[545px] relative"
        >
          <picture className="w-full h-full ">
            <Image
              className="w-full h-full object-cover"
              src={srcDefault}
              alt="About us"
            ></Image>
          </picture>

          <div className="w-[50%] p-6 gap-4 bg-[#202328c5] absolute bottom-[10%] right-[-25px] flex flex-row items-center justify-center">
            <h2 className=" text-[50px] text-white">32</h2>
            <p className="text-[21px] text-white">years on the market</p>
          </div>
        </motion.div>
        <motion.div variants={activeRight} className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-8 ">
            <h3 className="text-[16px] text-orange-500 font-bold">
              \\briefly about us
            </h3>
            <h2 className="text-[30px] text-black font-bold max-w-[400px] uppercase">
              We design and create <span>eco-friendly</span> comfort
            </h2>
            <div className="flex flex-row gap-2">
              {Array(3)
                .fill("")
                .map(() => {
                  return (
                    <div className="bg-orange-500 w-1 h-1 rounded-full"></div>
                  );
                })}
            </div>
            <p className="text-[14px] max-w-[550px]">
              In our work, we use only the best materials on the market at
              affordable prices. Our experts will select the most suitable wood
              species, design specialists will develop a ready-made solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3 border-b-2 border-[#E7E7E8] pb-4">
                <picture>
                  <Image src={srcOrangeRound} alt="icon material"></Image>
                </picture>
                <h3 className="text-start font-bold text-[19px]">
                  Safe materials
                </h3>
              </div>
              <p className="text-[14px] text-[#333333]">
                The safety of each of the materials used is confirmed by the
                relevant certificate of the European standard. We use products
                only from brands that have been proven over the years.
              </p>
              <button className="text-black font-bold underline">More</button>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3 border-b-2 border-[#E7E7E8] pb-4">
                <picture>
                  <Image src={srcOrangeRound} alt="icon material"></Image>
                </picture>
                <h3 className="text-start font-bold text-[19px]">
                  Safe materials
                </h3>
              </div>
              <p className="text-[14px] text-[#333333]">
                The safety of each of the materials used is confirmed by the
                relevant certificate of the European standard. We use products
                only from brands that have been proven over the years.
              </p>
              <button className="text-black font-bold underline">More</button>
            </div>
          </div>
        </motion.div>
      </article>
    </motion.section>
  );
};
