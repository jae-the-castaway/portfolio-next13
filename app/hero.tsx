// "use client";
// "use server"
import Image from "next/image";
import ProfilePicture from "../public/profile.jpg";
import ArrowRightSolid from "../public/arrow-right-solid.svg";
import Link from "next/link";

function HeroSection() {
  return (
    <section className=" container relative margin-top-40 px-4 max-w-xl sm: md:max-w-2xl lg:max-w-4xl mx-auto    ">
      <div className=" flex flex-col md:flex-row mx-auto justify-between">
        <div className="pb-5 text-gray-500 mr-2 lg:mr-4">
          <h6 className="subheader margin-bottom-8 text-xs font-semibold">
            Hi, nice to meet you!
          </h6>
          <h1 className="text-gray-700 text-4xl font-bold mb-4">
            I'm Jaeheon Kim
          </h1>
          <h4 className="text-xl leading-8  ">
            Web developer from South Korea creating beautiful, responsive
            websites for a better user experience.
          </h4>
          <h4 className="text-xl leading-8 mb-4">
            I am currently learning back-end web development.
          </h4>
          <Link
            className="btn-primary group py-4 text-emerald-700 font-bold"
            href={"/about"}
          >
            Get to know me
            <ArrowRightSolid
              width={16}
              alt="Linkedin logo"
              className=" align-text-top inline ml-2 group-hover:translate-x-1 duration-500 ease-in-out"
            />
          </Link>
        </div>
        <div className=" flex justify-center flex-col md:max-w-[50%]">
          <Image
            src={ProfilePicture}
            className=" rounded-2xl max-w-full"
            alt="picture of Jaeheon kim"
            // width={400}
          />
        </div>
      </div>
      <div className="divider-vertical"></div>
    </section>
  );
}

export default HeroSection;
