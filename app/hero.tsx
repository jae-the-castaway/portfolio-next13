// "use client";
// "use server"
import Image from "next/image";
import ProfilePicture from "../public/profile.jpg";
import ArrowRightSolid from "../public/arrow-right-solid.svg";
import Link from "next/link";

function HeroSection() {
  return (
    <section className=" container relative mx-auto max-w-xl px-4 md:max-w-2xl lg:max-w-4xl    ">
      <div className=" mx-auto flex flex-col justify-between md:flex-row">
        <div className="mr-2 pb-5 text-gray-500 lg:mr-4">
          <h6 className="subheader margin-bottom-8 text-xs font-semibold">
            Hi, nice to meet you!
          </h6>
          <h1 className="mb-4 text-4xl font-bold text-gray-700">
            I'm Jaeheon Kim
          </h1>
          <h4 className="text-xl leading-8  ">
            Web developer from South Korea creating beautiful, responsive
            websites for a better user experience.
          </h4>
          <h4 className="mb-4 text-xl leading-8">
            I am currently learning back-end web development.
          </h4>
          <Link
            className="btn-primary group py-4 font-bold text-emerald-700"
            href={"/about"}
          >
            Get to know me
            <ArrowRightSolid
              width={16}
              className=" ml-2 inline align-text-top duration-500 ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className=" flex flex-col justify-center md:max-w-[50%]">
          <Image
            src={ProfilePicture}
            className=" max-w-full rounded-2xl"
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
