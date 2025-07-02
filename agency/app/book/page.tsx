'use client'
import React from 'react'
import { InlineWidget } from "react-calendly"
import { AuroraBackground } from '../components/ui/aurora-background'
import Link from 'next/link';

const Book = () => {
    return (
        <>
            <div className="flex flex-col   w-full  h-scree">
                <AuroraBackground children={undefined} />

                <div className="text-4xl md:text-7xl font-bold text-black text-center 
                    bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Book a meeting
                    <div>
                        <Link href="/" className="text-blue-600 hover:underline mb-8">
                            <button className="px-4 py-1 md:px-6 md:py-2 text-sm md:text-base rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                                ← Back to Home
                            </button>
                        </Link>
                    </div>

                </div>



                <InlineWidget url="https://calendly.com/lukejwalsh1701/30min" />
            </div>
        </>
    );
};

export default Book;