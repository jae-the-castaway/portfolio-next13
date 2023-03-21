// "use client";
// "use server"
import Image from "next/image";
import ArrowUpRight from "../public/arrow-up-right.svg";

function HeroSection() {
  return (
    <>
      {/* Seenit - simple Reddit clone app */}
      <section className=" relative mx-auto my-10 px-4 ">
        <div className=" mx-auto min-h-[500px] max-w-5xl rounded-2xl bg-gray-900">
          <div className="group flex min-h-[500px]  flex-col md:flex-row">
            <div className="  group/title cursor-pointer pt-8 pb-6 after:px-6 md:pl-12">
              <a href="https://seenit-reddit-clone.netlify.app">
                <h2 className="text-2xl font-bold text-gray-100">
                  Seenit - Simple Reddit clone app
                </h2>
                <p className="py-6 text-gray-100">
                  This is Seenit, simple reddit clone app only fetching images
                  and videos from any subreddit. It's built with React and
                  Tailwind.
                </p>
                <div className=" btn-center group-hover/title:btn-project-hover inline py-4 pl-1 font-bold text-emerald-300">
                  Check out the app
                </div>
                <ArrowUpRight
                  width={16}
                  alt="arrow-up-right icon"
                  className="  ml-2 inline duration-500 ease-in-out group-hover/title:translate-x-1"
                />
              </a>
            </div>
            <div className="overflow-hidden    rounded-b-2xl md:rounded-2xl">
              <Image
                className=" md: relative origin-bottom-right translate-x-8 scale-95 rounded-2xl bg-contain transition-all duration-700 ease-in-out group-hover:scale-100 md:origin-right  md:translate-y-1/2 md:scale-100 md:group-hover:scale-105"
                src="/seenit.png"
                alt="Capture of an website, Seenit"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" container relative mx-auto max-w-5xl px-4 ">
        <div className=" rounded-2xl bg-gray-900">
          <div className="group flex flex-col  md:flex-row">
            <div className=" group/title cursor-pointer px-6 pt-8 pb-6 md:px-12">
              <a href="https://seenit-reddit-clone.netlify.app">
                <h2 className="text-2xl font-bold text-gray-100">
                  Seenit - Simple Reddit clone app
                </h2>
                <p className="py-6 text-gray-100">
                  This is Seenit, simple reddit clone app only fetching images
                  and videos from any subreddit. It's built with React and
                  Tailwind.
                </p>
                <div className=" btn-center group-hover/title:btn-project-hover inline py-4 pl-1 font-bold text-emerald-300">
                  Check out the app
                </div>
                <ArrowUpRight
                  width={16}
                  alt="arrow-up-right icon"
                  className=" ml-2 inline duration-500 ease-in-out group-hover/title:translate-x-1"
                />
              </a>
            </div>
            <div className="overflow-hidden  rounded-b-2xl md:rounded-2xl">
              <Image
                className=" relative origin-bottom-right translate-x-8 scale-95 rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-100 md:origin-right md:scale-100  md:group-hover:scale-105 "
                src="/seenit.png"
                alt="Capture of an website, Seenit"
                width={900}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
