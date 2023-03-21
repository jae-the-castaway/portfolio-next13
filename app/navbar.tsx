// "use server"
// "use client"
import Image from "next/image";
import LinkedinLogo from "../public/linkedin.svg";
import GithubLogo from "../public/github.svg";
import PaperplaneLogo from "../public/paper-plane-solid.svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="">
      <div className=" absolute -z-0 h-40 w-full bg-gradient-to-tl from-[#ffffff] via-[#ffffff] to-emerald-100"></div>
      <div className="relative flex justify-between px-4 py-5">
        <Link href={"/"}>
          <div className="profile group/profile flex cursor-pointer">
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
        <div className="socials flex gap-3">
          <a
            className="group/github flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 "
            href="https://github.com/jae-the-castaway"
            target={"_blank"}
          >
            <GithubLogo
              className="transition group-hover/github:scale-110"
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
              className="transition group-hover/mail:scale-110"
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
              className="transition group-hover/linkedin:scale-110"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
