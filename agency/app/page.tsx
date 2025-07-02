
import Navbar from "./components/Navbar";
import { AuroraBackground } from "./components/ui/aurora-background";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import FAQS from "./components/Faq";
import Footer from "./components/Footer";
import Plans from "./components/Pricing";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tekly Studios | Cloud & AI Solutions for Growth",
  description:
    "Discover Tekly Studios: your partner for DevOps, cloud infrastructure, AI agents, and modern app development. Let's build something great together.",
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Aurora should cover the entire page */}
      <AuroraBackground className="fixed inset-0 -z-10" children={undefined} />

      <Navbar className="relative z-10" />
      <Hero/>
      <Testimonials />
      <Services />
      <Timeline />
      <Plans />
      <FAQS />
      <Footer />
    </main>
  );
}

