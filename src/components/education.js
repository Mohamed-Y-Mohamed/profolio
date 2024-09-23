"use client";

import React, { useEffect } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import Lottie from "lottie-react";
import lottieFile from "../assets/study.json"; // Adjust this path to your lottie file location

// Education data
const educations = [
    {
        id: 1,
        title: "Bachelor of Engineering in Software Engineering",
        duration: "2020 - 2024",
        institution: "University of Westminster, London",
    },
    {
        id: 2,
        title: "Higher Secondary Certificate",
        duration: "2018 - 2020",
        institution: "Noakhali Islamia Kamil Madrasah",
    },
    {
        id: 3,
        title: "Secondary School Certificate",
        duration: "2008 - 2018",
        institution: "Baitus Saif Islamia Madrasah",
    },
];

// GlowCard component (integrated into Education)
const GlowCard = ({ children, identifier }) => {
    useEffect(() => {
        const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
        const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

        const CONFIG = {
            proximity: 40,
            spread: 80,
            blur: 12,
            gap: 32,
            vertical: false,
            opacity: 0,
        };

        const UPDATE = (event) => {
            for (const CARD of CARDS) {
                const CARD_BOUNDS = CARD.getBoundingClientRect();
                if (
                    event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
                    event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
                    event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
                    event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
                ) {
                    CARD.style.setProperty("--active", 1);
                } else {
                    CARD.style.setProperty("--active", CONFIG.opacity);
                }

                const CARD_CENTER = [
                    CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
                    CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
                ];

                let ANGLE =
                    (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) /
                    Math.PI;

                ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

                CARD.style.setProperty("--start", ANGLE + 90);
            }
        };

        document.body.addEventListener("pointermove", UPDATE);

        const RESTYLE = () => {
            CONTAINER.style.setProperty("--gap", CONFIG.gap);
            CONTAINER.style.setProperty("--blur", CONFIG.blur);
            CONTAINER.style.setProperty("--spread", CONFIG.spread);
            CONTAINER.style.setProperty(
                "--direction",
                CONFIG.vertical ? "column" : "row"
            );
        };

        RESTYLE();
        UPDATE();

        // Cleanup event listener
        return () => {
            document.body.removeEventListener("pointermove", UPDATE);
        };
    }, [identifier]);

    return (
        <div className={`glow-container-${identifier} glow-container`}>
            <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#BFC5C5] transition-all duration-300 relative bg-[#0d1224] text-gray-200 rounded-xl hover:border-transparent w-full`}>
                <div className="glows"></div>
                {children}
            </article>
        </div>
    );
};

// Lottie Animation Component
const AnimationLottie = ({ animationPath }) => {
    return (
        <Lottie
            animationData={animationPath}
            loop={true}
            autoplay={true}
            style={{ width: '95%' }}
        />
    );
};

function Education() {
    return (
        <div id="education" className="relative z-50 my-12 lg:my-24 bg-[#0d1224] text-[#E8E8E8]">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                    <span className="bg-[#2B2E35] w-fit text-[#E8E8E8] p-2 px-5 text-6xl rounded-md">
                        Education
                    </span>
                    <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Lottie Animation */}
                    <div className="flex justify-center items-start">
                        <div className="w-3/4 h-3/4">
                            <AnimationLottie animationPath={lottieFile} />
                        </div>
                    </div>

                    {/* Education Cards */}
                    <div>
                        <div className="flex flex-col gap-6" style={{ maxWidth: "40vw" }}>
                            {educations.map((education) => (
                                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                                    <div className="p-3 relative text-white">
                                        <div className="flex justify-center">
                                            <p className="text-xs sm:text-sm text-[#3BC4C4]">{education.duration}</p>
                                        </div>
                                        <div className="flex items-center gap-x-8 px-3 py-5">
                                            <div className="text-[#3BC4C4] transition-all duration-300 hover:scale-125">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div>
                                                <p className="text-base sm:text-xl mb-2 font-medium uppercase">{education.title}</p>
                                                <p className="text-sm sm:text-base">{education.institution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
