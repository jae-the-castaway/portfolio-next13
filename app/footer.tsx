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
      <div className="relative  flex flex-wrap justify-start px-4 pt-20  pb-20 md:flex-nowrap">
        <Link href={"/"} className="min-w-[160px]">
          <div className="profile group/profile mb-4 flex cursor-pointer">
            <div className=" pr-2">
              <Image
                src="/profile.jpg"
                height={40}
                width={40}
                alt="Picture of author"
                className=" rounded-full transition group-hover/profile:scale-110"
              />
            </div>
            <div className="flex flex-col justify-end ">
              <h6 className="font-bold text-gray-700">Jaeheon Kim</h6>
              <p className="relative -top-1 text-sm text-gray-500">
                Web developer
              </p>
            </div>
          </div>
        </Link>
        <div className="socials ml-12 mr-12 flex gap-3 ">
          <a
            className="group/github flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 "
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
            className="group/mail flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 "
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
            className="group/linkedin flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 "
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
        <div className=" max-w-xl md:max-w-sm ">
          <p className="pb-6 text-sm text-gray-500">
            As enthousiastic as I am? Love to build something great together?
            Shoot me an e-mail or reach out to me on my socials.
          </p>
          <a
            href="mailto:jaeheonkim95@gmail.com"
            className=" btn-center py-4 pl-1 font-bold text-emerald-700"
          >
            jaeheonkim95@gmail.com
          </a>
        </div>
      </div>
      <p className="pb-6 pl-5 text-sm text-gray-500">
        Copyright 2023, yours truly
      </p>
    </section>
  );
}

export default Footer;
