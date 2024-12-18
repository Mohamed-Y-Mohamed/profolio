import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectImage1 from '../assets/image/hero.jpg';
import mealRecipe from "../assets/image/recipeMeal.png";
import artvisio from '../assets/image/home.png';
import todo from "../assets/image/todo.png";
function ProjectSection() {
    const projects = [
        {
            date: 'Dec 2024 to July 2024',
            title: 'ArtVisio Project',
            description: 'Incorporated VR and 3D elements using Three.js. Boosted user engagement by 25% through interface design optimization. ArtVisio allows users to walk in virtual galleries with VR capabilities.',
            image: artvisio,
            link: '/projects/artvisio',
            github: 'https://github.com/Mohamed-Y-Mohamed/ArtVisio',
        },
        {
            date: 'Nov 2024',
            title: 'Flavour Fusion - Recipe App',
            description: 'A full-stack recipe app allowing users to explore, like/unlike, and save meals. Key features include user authentication, meal exploration, profile management, and favorite meals.',
            image: mealRecipe, // Replace with actual image
            link: '/projects/flavour-fusion',
            github: 'https://github.com/Mohamed-Y-Mohamed/Recipe_meal_App',
        },
        {
            date: 'Mar 15, 2023',
            title: 'NHS Booking System',
            description: 'Collaborated on the development of a booking system for NHS patients, using React, PHP, and SQL. Enhanced system efficiency by 30%, optimizing booking processes and streamlining the user experience.',
            image: projectImage1,
            link: '/projects/nhs-booking',
            github: 'https://github.com/Mohamed-Y-Mohamed/SoftwareDevelopment-Group-E-Project',
        },
        {
            date: 'Jan 05, 2023',
            title: 'Westminster Skin Consultation Manager',
            description: 'Created a Java-based consultation management system, built a GUI for managing doctors, patients, and consultations. Executed comprehensive testing with JUnit, ensuring system robustness and performance.',
            image: projectImage1,
            link: '/projects/consultation-manager',
            github: 'https://github.com/Mohamed-Y-Mohamed/westminster-Skin-Consultation-Manager',
        },
        {
            date: 'December 15, 2023',
            title: 'Multi-threaded Ticket Machine Application',
            description: 'Designed and implemented a multi-threaded Java application for ticket vending, optimizing transaction speed by 20% and improving system reliability by 15%.',
            image: projectImage1, // Replace with actual image
            link: '/projects/ticket-machine',
            github: 'https://github.com/Mohamed-Y-Mohamed/multi-threaded-ticket-machine-software',
        },
        {
            date: 'July 10, 2024',
            title: 'To Do List App',
            description: 'Built a Java-based To Do List app using Spring Boot with a simple interface featuring edit, delete, and add task buttons. Implemented task retrieval and AES encryption for enhanced security.',
            image: projectImage1, // Replace with actual image
            link: '/projects/todo-list',
            github: 'https://github.com/Mohamed-Y-Mohamed/ToDoListApp2.0',
        },
        {
            date: 'June 10 2024',
            title: 'Dice Game',
            description: 'A Kotlin-based dice game for Android, featuring basic game mechanics for rolling dice and determining outcomes.',
            image: projectImage1, // Replace with actual image
            link: '/projects/dice-game',
            github: 'https://github.com/Mohamed-Y-Mohamed/dice-game-app',
        },
        {
            date: 'August 10 2024',
            title: 'Weather Display App',
            description: 'A weather forecast app in Swift, supporting multiple locations with a visually rich display using custom assets.',
            image: projectImage1, // Replace with actual image
            link: '/projects/weather-display',
            github: 'https://github.com/Mohamed-Y-Mohamed/weather-application',
        },
        {
            date: 'August 20 2024',
            title: 'Electric Prediction System',
            description: 'Python-based system for energy usage prediction and data processing, likely involving data analysis with energy datasets.',
            image: projectImage1, // Replace with actual image
            link: '/projects/electric-prediction',
            github: 'https://github.com/Mohamed-Y-Mohamed/Electric-Prediction-System',
        },

        {
            date: 'September 10, 2024',
            title: 'Java-based To-Do List Application',
            description: 'A JavaFX application that allows users to create, edit, delete, and manage tasks with additional security features. It includes persistent storage with encryption to ensure data security.',
            image: todo,
            link: '/projects/todo-list-app',
            github: 'https://github.com/Mohamed-Y-Mohamed/ToDoListApp2.0',
        }
    ];


    const [expanded, setExpanded] = useState(null);

    const toggleReadMore = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <section className="bg-[#0d1224] pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
            <div id="projects" className="relative z-50 my-12 lg:my-24 bg-[#0d1224] text-[#E8E8E8]">
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
                    </div>
                </div>

                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex items-center">
                        <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                        <span className="bg-[#0A1F44] w-fit text-[#E8E8E8] p-2 px-5 text-6xl rounded-md">
                            Recent Projects
                        </span>
                        <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <Link to={project.github} target='blank'>
                                <div
                                    className="group mb-10 border border-gray-500 rounded-lg shadow-lg transition-all hover:shadow-xl hover:border-[#3BC4C4]"
                                    style={{ backgroundColor: '#0d1224' }}
                                >
                                    <div className="mb-8 overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 min-h-[499px] max-h-[500px]"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span
                                            className="mb-6 inline-block rounded-[5px] bg-[#3BC4C4] px-4 py-1 text-center text-xs font-medium leading-loose text-white"
                                        >
                                            {project.date}
                                        </span>
                                        <br />
                                        <h3 className="mb-4 inline-block text-xl font-semibold text-white hover:text-[#3BC4C4] sm:text-xl lg:text-xl xl:text-2xl">
                                            {project.title}
                                        </h3>

                                        <p className={`max-w-[370px] text-base text-[#BFC5C5] ${expanded === index ? '' : 'line-clamp-3'}`}>
                                            {project.description}
                                        </p>
                                        <button
                                            className="text-sm text-[#3BC4C4] hover:text-white mt-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleReadMore(index);
                                            }}
                                        >
                                            {expanded === index ? 'Read Less' : 'Read More'}
                                        </button>

                                        <div className="mt-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block bg-[#3BC4C4] text-white px-4 py-2 rounded-full hover:bg-opacity-80"
                                            >
                                                View on GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
