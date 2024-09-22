import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#0A1F44]" style={{ minHeight: "100vh" }}>
            <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-10">

                {/* Skills Section */}
                <div className="space-y-6">
                    <h4 className="text-4xl md:text-5xl dark:text-white font-bold mb-6">Skills</h4>

                    {/* Java */}
                    <div>
                        <div className="flex justify-between py-1 items-center">
                            <div className="flex items-center">
                                <FaJava className="text-[#FF6464] mr-2" size={25} />
                                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Java</span>
                            </div>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#FF6464] h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    {/* HTML */}
                    <div>
                        <div className="flex justify-between py-1 items-center">
                            <div className="flex items-center">
                                <FaHtml5 className="text-[#FF6464] mr-2" size={25} />
                                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">HTML</span>
                            </div>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#FF6464] h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div>
                        <div className="flex justify-between py-1 items-center">
                            <div className="flex items-center">
                                <FaCss3Alt className="text-[#5185D4] mr-2" size={25} />
                                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">CSS</span>
                            </div>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#5185D4] h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                    </div>

                    {/* JavaScript & Node.js */}
                    <div>
                        <div className="flex justify-between py-1 items-center">
                            <div className="flex items-center">
                                <SiJavascript className="text-[#FF6464] mr-2" size={25} />
                                <FaNodeJs className="text-[#FF6464] mr-2" size={25} />
                                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">JavaScript & Node.js</span>
                            </div>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#FF6464] h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div>
                        <div className="flex justify-between py-1 items-center">
                            <div className="flex items-center">
                                <SiMongodb className="text-[#9272D4] mr-2" size={25} />
                                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">MongoDB</span>
                            </div>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#9272D4] h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    {/* Python */}
                    <div>
                        <div className="flex justify-between py-1 items-center">
                            <div className="flex items-center">
                                <FaPython className="text-[#CA56F2] mr-2" size={25} />
                                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Python</span>
                            </div>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">50%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#CA56F2] h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Additional Skills on the Right */}
                <div className="space-y-6">
                    <h4 className="text-4xl md:text-5xl dark:text-white font-bold mb-6">Additional Skills</h4>

                    <div className="space-y-4">
                        {/* OOP Concepts */}
                        <div className="flex justify-between py-1 items-center">
                            <span className="text-lg dark:text-[#A6A6A6] font-semibold">OOP Concepts</span>
                            <span className="ml-auto text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#FF6464] h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>

                        {/* Multithreading */}
                        <div className="flex justify-between py-1 items-center">
                            <span className="text-lg dark:text-[#A6A6A6] font-semibold">Multithreading</span>
                            <span className="ml-auto text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#5185D4] h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>

                        {/* Firebase */}
                        <div className="flex justify-between py-1 items-center">
                            <span className="text-lg dark:text-[#A6A6A6] font-semibold">Firebase</span>
                            <span className="ml-auto text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-[#CA56F2] h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
