import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      {/* <p className="text-center">landing page</p> */}
      {/* <ImageCarousel imageList={['/Oregon.png','/Oregon2.jpg']}></ImageCarousel> */}
      <Hero></Hero>
    </div>
  );
}
