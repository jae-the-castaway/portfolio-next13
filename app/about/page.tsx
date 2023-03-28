import { Inter } from "next/font/google";
import Navbar from "../navbar";
import Footer from "../footer";
import PhotoCollage from "./photo-collage";
import AboutMe from "./about-me";
import OnTheSide from "./on-the-side";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <PhotoCollage />
      <div className="divider-vertical md:mt-64 lg:mt-32 mt-32 "></div>
      <div className="mx-4 flex">
        <div className=" mx-auto flex h-36 border-l-4 border-emerald-700">
          <div className="justify-cente mb-6 flex flex-col px-4">
            <h3 className=" mb-4 mt-4 text-3xl font-bold text-gray-700">
              Simplicity is the ultimate sophistication.
            </h3>
            <p className="px-4 text-2xl italic text-gray-500  ">
              - Leonardo da Vinci
            </p>
          </div>
        </div>
      </div>
      <OnTheSide />
      <Footer />
    </main>
  );
}
