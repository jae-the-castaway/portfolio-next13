// "use client";
// "use server"
import Image from "next/image";
import ArrowUpRight from "../public/arrow-up-right.svg";

function HeroSection() {
  return (
    <section className=" container relative px-4 mx-auto ">
      <div className=" bg-gray-900 rounded-2xl h-max">
        <div className="flex flex-col md:flex-row  group">
          <div className=" pt-6 pb-6 px-6 group/title cursor-pointer">
            <a href="https://seenit-reddit-clone.netlify.app">
              <h2 className="text-gray-100 font-bold text-3xl">
                Seenit - Simple Reddit clone app
              </h2>
              <p className="text-gray-100 text-xl py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                neque!
              </p>
              <div className=" inline btn-center group-hover/title:btn-project-hover py-4 text-emerald-300 font-bold pl-1">
                Check out the app
              </div>
              <ArrowUpRight
                width={16}
                alt="arrow-up-right icon"
                className=" inline ml-2 duration-500 ease-in-out group-hover/title:translate-x-1"
              />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl min-h-[300px]">
            <Image
              className=" scale-90 group-hover:scale-100 relative ease-in-out transition-all duration-700 translate-x-8 translate-y-5 rounded-l-xl"
              src="/seenit.png"
              alt="Capture of an website, Seenit"
              width={900}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
