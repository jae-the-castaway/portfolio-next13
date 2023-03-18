// "use client";
// "use server"
import Image from "next/image";
import ArrowUpRight from "../public/arrow-up-right.svg";

function HeroSection() {
  return (
    <section className=" container relative px-4 ">
      <div className=" bg-gray-900 w-full rounded-2xl h-max py-4">
        <div className="flex flex-col">
          <div className=" pt-6 pb-12 px-6 group/seenit">
            <a href="https://github.com">
              <h2 className="text-gray-100 font-bold text-3xl">
                Seenit - Simple Reddit clone app
              </h2>
              <p className="text-gray-100 text-xl py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                neque!
              </p>
              <div className="btn-primary btn-center group-hover/seenit:btn-project-hover text-emerald-300 font-bold pl-1">
                Check out the app
              </div>
              <ArrowUpRight
                width={16}
                alt="arrow-up-right icon"
                className=" inline ml-2 duration-500 ease-in-out group-hover/seenit:translate-x-1"
              />
            </a>
          </div>
          <div>
            <Image
              src="/seenit.png"
              alt="Capture of an website, Seenit"
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
