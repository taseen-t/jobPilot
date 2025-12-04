import { FiUserPlus, FiUploadCloud, FiSearch, FiCheckCircle } from "react-icons/fi";
import React from "react";
import DashedCurvedArrow from "./DashedCurvedArrow";

const steps = [
    {
        icon: FiUserPlus,
        title: "Create account",
        description: "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
    },
    {
        icon: FiUploadCloud,
        title: "Upload CV/Resume",
        description: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales",
    },
    {
        icon: FiSearch,
        title: "Find suitable job",
        description: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
    },
    {
        icon: FiCheckCircle,
        title: "Apply job",
        description: "Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-16 text-3xl font-bold text-gray-900">How Jobpilot works</h2>

                <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="group relative z-10 flex flex-1 flex-col items-center rounded-lg p-6 transition-all hover:bg-white hover:shadow-lg">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-lg font-semibold text-gray-900">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <>
                                  
                                    <div className="relative h-0 w-full z-50 lg:hidden -mt-8 pointer-events-none">
                                        <div
                                            className={`absolute ${index % 2 === 0
                                                ? "-right-20 top-1/2 translate-y-1 rotate-90"
                                                : "-left-20 top-1/2 translate-y-1 rotate-[270deg] scale-x-[-1]"
                                                }`}
                                        >
                                            <DashedCurvedArrow width={200} />
                                        </div>
                                    </div>

                                    
                                    <div
                                        className={`hidden lg:block absolute z-20 w-[200px] pointer-events-none ${index === 1 ? "top-52" : "top-12"}`}
                                        style={{
                                            left: `${(index + 1) * 25}%`,
                                            transform: 'translateX(-50%)'
                                        }}
                                    >
                                        <DashedCurvedArrow
                                            width="100%"
                                            className={index === 1 ? "rotate-180 scale-x-[-1]" : ""}
                                        />
                                    </div>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
