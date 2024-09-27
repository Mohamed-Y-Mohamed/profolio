import React, { useEffect } from "react";
import { FcWorkflow } from "react-icons/fc";
import { FaLayerGroup } from "react-icons/fa";
import { SiKotlin, SiSwift, SiMongodb, SiFirebase, SiMysql } from "react-icons/si"; // Add SiJava here
import { FaJava } from "react-icons/fa";

import './style/skills.css';
import { FaReact, FaPython, FaJs } from "react-icons/fa";

// Mapping skill names to react-icons
const skillsImage = (skill) => {
    const skillID = skill.toLowerCase().replace(" ", "").replace(".", "");

    const skillIconMapping = {
        javascript: <FaJs size={45} color="#f7df1e" />,
        react: <FaReact size={45} color="#61dafb" />,
        python: <FaPython size={45} color="#3BC4C4" />,
        algorithm: <FaJava size={45} color="#f89820" />, // Use Java icon for Java
        oop: <FaJava size={45} color="#f89820" />, // Use Java icon for OOP
        java: <FaJava size={45} color="#f89820" />, // Use Java icon for Java
        kotlin: <SiKotlin size={45} color="#7963fc" />,
        swift: <SiSwift size={45} color="#f05138" />,
        mongodb: <SiMongodb size={45} color="#4DB33D" />,
        firebase: <SiFirebase size={45} color="#3c873a" />,
        mysql: <SiMysql size={45} color="#00758F" />,
        // Add more mappings as needed...
    };

    return skillIconMapping[skillID] || <FaJs size={40} color="#cccccc" />; // Fallback to JavaScript icon
};

// List of skills to display
const skillsData = [
    "JavaScript",
    "React",
    "Python",
    "Algorithms",
    "OOP", // OOP uses the Java icon now
    "Java", // Java added to the skills list
    "Kotlin",
    "Swift",
    "MongoDB",
    "Firebase",
    "MySQL",
];

function Skills() {
    useEffect(() => {
        skillsData.forEach((_, id) => {
            const CONTAINER = document.querySelector(`.glow-container-${id}`);
            const CARDS = document.querySelectorAll(`.glow-card-${id}`);

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
                        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
                            180) /
                        Math.PI;

                    ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

                    CARD.style.setProperty("--start", ANGLE + 90);
                }
            };

            document.body.addEventListener("pointermove", UPDATE);

            const RESTYLE = () => {
                if (CONTAINER) {
                    CONTAINER.style.setProperty("--gap", CONFIG.gap);
                    CONTAINER.style.setProperty("--blur", CONFIG.blur);
                    CONTAINER.style.setProperty("--spread", CONFIG.spread);
                    CONTAINER.style.setProperty(
                        "--direction",
                        CONFIG.vertical ? "column" : "row"
                    );
                }
            };

            RESTYLE();
            UPDATE();

            return () => {
                document.body.removeEventListener("pointermove", UPDATE);
            };
        });
    }, []);

    return (
        <div id="skills" className="relative z-50 my-12 lg:my-24" style={{ backgroundColor: "#0A1F44", paddingBottom: "10vh" }}>
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                    <span className="bg-[#0d1224] w-fit text-[#E8E8E8] p-2 px-5 text-6xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                </div>
            </div>

            {/* Skills Container */}
            <div className="w-full my-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-5">
                {skillsData.map((skill, id) => (
                    <div className={`glow-container-${id} glow-container`} key={id}>
                        <article
                            className={`glow-card glow-card-${id} h-fit cursor-pointer border border-[#BFC5C5] transition-all duration-300 relative text-[#E8E8E8] rounded-xl hover:border-transparent w-full`}
                            style={{ backgroundColor: "#2B2E35" }} // Gunmetal Grey background
                        >
                            <div className="glows"></div>
                            <div className="w-full h-fit flex flex-col items-center justify-center transition-all duration-500 p-5 rounded-lg group relative hover:scale-[1.15]">
                                <div className="h-full w-full rounded-lg border border-[#BFC5C5] bg-[#11152c] shadow-none group-hover:border-[#3BC4C4] transition-all duration-500">
                                    <div className="flex justify-center">
                                        <div className="w-3/4">
                                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                                        <div className="h-8 sm:h-10">{skillsImage(skill)}</div>
                                        <p className="text-[#E8E8E8] text-sm sm:text-lg">{skill}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
