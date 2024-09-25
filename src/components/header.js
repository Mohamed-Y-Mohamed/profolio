// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import image5 from "../assets/image/logo512.png"; // Replace this with your logo
// import './style/navbar.css';
// function Header() {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const location = useLocation();

//     // Toggle navigation open/close
//     const handleNavToggle = () => {
//         setIsNavOpen(!isNavOpen);
//     };

//     useEffect(() => {
//         // Close the nav when clicking outside or changing the route
//         setIsNavOpen(false);
//     }, [location]);

//     return (
//         <nav className="nav">
//             <div className="logo">
//                 <img src={image5} alt="Logo Image" />
//             </div>

//             {/* Hamburger Menu */}
//             <div className={`hamburger ${isNavOpen ? "toggle" : ""}`} onClick={handleNavToggle}>
//                 <div className="line1"></div>
//                 <div className="line2"></div>
//                 <div className="line3"></div>
//             </div>

//             {/* Navigation Links */}
//             <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
//                 <li className={isNavOpen ? "fade" : ""}>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li className={isNavOpen ? "fade" : ""}>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li className={isNavOpen ? "fade" : ""}>
//                     <Link to="/skills">Skills</Link>
//                 </li>
//                 <li className={isNavOpen ? "fade" : ""}>
//                     <Link to="/education">Education</Link>
//                 </li>
//                 <li className={isNavOpen ? "fade" : ""}>
//                     <Link to="/project">My Projects</Link>
//                 </li>
//                 <li className={isNavOpen ? "fade" : ""}>
//                     <Link to="/ContactUs">Contact Me</Link>
//                 </li>

//             </ul>
//         </nav>
//     );
// }

// export default Header;













import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import image5 from "../assets/image/logo512.png"; // Replace this with your logo
import './style/navbar.css';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Add navigate hook for redirection

    // Toggle navigation open/close
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        // Close the nav when clicking outside or changing the route
        setIsNavOpen(false);
    }, [location]);

    // Handle smooth scrolling to sections when on the homepage
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Scroll or navigate based on current page
    const handleNavigation = (sectionId) => {
        if (location.pathname === "/") {
            // If on the homepage, scroll directly to the section
            handleScrollToSection(sectionId);
        } else {
            // Navigate to homepage, then scroll to the section
            navigate("/");
            setTimeout(() => handleScrollToSection(sectionId), 100); // Delay for navigation to complete
        }
        setIsNavOpen(false); // Close mobile menu after action
    };

    return (
        <nav className="nav">
            <div className="logo">
                <img src={image5} alt="Logo Image" />
            </div>

            {/* Hamburger Menu */}
            <div className={`hamburger ${isNavOpen ? "toggle" : ""}`} onClick={handleNavToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
                <li className={isNavOpen ? "fade" : ""}>
                    <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
                </li>
                <li className={isNavOpen ? "fade" : ""}>
                    <a onClick={() => handleNavigation("about")}>About</a>
                </li>
                <li className={isNavOpen ? "fade" : ""}>
                    <a onClick={() => handleNavigation("skills")}>Skills</a>
                </li>
                <li className={isNavOpen ? "fade" : ""}>
                    <a onClick={() => handleNavigation("education")}>Education</a>
                </li>
                <li className={isNavOpen ? "fade" : ""}>
                    <Link to="/project" onClick={() => setIsNavOpen(false)}>My Projects</Link>
                </li>
                <li className={isNavOpen ? "fade" : ""}>
                    <Link to="/ContactUs" onClick={() => setIsNavOpen(false)}>Contact Me</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
