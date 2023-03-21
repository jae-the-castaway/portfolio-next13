import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import HeroSection from "./hero";
import ProjectSection from "./projectSection";
import Footer from "./footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 ">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
