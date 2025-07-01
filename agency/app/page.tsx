import Image from "next/image";
import Navbar from "./components/Navbar";
import { AuroraBackground } from "./components/ui/aurora-background";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AuroraBackground className="absolute inset-0 z-0" children={undefined} />
      <Navbar className="relative z-10" />

      <Hero />

      <Testimonials />

    </div>
    <Services />
    </main>
    
  );
}


