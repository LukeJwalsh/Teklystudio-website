import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Tekly Studios",
  description:
    "Get in touch with Tekly Studios. Send us your project ideas and let's collaborate on scalable, innovative tech solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen justify-items-center bg-neutral-50 pt-20 px-4">
      <Link href="/" className="text-blue-600 hover:underline mb-8">
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          ← Back to Home
        </button>
      </Link>

      <ContactForm />
   
    </main>
  );
}

