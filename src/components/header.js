import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image5 from "../assets/image/logo512.png";

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Toggle the mobile menu
    const toggleMenu = () => setNavbarOpen(!navbarOpen);

    // Handle navigation to home and scroll to a section
    const handleNavigate = (section) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(section).scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 w-full bg-transparent z-50">
            <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* Logo and Mobile Menu Button */}
                <div className="flex flex-row items-center justify-between p-3 md:p-1 w-full md:w-auto" style={{ paddingRight: "3vh" }}>
                    <a href="/" className="text-3xl text-white font-medium mb-4 md:mb-0">
                        <img src={image5} alt="Logo" className="h-10" />
                    </a>
                    <button
                        className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Menu Button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8"
                            style={{ paddingBottom: "2vh" }}
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {navbarOpen && (
                    <div className="navbar-menu relative z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-2 px-2 bg-white border-r overflow-y-auto">
                            <div className="flex items-center mb-8">
                                <a href="/" className="text-3xl font-bold leading-none">
                                    <img src={image5} alt="" className="h-12" />
                                </a>
                                <button onClick={toggleMenu} className="navbar-close ml-auto">
                                    <svg
                                        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-3 text-white hover:bg-gray-200 rounded cursor-pointer"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/project"
                                        className="block py-2 px-3 text-white hover:bg-gray-200 rounded cursor-pointer"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigate("about")}
                                        className="block py-2 px-3 text-white hover:bg-gray-200 rounded cursor-pointer"
                                    >
                                        About
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigate("skills")}
                                        className="block py-2 px-3 text-white hover:bg-gray-200 rounded cursor-pointer"
                                    >
                                        Skills
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigate("experience")}
                                        className="block py-2 px-3 text-white hover:bg-gray-200 rounded cursor-pointer"
                                    >
                                        Experience
                                    </button>
                                </li>
                                <li>
                                    <Link
                                        to="/ContactUs"
                                        className="block py-2 px-3 text-white hover:bg-gray-200 rounded cursor-pointer"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:space-x-6">
                    <li>
                        <Link to="/" className="text-xl text-white hover:text-[#3BC4C4] cursor-pointer">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/project" className="text-xl text-white hover:text-[#3BC4C4] cursor-pointer">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("about")}
                            className="text-xl text-white hover:text-[#3BC4C4] cursor-pointer"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("skills")}
                            className="text-xl text-white hover:text-[#3BC4C4] cursor-pointer"
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("experience")}
                            className="text-xl text-white hover:text-[#3BC4C4] cursor-pointer"
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <Link to="/ContactUs" className="text-xl text-white hover:text-[#3BC4C4] cursor-pointer">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default Header;