import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Timeline = () => {
    const timelineData = [
        {
            title: 'Fever Freelance',
            location: 'Fiverr.co.uk',
            date: 'July 2024 - Present',
            description: 'Working on building reputation and starting a side hustle alongside my career to develop my skills and learn new technologies.',
            icon: <FaGraduationCap className="text-white" />,
        },

        {
            title: 'Technical Assistant',
            location: 'Lab Diagnostic, London',
            date: 'Feb 2021 – August 2023',
            description: 'Managed networks, resolved over 200 technical issues, maintained lab machinery, and set repair schedules for the engineering team.',
            icon: <FaBriefcase className="text-white" />,
        },
        {
            title: 'Customer Assistant',
            location: 'Boots Store, London',
            date: 'July 2019 – Sept 2020',
            description: 'Delivered top-tier customer service, achieved a 98% satisfaction rate, and optimized inventory management systems.',
            icon: <FaBriefcase className="text-white" />,
        },

    ];

    return (
        <div className="min-h-screen bg-[#0A1F44] py-6 flex flex-col justify-center sm:py-12">
            {/* Main Header with Gradient Line */}
            <div className="flex justify-center -translate-y-[1px] mb-5">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
                </div>
            </div>
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
                {/* Accent Line */}
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex items-center">
                        <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                        <span className="bg-[#0d1224] w-fit text-white p-2 px-5 text-6xl rounded-md">
                            Work History
                        </span>
                        <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                    </div>
                </div>






                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/* Vertical line running through the middle */}
                    <div className="hidden sm:block w-1 bg-[#3BC4C4] absolute h-full left-1/2 transform -translate-x-1/2"></div>

                    {timelineData.map((item, index) => (
                        <div className={`mt-6 sm:mt-0 sm:mb-12 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`} key={index}>
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-[#BFC5C5] rounded shadow-lg">
                                            <h3 className="text-lg font-semibold mb-2 text-[#0A1F44]">{item.title}</h3>
                                            <p className="text-sm text-[#0A1F44]">{item.location}</p>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                            <p className="text-[#0A1F44]">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#0A1F44] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
