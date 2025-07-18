"use client";

import {
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white  font-sans md:px-10"
            ref={containerRef}
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-6xl mb-4 from-black to-gray-700 max-w-4xl">
                    Our MVP Roadmap: From Idea to Launch
                </h2>
                <p className="text-gray-700  text-base md:text-2xl max-w-xl">
                    We help you turn bold ideas into a market-ready MVP in weeks, not years.
                    Here’s how our proven step-by-step process works:
                </p>
            </div>

            {/* Timeline */}
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        {/* Sticky desktop titles */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white  flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200  border-neutral-300  p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black  flex items-center gap-2">
                                <span className="flex items-center gap-1">
                                    <span className="text-black ">Step</span>
                                    <span className="text-blue-500">{index + 1}.</span>
                                </span>
                                {item.title}
                            </h3>

                        </div>

                        {/* Mobile titles */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black  flex items-center gap-1">
                                <span className="text-black ">Step</span>
                                <span className="text-blue-500">{index + 1}.</span> {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Scroll line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
