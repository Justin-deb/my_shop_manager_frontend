import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center space-y-10">
      {/* <p className="text-center">landing page</p> */}
      {/* <ImageCarousel imageList={['/Oregon.png','/Oregon2.jpg']}></ImageCarousel> */}
      <Hero/>
      <div className="self-center border w-400 h-200 p-10 rounded-xl border-[#565E74]">
        <h3 className="text-4xl font-medium">Not a store owner?</h3>
        <span>
          Don't worry, you can still use this application
        </span>
      </div>
    </div>
  );
}
