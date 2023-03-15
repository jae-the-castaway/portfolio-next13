import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-red-300">
      <Link className="bg-teal-500" href={"/about"}>
        Go to the about
      </Link>
      <h1>Home</h1>
    </main>
  );
}
