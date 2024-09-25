// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from 'react-router-dom'; // For navigating to different pages
// import image1 from "../assets/image/hero.jpg";

// function Hero() {
//     const [text, setText] = useState("");
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [loopNum, setLoopNum] = useState(0);
//     const [delta, setDelta] = useState(200);
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu
//     const toRotate = ["Full Stack Developer", "Creative Problem Solver", "Technology Enthusiast"];
//     const period = 2000;

//     const navigate = useNavigate();
//     const location = useLocation(); // Get current path

//     useEffect(() => {
//         const handleTyping = () => {
//             let i = loopNum % toRotate.length;
//             let fullTxt = toRotate[i];

//             if (isDeleting) {
//                 setText(fullTxt.substring(0, text.length - 1));
//             } else {
//                 setText(fullTxt.substring(0, text.length + 1));
//             }

//             let typingSpeed = 200 - Math.random() * 100;

//             if (isDeleting) {
//                 typingSpeed /= 2;
//             }

//             if (!isDeleting && text === fullTxt) {
//                 setTimeout(() => setIsDeleting(true), period);
//                 typingSpeed = period;
//             } else if (isDeleting && text === "") {
//                 setIsDeleting(false);
//                 setLoopNum(loopNum + 1);
//                 typingSpeed = 500;
//             }

//             setDelta(typingSpeed);
//         };

//         const ticker = setTimeout(() => {
//             handleTyping();
//         }, delta);

//         return () => clearTimeout(ticker);
//     }, [text, isDeleting, loopNum]);

//     const handleNavigate = (section) => {
//         if (location.pathname !== '/') {
//             // If not on the home page, navigate to home first
//             navigate('/');
//             setTimeout(() => {
//                 document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
//             }, 100); // Small delay to ensure page loads before scrolling
//         } else {
//             // If already on the home page, scroll to the section
//             document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen); // Toggle mobile menu open/close state

//         // Get the hero section and navigation by class or id
//         const heroSection = document.querySelector('.heroo');
//         const nav = document.querySelector('nav');

//         if (!isMenuOpen) {
//             // Menu is opening
//             heroSection.style.marginTop = '100px'; // Move hero section down
//             heroSection.style.zIndex = '-1'; // Send hero section behind nav
//             nav.style.backgroundColor = '#0A1F44'; // Match nav background with hero section
//         } else {
//             // Menu is closing
//             heroSection.style.marginTop = '0px'; // Reset hero section position
//             heroSection.style.zIndex = '1'; // Bring hero section forward
//             nav.style.backgroundColor = 'transparent'; // Reset nav background color
//         }
//     };

//     return (
//         <div className="relative flex flex-wrap bg-transparent text-white font-Rubik">
//             {/* Start of Background Animation */}
//             <div className="area absolute inset-0 w-full h-full z-[-1]">
//                 <ul className="circles">
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//             </div>
//             {/* End of Background Animation */}


//             {/* Hero Section */}
//             <div className="w-full sm:w-8/12 mb-10 relative z-10 mt-20 heroo">
//                 <div className="container mx-auto h-full sm:p-10">
//                     <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
//                         <div className="w-full">
//                             <h1 className="text-4xl lg:text-6xl font-bold">
//                                 {`I am a `}
//                                 <span className="text-[#3BC4C4] typewrite">
//                                     <span className="wrap">{text}</span>
//                                 </span>
//                             </h1>
//                             <div className="w-20 h-2 bg-[#3BC4C4] my-4"></div>
//                             <p className="text-xl mb-10" style={{ width: "70%" }}>
//                                 Hi, I'm Mohamed Yusuf Mohamed, a Full Stack Developer passionate
//                                 about building user-friendly solutions. With expertise in both
//                                 front-end and back-end development, I strive to create impactful
//                                 technology that simplifies people's lives.
//                             </p>
//                             <button className="inline-flex items-center justify-center py-3 text-xl font-medium text-center text-white border border-transparent rounded-full px-7 bg-[#3BC4C4] hover:bg-opacity-90">
//                                 Learn More
//                             </button>
//                         </div>
//                     </header>
//                 </div>
//             </div>
//             <img src={image1}
//                 alt="Hero Section Image" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
//         </div>
//     );
// }

// export default Hero;




import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'; // For navigating to different pages
import image1 from "../assets/image/hero.svg";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import React Icons#

function Hero() {
    const linkedInURL = 'https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/';
    const githubURL = 'https://github.com/Mohamed-Y-Mohamed';
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);
    const toRotate = ["Full Stack Developer", "Creative Problem Solver", "Technology Enthusiast"];
    const period = 2000;

    const navigate = useNavigate();
    const location = useLocation(); // Get current path

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

    const handleNavigate = (section) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            }, 100); // Small delay to ensure page loads before scrolling
        } else {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }
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

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                {/* Hero Section (60% width for text) */}
                <div className="w-full sm:w-8/12 mb-10 relative z-10 mt-20 heroo">
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
                                <div className="w-full lg:w-6/12 px-4">

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
                            </div>
                        </header>
                    </div>
                </div>

                {/* Image Section (using provided size and structure) */}
                <div className="flex items-center justify-center p-1 mt-8 lg:mt-0 h-82 sm:h-80 lg:h-96 xl:h-112 2xl:h-158">
                    <img src={image1} alt="Hero Section Image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
