import Image, { StaticImageData } from "next/image";

import srcDefault from "../../../public/home/slider-img.jpg";

const array: { title: string; text: string; src: StaticImageData }[] = [
  {
    title: "Built an amazing wooden staircase",
    src: srcDefault,
    text: "One of the most unusual projects of our company is an old-style spiral wooden staircase. The work of our team took about four months.",
  },
  {
    title: "Creating a wooden futuristic bedroom",
    src: srcDefault,
    text: "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
];

export const OurBlog = () => {
  return (
    <section className="w-full flex flex-col items-center max-w-[1120px] m-auto ">
      <h2 className="text-[29px] font-bold text-[#333333]">Our Blog</h2>

      <div className="grid lg:grid-cols-3 gap-4 p-4 ">
        {array.map((item, index) => {
          return (
            <article
              key={item.title + " " + index}
              className=" flex flex-col gap-4 border-[#C4C4C4] border-2 p-3"
            >
              <picture>
                <Image src={item.src} alt={item.title}></Image>
              </picture>
              <div className="flex flex-col gap-4 items-start  h-full">
                <h3 className="font-bold text-[#333333] border-l-4 border-orange-500 pl-2 max-w-[277px]">
                  {item.title}
                </h3>
                <p className="pl-3 text-[14px] text-[#333333] "> {item.text}</p>
                <button className="ml-3 mt-auto underline text-[#333333] font-bold">
                  Reed more
                </button>
              </div>
            </article>
          );
        })}
        <article className=" flex flex-col gap-4 border-[#C4C4C4] border-2 p-3">
          <button className="w-full h-full bg-gray-100">
            Go to all blogs post
          </button>
        </article>
      </div>
    </section>
  );
};
