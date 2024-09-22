import React from "react";
import image1 from "../assets/image/image1.jpeg";
import image2 from "../assets/image/image2.jpg";
import image3 from "../assets/image/image3.jpg";

const About = () => {
    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={image1}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={image2}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={image3}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            {/* SVG remains unchanged */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-6xl font-semibold text-primary">
                                    About Me
                                </span>
                                <h2 className="mb-5 text-4xl font-bold text-dark dark:text-white sm:text-[48px]/[56px]">
                                    Technology-driven. Solution-focused.
                                </h2>
                                <p className="mb-5 text-xl text-body-color dark:text-dark-6 leading-relaxed">
                                    I am Mohamed Yusuf Mohamed, a Full Stack Developer with a strong
                                    foundation in creating solutions that aim to simplify processes
                                    and enhance user experience. With a background rooted in diverse
                                    environments, I approach challenges with a global perspective,
                                    always driven by the desire to innovate and optimise workflows.
                                </p>
                                <p className="mb-8 text-xl text-body-color dark:text-dark-6 leading-relaxed">
                                    My expertise extends across front-end and back-end development,
                                    allowing me to craft seamless and efficient digital solutions.
                                    I am passionate about transforming complex problems into clear,
                                    manageable solutions, consistently delivering results that make
                                    a tangible impact.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center justify-center py-3 text-xl font-medium text-center text-white border border-transparent rounded-full px-7 bg-[#3BC4C4] hover:bg-opacity-90"
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
