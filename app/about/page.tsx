import { Inter } from "next/font/google";
import Navbar from "../navbar";
import Footer from "../footer";
import PhotoCollage from "./photo-collage";

import Image from "next/image";
import AboutMe from "./about-me";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <PhotoCollage />
      <div className="divider-vertical"></div>
      <Footer />
    </main>
  );
}
