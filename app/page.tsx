import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <main className="relative bg-background flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 pb-10">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
