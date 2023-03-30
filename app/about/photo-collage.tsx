import Image from "next/image";

function PhotoCollage() {
  return (
    <div className="mx-auto mt-6 px-4 pt-10">
      <div className="">
        <div className="mx-auto flex h-[900px] max-w-7xl flex-col justify-center gap-3 md:mt-10 lg:mt-0 lg:flex-row">
          <div className="flex flex-col  justify-center gap-3">
            <div className=" h-64 w-full overflow-hidden rounded-t-3xl md:h-80 lg:h-auto  lg:rounded-tr-none">
              <Image
                className=" relative -top-[200px] w-full object-cover lg:-top-[0px] "
                src={"/static/1.jpg"}
                alt="profile photo in air force"
                width={200}
                height={200}
              />
            </div>
            <div className=" h-64 overflow-hidden  md:h-80 lg:h-auto lg:rounded-bl-3xl">
              <Image
                className=" relative  -top-[50px] w-full object-cover"
                src={"/about-me/soldering.jpeg"}
                alt="placeholder for image"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 lg:h-auto">
            <div className=" h-64 overflow-hidden  md:h-80  lg:rounded-tr-3xl">
              <Image
                className=" relative -top-[250px] w-full object-cover sm:-top-[350px] md:-top-[450px] lg:-top-[350px] "
                src={"/about-me/couple.jpeg"}
                alt="placeholder for image"
                width={1000}
                height={1000}
              />
            </div>{" "}
            <div className=" lg:round h-64 overflow-hidden rounded-b-3xl md:h-80 lg:h-auto lg:rounded-bl-none ">
              <Image
                className="relative -top-[250px] w-full object-cover sm:-top-[350px]  md:-top-[450px] lg:-top-[0px] "
                src={"/about-me/hiking-with-camera.jpeg"}
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
