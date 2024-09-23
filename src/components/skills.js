

import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaAngular, FaReact, FaPython, FaDocker, FaVuejs, FaJs, FaNodeJs } from "react-icons/fa"; // Icons for skills
import './style/skills.css'; // Custom CSS for styles

// Mapping skill names to react-icons
const skillsImage = (skill) => {
    const skillID = skill.toLowerCase().replace(" ", "").replace(".", "");

    const skillIconMapping = {
        angular: <FaAngular size={35} color="#3BC4C4" />, // Cyan or Teal
        javascript: <FaJs size={35} color="#f7df1e" />,
        react: <FaReact size={35} color="#61dafb" />,
        vue: <FaVuejs size={35} color="#42b883" />,
        python: <FaPython size={35} color="#3BC4C4" />,
        docker: <FaDocker size={35} color="#3BC4C4" />,
        nodejs: <FaNodeJs size={35} color="#3c873a" />,
        // Add more mappings as needed...
    };

    return skillIconMapping[skillID] || <FaJs size={40} color="#cccccc" />; // Fallback to JavaScript icon
};

// List of skills to display
const skillsData = [
    "Angular",
    "JavaScript",
    "React",
    "Vue",
    "Python",
    "Docker",
    "NodeJS",
    // Add more skills as needed
];

// Merging GlowCard directly into Skills component
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

            // Cleanup event listener
            return () => {
                document.body.removeEventListener("pointermove", UPDATE);
            };
        });
    }, []);

    return (
        <div id="skills" className="relative z-50 my-12 lg:my-24" style={{ backgroundColor: "#0A1F44", paddingBottom: "10vh" }}> {/* Deep Midnight Blue */}
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" /> {/* Accent Color: Teal */}
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#2B2E35]"></span> {/* Gunmetal Grey */}
                    <span className="bg-[#2B2E35] w-fit text-[#E8E8E8] p-2 px-5 text-6xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#2B2E35]"></span> {/* Gunmetal Grey */}
                </div>
            </div>

            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div className={`glow-container-${id} glow-container`} key={id} style={{ marginRight: '20px', backgroundColor: "#2B2E35" }}> {/* Gunmetal Grey */}
                            <article
                                className={`glow-card glow-card-${id} h-fit cursor-pointer border border-[#BFC5C5] transition-all duration-300 relative text-[#E8E8E8] rounded-xl hover:border-transparent w-full`}
                                style={{ backgroundColor: "#2B2E35" }} // Gunmetal Grey background
                            >
                                <div className="glows"></div>
                                <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                                    <div className="h-full w-full rounded-lg border border-[#BFC5C5] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-[#3BC4C4] transition-all duration-500"> {/* Highlight Color */}
                                        <div className="flex -translate-y-[1px] justify-center">
                                            <div className="w-3/4">
                                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent" /> {/* Teal accent */}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                                            <div className="h-8 sm:h-10">{skillsImage(skill)}</div>
                                            <p className="text-[#E8E8E8] text-sm sm:text-lg">{skill}</p> {/* Text Color: Off-white */}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;
