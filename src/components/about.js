import React from "react";
import image1 from "../assets/image/image1.jpeg";
import image2 from "../assets/image/image2.jpg";
import image3 from "../assets/image/image3.jpg";

const About = () => {
    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#0d1224] text-[#E8E8E8]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={image1}
                                            alt="image1"
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={image2}
                                            alt="image2"
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={image3}
                                            alt="image3"
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            {/* Main Header, similar to Skills */}
                            <div className="flex justify-center -translate-y-[1px] mb-5">
                                <div className="w-3/4">
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" /> {/* Accent Line */}
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                {/* Accent line similar to Skills */}
                                <div className="flex justify-center my-5 lg:py-8">
                                    <div className="flex items-center">
                                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                                        <span className="bg-[#0A1F44] w-fit text-white p-2 px-5 text-6xl rounded-md">
                                            About Me
                                        </span>
                                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                                    </div>
                                </div>



                                <h2 className="mb-5 text-4xl font-bold text-[#E8E8E8] sm:text-[48px]/[56px]">
                                    Technology-driven. Solution-focused.
                                </h2>

                                <p className="mb-5 text-xl leading-relaxed text-[#BFC5C5]">
                                    I am Mohamed Yusuf Mohamed, a Full Stack Developer with a strong
                                    foundation in creating solutions that aim to simplify processes
                                    and enhance user experience. With a background rooted in diverse
                                    environments, I approach challenges with a global perspective,
                                    always driven by the desire to innovate and optimise workflows.
                                </p>
                                <p className="mb-8 text-xl leading-relaxed text-[#BFC5C5]">
                                    My expertise extends across front-end and back-end development,
                                    allowing me to craft seamless and efficient digital solutions.
                                    I am passionate about transforming complex problems into clear,
                                    manageable solutions, consistently delivering results that make
                                    a tangible impact.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center py-3 text-xl font-medium text-center text-[#E8E8E8] border border-transparent rounded-full px-7 bg-[#3BC4C4] hover:bg-opacity-90"
                                >
                                    Let's Connect
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
