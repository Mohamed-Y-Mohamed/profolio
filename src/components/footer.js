import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom'; // To detect current page
import image5 from "../assets/image/logo512.png";

function Footer() {
    const navigate = useNavigate();
    const location = useLocation(); // To get current path

    const handleNavigate = (section) => {
        if (location.pathname !== '/') {
            // If on another page, navigate to home first, then scroll to the section
            navigate('/');
            setTimeout(() => {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            }, 100); // Small delay to ensure page loads before scroll
        } else {
            // If already on home, scroll to the section
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={image5} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Portfolio</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <button
                                onClick={() => handleNavigate('about')}
                                className="hover:underline me-4 md:me-6 text-left"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigate('skills')}
                                className="hover:underline me-4 md:me-6 text-left"
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigate('experience')}
                                className="hover:underline me-4 md:me-6 text-left"
                            >
                                Experience
                            </button>
                        </li>
                        <li>
                            <a href="/ContactUs" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 My Portfolio. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
