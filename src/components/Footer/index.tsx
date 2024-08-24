import Image from "next/image";
import srcLogo from "./Logo.png";
import srcSocial1 from "./Vector.png";
import srcSocial2 from "./Vector-1.png";
import srcSocial3 from "./Vector-2.png";

export const Footer = () => {
  return (
    <div className="bg-[#171A1A] ">
      <section className="m-auto grid lg:grid-cols-4 text-white min-h-[400px] lg:py-[70px] max-w-[1280px] gap-5 p-6  lg:place-items-start place-content-center">
        <article className="flex flex-col gap-[40px]">
          <picture>
            <Image src={srcLogo} alt="logo of company"></Image>
          </picture>
          <div className="flex flex-col gap-[20px]">
            <h3 className="font-bold text-[18px]">Briefly about us</h3>
            <p className="text-[13px]">
              We thoroughly study and then discuss with our customers the
              appearance of each product. We rarely repeat ourselves, because
              we know that you value individuality and are not ready
              to be content with ready-made solutions.
            </p>
          </div>
        </article>
        <div>
          <h3 className="font-bold text-[18px] text-white py-4">Menu</h3>
          <ul className="text-[14px] gap-[10px] flex flex-col">
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Company</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[18px] text-white py-4">Services</h3>
          <ul>
            <li>Interior Design</li>
            <li>Design</li>
            <li>Wood supply</li>
            <li>Repair</li>
            <li>Concept</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[18px] text-white py-4">
            Briefly about us
          </h3>
          <p>
            We thoroughly study and then discuss with our customers the
            appearance of each product. We rarely repeat ourselves, because
            we know that you value individuality and are not ready to be content
            with ready-made solutions.
          </p>
          <div className="flex flex-row gap-4">
            <button className="w-10 h-10 border-[#ffffff46] border-solid border-2 flex items-center justify-center">
              <picture>
                <Image src={srcSocial2} alt="image of logo"></Image>
              </picture>
            </button>
            <button className="w-10 h-10 border-[#ffffff46] bg-[#F88500] border-solid border-2 flex items-center justify-center">
              <picture>
                <Image src={srcSocial1} alt="image of logo"></Image>
              </picture>
            </button>
            <button className="w-10 h-10 border-[#ffffff46] border-solid border-2 flex items-center justify-center">
              <picture>
                <Image src={srcSocial3} alt="image of logo"></Image>
              </picture>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
