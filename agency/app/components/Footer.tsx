"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-300 px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="text-2xl font-bold text-blue-400">
                        Tekly Studios
                    </Link>
                    <div className="text-white">
                        <strong>Contact Us</strong>
                        <div className="pt-2 py-1">
                            (555) - 555 - 555
                        </div>
                        <div>
                            TeklyStudio@gmail.com
                        </div>
                    </div>
                    <p className="text-sm text-neutral-500">
                        &copy; {new Date().getFullYear()}  Tekly Studios. All rights reserved.
                    </p>
                </div>

                {/* Center: Nav Links */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-white">Resources</h4>
                        <Link href="/blog" className="hover:underline">
                            Blog
                        </Link>
                        <Link href="/faq" className="hover:underline">
                            FAQ
                        </Link>
                        <Link href="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Terms of Service
                        </Link>
                    </div>
                </div>

                {/* Right: Social Icons */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-white">Follow Us</h4>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" target="_blank">
                            <FaFacebook className="w-5 h-5 hover:text-white" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <FaTwitter className="w-5 h-5 hover:text-white" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <FaLinkedin className="w-5 h-5 hover:text-white" />
                        </Link>
                        <Link href="https://github.com" target="_blank">
                            <FaGithub className="w-5 h-5 hover:text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
