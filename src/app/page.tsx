import { AboutUs } from "@/components/AboutUs";
import { BestWorks } from "@/components/BestWorks";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OurBlog } from "@/components/OurBlog";
import { OurPartners } from "@/components/OurPartners";
import { WeTrusted } from "@/components/WeTrusted";

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto ">
      <Hero></Hero>
      <WeTrusted></WeTrusted>
      <BestWorks></BestWorks>
      <AboutUs></AboutUs>
      <OurPartners></OurPartners>
      <OurBlog></OurBlog>
      <Footer></Footer>
    </main>
  );
}
