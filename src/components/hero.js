import { useEffect, useState } from "react";
import image1 from "../assets/image/hero.jpg";
import { Link as ScrollLink } from 'react-scroll'; // Import Scroll Link from react-scroll
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import image5 from "../assets/image/logo512.png";

function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
    const toRotate = ["Full Stack Developer", "Creative Problem Solver", "Technology Enthusiast"];
    const period = 2000;

    useEffect(() => {
        const handleTyping = () => {
            let i = loopNum % toRotate.length;
            let fullTxt = toRotate[i];

            if (isDeleting) {
                setText(fullTxt.substring(0, text.length - 1));
            } else {
                setText(fullTxt.substring(0, text.length + 1));
            }

            let typingSpeed = 200 - Math.random() * 100;

            if (isDeleting) {
                typingSpeed /= 2;
            }

            if (!isDeleting && text === fullTxt) {
                setTimeout(() => setIsDeleting(true), period);
                typingSpeed = period;
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                typingSpeed = 500;
            }

            setDelta(typingSpeed);
        };

        const ticker = setTimeout(() => {
            handleTyping();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum]);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex flex-wrap bg-transparent text-white font-Rubik">
            {/* Start of Background Animation */}
            <div className="area absolute inset-0 w-full h-full z-[-1]">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* End of Background Animation */}

            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3">
                        <img src={image5} className="h-8" alt="Logo" style={{ width: "3vw", height: "6vh" }} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyPortfolio</span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 text-white hover:bg-gray-200 rounded md:bg-transparent md:hover:text-[#3BC4C4] dark:text-white cursor-pointer"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <ScrollLink
                                    to="about"
                                    smooth={true}
                                    duration={1000}
                                    className="block py-2 px-3 text-white hover:bg-gray-200 rounded md:bg-transparent md:hover:text-[#3BC4C4] dark:text-white cursor-pointer"
                                >
                                    About
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="skills"
                                    smooth={true}
                                    duration={1000}
                                    className="block py-2 px-3 text-white hover:bg-gray-200 rounded md:bg-transparent md:hover:text-[#3BC4C4] dark:text-white cursor-pointer"
                                >
                                    Skills
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="experience"
                                    smooth={true}
                                    duration={1000}
                                    className="block py-2 px-3 text-white hover:bg-gray-200 rounded md:bg-transparent md:hover:text-[#3BC4C4] dark:text-white cursor-pointer"
                                >
                                    Experience
                                </ScrollLink>
                            </li>
                            <li>
                                <Link
                                    to="/ContactUs"
                                    className="block py-2 px-3 text-white hover:bg-gray-200 rounded md:bg-transparent md:hover:text-[#3BC4C4] dark:text-white cursor-pointer"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="w-full sm:w-8/12 mb-10 relative z-10 mt-20">
                <div className="container mx-auto h-full sm:p-10">
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                {`I am a `}
                                <span className="text-[#3BC4C4] typewrite">
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <div className="w-20 h-2 bg-[#3BC4C4] my-4"></div>
                            <p className="text-xl mb-10" style={{ width: "70%" }}>
                                Hi, I'm Mohamed Yusuf Mohamed, a Full Stack Developer passionate
                                about building user-friendly solutions. With expertise in both
                                front-end and back-end development, I strive to create impactful
                                technology that simplifies people's lives.
                            </p>
                            <button className="inline-flex items-center justify-center py-3 text-xl font-medium text-center text-white border border-transparent rounded-full px-7 bg-[#3BC4C4] hover:bg-opacity-90">
                                Learn More
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            <img src={image1}
                alt="Hero Section Image" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
        </div>
    );
}

export default Hero;
