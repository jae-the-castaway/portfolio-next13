import Image from "next/image";

function PhotoCollage() {
  return (
    <div className="mx-auto mt-6 px-4">
      <div className="">
        <div className="mx-auto flex h-[900px] max-w-7xl flex-col justify-center gap-3 md:flex-row">
          <div className="flex flex-col  gap-3">
            <div className=" h-64 w-full overflow-hidden   rounded-t-3xl md:h-auto ">
              <Image
                className=" relative w-full object-cover "
                src={"/about-me/1.jpg"}
                alt="placeholder for image"
                width={1000}
                height={1000}
              />
            </div>
            <div className=" h-64 overflow-hidden md:h-auto">
              <Image
                className=" relative  w-full object-cover"
                src={"/about-me/3.jpg"}
                alt="placeholder for image"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:h-auto">
            <div className=" h-64 overflow-hidden ">
              <Image
                className=" relative w-full object-cover "
                src={"/about-me/2.jpg"}
                alt="placeholder for image"
                width={1000}
                height={1000}
              />
            </div>{" "}
            <div className=" md:round h-64 overflow-hidden rounded-b-3xl md:h-auto ">
              <Image
                className=" relative  w-full object-cover "
                src={"/about-me/4.jpeg"}
                alt="placeholder for image"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCollage;
