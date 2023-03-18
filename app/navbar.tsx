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
      <div className=" w-full h-40 absolute bg-gradient-to-tl from-[#ffffff] via-[#ffffff] to-emerald-100 -z-0"></div>
      <div className="flex justify-between px-4 py-5 relative">
        <Link href={"/"}>
          <div className="flex profile cursor-pointer group/profile">
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
        <div className="socials flex gap-3">
          <a
            className="group/github w-8 bg-gray-200 rounded-full h-8 flex items-center justify-center "
            href="https://github.com/jae-the-castaway"
            target={"_blank"}
          >
            <GithubLogo
              className="group-hover/github:scale-110 transition"
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
              className="group-hover/mail:scale-110 transition"
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
              className="group-hover/linkedin:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
