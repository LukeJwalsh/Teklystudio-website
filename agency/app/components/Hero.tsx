import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="relative z-20 flex flex-col items-center text-center px-4 pt-20 md:pt-40 pb-20">
            <h1 className="pt-20 text-4xl md:text-7xl font-bold text-black">
                Tekly Studio
            </h1>
            <p className="pt-4 text-xl md:text-3xl text-gray-700">
                We turn your dreams into reality
            </p>
            <p className="pt-4 text-base md:text-xl text-gray-700">
                Contact us to get started
            </p>
            <div className="pt-2 hidden md:flex">
                <Link
                    href="/book"
                    
                >
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B7FFFF_0%,#0062FFFF_50%,#B3D6FFFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Book a Call
                        </span>
                    </button>
                </Link>


            </div>
        </section>
    )
}

export default Hero