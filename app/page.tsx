import Navbar from "./navbar";
import HeroSection from "./hero";
import ProjectSection from "./projectSection";
import Footer from "./footer";


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
