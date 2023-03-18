// "use server"
// "use client"
import Image from "next/image";
import LinkedinLogo from "../public/linkedin.svg";
import GithubLogo from "../public/github.svg";
import PaperplaneLogo from "../public/paper-plane-solid.svg";
import Link from "next/link";

function Footer() {
  return (
    <section>
      <div className="flex  px-4 py-5 relative flex-wrap md:flex-nowrap justify-start pb-20">
        <Link href={"/"} className="min-w-[160px]">
          <div className="flex profile cursor-pointer group/profile mb-4">
            <div className=" pr-2">
              <Image
                src="/profile.jpg"
                height={40}
                width={40}
                alt="Picture of author"
                className=" rounded-full group-hover/profile:scale-110 transition"
              />
            </div>
            <div className="flex flex-col justify-end ">
              <h6 className="text-gray-700 font-bold">Jaeheon Kim</h6>
              <p className="text-sm text-gray-500 -top-1 relative">
                Web developer
              </p>
            </div>
          </div>
        </Link>
        <div className="socials flex gap-3 ml-12 mr-12 ">
          <a
            className="group/github w-8 bg-gray-200 rounded-full h-8 flex items-center justify-center "
            href="https://github.com/jae-the-castaway"
            target={"_blank"}
          >
            <GithubLogo
              className="group-hover/github:scale-110"
              width={16}
              alt="Github logo "
            />
          </a>
          <a
            className="group/mail w-8 bg-gray-200 rounded-full h-8 flex items-center justify-center "
            href="mailto:jaeheonkim95@gmail.com"
            target={"_blank"}
          >
            <PaperplaneLogo
              width={16}
              alt=" Paperplane logo for e-mail"
              className="group-hover/mail:scale-110"
            />
          </a>
          <a
            className="group/linkedin w-8 bg-gray-200 rounded-full h-8 flex items-center justify-center "
            href="https://www.linkedin.com/in/jae-the-castaway/"
            target={"_blank"}
          >
            <LinkedinLogo
              width={16}
              alt="Linkedin logo"
              className="group-hover/linkedin:scale-110"
            />
          </a>
        </div>
        <div className=" md:max-w-sm max-w-xl ">
          <p className="pb-6 text-sm text-gray-500">
            As enthousiastic as I am? Love to build something great together?
            Shoot me an e-mail or reach out to me on my socials.
          </p>
          <a
            href="mailto:jaeheonkim95@gmail.com"
            className="btn-primary btn-center py-4 text-emerald-700 font-bold pl-1"
          >
            jaeheonkim95@gmail.com
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-500 pb-6 pl-5">
        Copyright 2023, yours truly
      </p>
    </section>
  );
}

export default Footer;
