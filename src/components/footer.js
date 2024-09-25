import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import React Icons#

import image5 from "../assets/image/logo512.png"; // Your Logo

// LinkedIn and GitHub links
const linkedInURL = 'https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/';
const githubURL = 'https://github.com/Mohamed-Y-Mohamed';

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle navigation within the same page or to a different page
    const handleNavigate = (section) => {
        if (location.pathname !== '/') {
            // Navigate to home if not on the home page, then scroll to the section
            navigate('/');
            setTimeout(() => {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Scroll directly if already on the home page
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative bg-[#0d1224] text-[#E8E8E8] pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-[#E8E8E8]">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-[#BFC5C5]">
                            Find me on these platforms. I respond within 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex">
                            <a
                                href={linkedInURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#3BC4C4] shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full mr-2"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href={githubURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#3BC4C4] shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full mr-2"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-[#BFC5C5] text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <button
                                            onClick={() => handleNavigate('about')}
                                            className="text-[#E8E8E8] hover:text-[#3BC4C4] font-semibold block pb-2 text-sm"
                                        >
                                            About Me
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleNavigate('skills')}
                                            className="text-[#E8E8E8] hover:text-[#3BC4C4] font-semibold block pb-2 text-sm"
                                        >
                                            Skills
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleNavigate('experience')}
                                            className="text-[#E8E8E8] hover:text-[#3BC4C4] font-semibold block pb-2 text-sm"
                                        >
                                            Experience
                                        </button>
                                    </li>
                                    <li>
                                        <a href="/ContactUs" className="text-[#E8E8E8] hover:text-[#3BC4C4] font-semibold block pb-2 text-sm">
                                            Contact Me
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="my-6 border-[#2B2E35]" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-[#BFC5C5] font-semibold py-1">
                            Copyright © 2023 Project Protected under MIT License.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
