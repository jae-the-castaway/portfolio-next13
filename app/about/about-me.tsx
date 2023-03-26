import Image from "next/image";
import LinkedinLogo from "../public/linkedin.svg";
import GithubLogo from "../public/github.svg";
import PaperplaneLogo from "../public/paper-plane-solid.svg";
import Link from "next/link";
import AngleRight from "../../public/angle-right-solid.svg";

function AboutMe() {
  return (
    <div className=" relative mx-auto mt-6 mb-10 px-4">
      <div className="mx-auto mt-5 flex max-w-xl flex-col px-4 md:max-w-2xl lg:max-w-4xl lg:flex-row">
        <div className=" pr-4 md:pr-10">
          <h1 className=" mb-4 text-4xl font-bold text-gray-700  ">About me</h1>
          <h4 className="mb-4 text-xl leading-8 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eaque maiores asperiores consequuntur veniam ab soluta itaque
            perferendis commodi cumque!
          </h4>
          <h4 className=" text-xl leading-8 text-gray-500  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eaque maiores asperiores consequuntur veniam ab soluta itaque
            perferendis commodi cumque!
          </h4>
        </div>
        <div className="mt-14">
          <p className=" mb-5 text-lg font-bold text-gray-500">
            Technologies I've been working with recently
          </p>
          <ul className="grid min-w-[350px] max-w-[50%] grid-cols-2">
            <li className=" text-gray-500">
              <AngleRight width={12} className="mr-3 inline " />
              Javascript
            </li>
            <li className=" text-gray-500">
              <AngleRight width={12} className="mr-3 inline " />
              Typescript
            </li>
            <li className=" text-gray-500">
              <AngleRight width={12} className="mr-3 inline " />
              Next.js
            </li>
            <li className=" text-gray-500">
              <AngleRight width={12} className="mr-3 inline " />
              Tailwind
            </li>
            <li className=" text-gray-500">
              <AngleRight width={12} className="mr-3 inline " />
              Node.js
            </li>
            <li className=" text-gray-500">
              <AngleRight width={12} className="mr-3 inline " />
              Styled &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
