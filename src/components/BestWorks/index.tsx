"use client";
import Image, { StaticImageData } from "next/image";
import imgDefault from "../../../public/home/slider-img.jpg";
import place from "../../../public/home/place.svg";
import { motion } from "framer-motion";
import { activeLeft, activeRight } from "@/variants/variants";

const data: {
  country: string;
  subText: string;
  srcImage: string | StaticImageData;
}[] = [
  {
    country: "London",
    subText: "Contemporary living room in wood tones",
    srcImage: imgDefault,
  },
  {
    country: "London",
    subText: "Contemporary living room in wood tones",
    srcImage: imgDefault,
  },
  {
    country: "London",
    subText: "Contemporary living room in wood tones",
    srcImage: imgDefault,
  },
];

export const BestWorks = () => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.8 }}
      className="overflow-hidden mb-4 min-h-[100vh] relative bg-white flex flex-col items-center gap-[40px]"
    >
      <div className="bg-[#202328] w-full h-[40%] lg:h-[50%] absolute"></div>
      <article className="relative grid lg:grid-cols-2 gap-[90px] pt-[80px] px-[80px]">
        <div>
          <motion.p variants={activeLeft} className="text-white text-[14px]">
            We present you the best projects developed by our team
            of professionals with love and care for customers. The portfolio
            will allow you to choose the style, wood color, texture, design and
            arrangement of elements that interest you.
          </motion.p>
        </div>
        <div>
          <motion.h3
            variants={activeRight}
            className="text-[#F88500] text-[16px]"
          >
            \\Best works
          </motion.h3>
          <motion.h2
            variants={activeRight}
            className="font-bold text-white text-[29px]"
          >
            We create a warm atmosphere for your holiday
          </motion.h2>
        </div>
      </article>

      <section className="grid lg:grid-cols-3 relative px-4 place-items-center gap-8">
        {data.map((item) => {
          return (
            <article className="max-w-[360px] border-b-2">
              <picture className=" aspect-video flex">
                <Image src={item.srcImage} alt={item.country}></Image>
              </picture>
              <div className="flex flex-col gap-1 p-4">
                <div className="flex flex-row items-center gap-2">
                  <picture>
                    <Image src={place} alt="place"></Image>
                  </picture>
                  <h3>{item.country}</h3>
                </div>
                <div className="flex flex-row gap-2 items-start  ">
                  <div className="flex flex-col gap-1">
                    {Array(3)
                      .fill("")
                      .map(() => (
                        <div className="bg-orange-500 rounded-full w-1 h-1 "></div>
                      ))}
                  </div>
                  <h2 className="m-0">{item.subText}</h2>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <button className="bg-orange-500 px-8 py-2 text-white">Show more</button>
    </motion.section>
  );
};
