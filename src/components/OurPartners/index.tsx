"use client";
import Image, { StaticImageData } from "next/image";
import srcImage1 from "./cappelini 1.svg";
import srcImage2 from "./fanfani 1.svg";
import srcImage3 from "./mazzucato 1.svg";
import srcImage4 from "./milano 1.svg";
import srcBg from "../../../public/home/slider-img.jpg";
import { motion } from "framer-motion";
import { activeRight } from "@/variants/variants";

const array: { title: string; text: string; src: StaticImageData }[] = [
  {
    title: "Milano Parquet S.R.L.",
    text: "We take care of wood and carefully monitor the entire production process.",
    src: srcImage1,
  },
  {
    title: "Mazzucato Legnami ",
    text: "- italian timber manufacturer, the largest market leader in Europe.",
    src: srcImage2,
  },
  {
    title: "Andrea Fanfani",
    text: "creates unique Italian handmade furniture as an extension of your interior.",
    src: srcImage3,
  },
  {
    title: "Angelo Cappelini ",
    text: "reproduces furniture of bygone eras: empire, baroque, rococo and many others.",
    src: srcImage4,
  },
];

export const OurPartners = () => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.8 }}
      className=" py-[50px] my-[80px] text-white bg-[#202328] relative overflow-hidden flex justify-center items-center"
    >
      <picture className="absolute w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={srcBg}
          alt="image"
        ></Image>
      </picture>
      <div className="w-full h-full bg-[rgb(0,0,0,0.4)] absolute"></div>
      <div className="relative">
        <h2 className="font-bold text-white text-[29px] text-center">
          Our partners
        </h2>
        <div className="grid lg:grid-cols-4 gap-4 p-8">
          {array.map((item, index) => {
            return (
              <motion.article
                variants={activeRight}
                key={index + item.title}
                className="max-w-[265px] gap-8 flex flex-col items-center justify-around"
              >
                <picture className="max-h-[50px]">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.src}
                    alt={item.title}
                  ></Image>
                </picture>
                <p className="text-[14px]">
                  <span className="text-orange-500 font-extrabold">
                    {item.title + " "}
                  </span>
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
