import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Timeline = () => {
    const timelineData = [
        {
            title: 'Bachelor of Engineering in Software Engineering',
            location: 'University of Westminster, London',
            date: 'July 2024',
            description: 'Awarded First-Class Honours. Specialized in OOP, web technologies, and database management.',
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
        {
            title: 'BTEC in ICT (Computer Science)',
            location: 'West London College',
            date: 'July 2021',
            description: 'Awarded D*DD, equivalent to 3 A* grades in A Levels.',
            icon: <FaGraduationCap className="text-white" />,
        },
    ];

    return (
        <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
                <h4 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#0A1F44]">
                    Experience & Education
                </h4>
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/* Vertical line running through the middle */}
                    <div className="hidden sm:block w-1 bg-[#3BC4C4] absolute h-full left-1/2 transform -translate-x-1/2"></div>

                    {timelineData.map((item, index) => (
                        <div className={`mt-6 sm:mt-0 sm:mb-12 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`} key={index}>
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-[#E8E8E8] rounded shadow-lg">
                                            <h3 className="text-lg font-semibold mb-2 text-[#0A1F44]">{item.title}</h3>
                                            <p className="text-sm text-black">{item.location}</p>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                            <p className="text-black">{item.description}</p>
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
