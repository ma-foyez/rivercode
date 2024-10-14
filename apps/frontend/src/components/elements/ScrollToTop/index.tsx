import { useState, useEffect } from "react";
import { Styled } from "./GoToTop.styled";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined' && window.scrollY > 120) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const scrollPercentage = () => {
        if (typeof document !== 'undefined') {
            const scrollProgress = document.getElementById("progress");
            const progressValue = document.getElementById("progress-value");

            const pos = document.documentElement.scrollTop;
            const calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollValue = Math.round((pos * 100) / calcHeight);

            if (progressValue !== null && scrollProgress !== null) {
                // scrollProgress.style.background = `conic-gradient(#0F6A39 ${scrollValue}%, #EDEDED ${scrollValue}%)`;
                scrollProgress.style.background = `conic-gradient(#D32A4F ${scrollValue}%, #0095fd96 ${scrollValue}%)`;
            }
        }
    };

    if (typeof window !== 'undefined') {
        window.onscroll = scrollPercentage;
    }

    return (
        <>
            {showButton && (
                <Styled.Progress id="progress">
                    <Styled.ProgressValue id="progress-value">
                        <Styled.Button
                            onClick={handleClick}
                            className="z-50"
                        >
                            <Styled.Icon
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 lg:w-6 lg:h-6 bounce-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                                />
                            </Styled.Icon>
                        </Styled.Button>
                    </Styled.ProgressValue>
                </Styled.Progress>
            )}
        </>
    );
};

export default ScrollToTop;
