import AngleRight from "../../public/angle-right-solid.svg";

function AboutMe() {
  return (
    <div className=" mt-50 relative mx-auto mb-40 mt-6 px-4">
      <div className="mx-auto mt-5 flex max-w-xl flex-col px-4 md:max-w-2xl lg:max-w-4xl lg:flex-row">
        <div className=" pr-4 md:pr-10">
          <h1 className=" mb-4 text-4xl font-bold text-gray-700  ">About me</h1>
          <h4 className="mb-4 text-xl leading-8 text-gray-500 ">
            I had worked for Republic of Korea Air Force as a Master Sergeant
            for 7 years, but always yearned for more. Becoming a husband to a
            beatiful wife made me grow a big heart, and pushed me to challenge
            myself, resulting in my switching over to the tech industry.
          </h4>
          <h4 className=" text-xl leading-8 text-gray-500  ">
            I have a passion for creating accessible and user-friendly websites.
            My process starts with a thorough understanding of the project
            requirements, target audience, and business objectives. Then, I
            create a wireframe and mockup that outlines the site's structure,
            layout, and user flow. and then, I use my coding
            skills to bring the site to life, using HTML, CSS, JavaScript, and
            other web technologies as needed.
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
