import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollPercentage = () => {
        const scrollProgress = document.getElementById("progress");
        const progressValue = document.getElementById("progress-value");

        const pos = document.documentElement.scrollTop;
        const calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollValue = Math.round((pos * 100) / calcHeight);

        if (progressValue && scrollProgress) {
            scrollProgress.style.background = `conic-gradient(#1A326A ${scrollValue}%, #4ec0f996 ${scrollValue}%)`;
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollPercentage);
        return () => {
            window.removeEventListener("scroll", scrollPercentage);
        };
    }, []);

    return (
        <>
            {showButton && (
                <div id="progress" className="progress">
                    <span id="progress-value" className="progress-value">
                        <button
                            onClick={handleClick}
                            className="scroll-to-top-button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="bounce-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;