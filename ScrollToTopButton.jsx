import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    //Show button when user scrolls down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300){
                setVisible(true);
            }else{
                setVisible(false);
            }
        };

     window.addEventListener("scroll", toggleVisibility);
     return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
        {visible && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 !bg-blue-600 text-white p-4 rounded-full shadow-lg !hover:bg-blue-700 transition duration-300 z-50"
            >
                <FaArrowUp />
            </button>
        )}
        </>
    );
};

export default ScrollToTopButton;