import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can use any icon you like

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window back to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    useEffect(() => {
        // Add the event listener for scroll
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 cursor-pointer p-3 rounded-full bg-[#3BC4C4] text-white hover:bg-opacity-90 transition-opacity duration-300 ease-in-out"
                >
                    <FaArrowUp size={20} />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
