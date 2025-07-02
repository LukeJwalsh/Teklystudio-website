import { HoverEffect } from "../ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiMonitor,
  PiCloud,
  PiCpu,
  PiRobot,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}



export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiCloud className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, infrastructure automation, and scalable cloud management for AWS, Azure, and GCP.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiCpu className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Custom Development",
    description:
      "Full-stack web, backend, and enterprise software tailored to your business needs.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiRobot className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "AI & ML Solutions",
    description:
      "Machine learning models, generative AI, and autonomous agent systems for smarter workflows.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Mobile & Web Apps",
    description:
      "User-friendly iOS, Android, and web applications designed to engage and scale with your business.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "UX/UI Design",
    description:
      "Crafting intuitive and engaging user experiences for software and digital products.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Consulting & Support",
    description:
      "Expert guidance, strategy, and ongoing support to keep your systems optimized and secure.",
  },
];
