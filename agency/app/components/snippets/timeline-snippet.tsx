"use client";

import React from "react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function TimelineDemo() {
    const data = [
        {
            title: "Discovery & Strategy",
            content: (
                <div className="max-w-xl">
                    <p className="text-neutral-900 dark:text-neutral-100 text-base md:text-2xl mb-4">
                        We clarify your vision, define goals, and outline core features through collaborative workshops. You get a clear product strategy, timeline, and roadmap.
                    </p>
                    <Image
                        src="/strategy.png"
                        alt="Discovery & Strategy illustration"
                        className="w-64  mx-auto"
                        width={400}
                        height={400}
                    />
                </div>
            ),
        },
        {
            title: "UX/UI Design",
            content: (
                 <div className="max-w-xl">
                <p className="text-neutral-900 dark:text-neutral-100 text-base  md:text-2xl max-w-xl">
                    Our designers create user flows, wireframes, and high-fidelity prototypes. You see exactly how your MVP will look and feel before development starts.
                </p>
                 <Image
                        src="/UI.png"
                        alt="Discovery & Strategy illustration"
                        className="w-64  mx-auto"
                        width={400}
                        height={400}
                    />
                </div>
            ),
        },
        {
            title: "Agile Development",
            content: (
                <div className="max-w-xl">
                <p className="text-neutral-900 dark:text-neutral-100 text-base  md:text-2xl max-w-xl">
                    We build your MVP with rapid sprints, regular demos, and your feedback. Expect a functional, testable product in weeks — ready for real users.
                </p>
                 <Image
                        src="/agile.png"
                        alt="Discovery & Strategy illustration"
                        className="w-64  mx-auto"
                        width={400}
                        height={400}
                    />
                </div>
            ),
        },
        {
            title: "QA & Launch",
            content: (
                <div className="max-w-xl">
                <p className="text-neutral-900 dark:text-neutral-100 text-base  md:text-2xl max-w-xl">          Rigorous testing ensures quality and performance. We deploy your MVP to production and provide support for a smooth launch and early user feedback.
                </p>
                <Image
                        src="/launch.png"
                        alt="Discovery & Strategy illustration"
                        className="w-64  mx-auto"
                        width={400}
                        height={400}
                    />

                </div>
            ),
        },
        {
            title: "Iterate & Scale",
            content: (
                <div className="max-w-xl">
                <p className="text-neutral-900 dark:text-neutral-100 text-base md:text-2xl max-w-xl">
                    After launch, we help you gather insights and iterate quickly. Optimize features, onboard more users, and grow with confidence.
                </p>
                 <Image
                        src="/iterate.png"
                        alt="Discovery & Strategy illustration"
                        className="w-64  mx-auto"
                        width={400}
                        height={400}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
