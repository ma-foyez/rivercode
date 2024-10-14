import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faChevronDown, 
//     faFacebookF, 
//     faTwitter, 
//     faLinkedinIn, 
//     faInstagram 
// } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#030529] px-4 py-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
                <img className="h-8 md:h-10" src="./assets/logo-white.png" alt="logo" />
                <ul className="pt-4 text-base text-center md:flex md:justify-between md:items-center md:pt-0">
                    <li>
                        <NavLink to="/" className="md:p-4 py-2 text-[#DBDCED] text-base hover:text-sky-300">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/industries" className="md:p-4 py-2 text-[#DBDCED] text-base hover:text-sky-300">
                            Industries
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/solutions"
                            className="md:p-4 py-2 text-[#DBDCED] hover:text-sky-300 flex items-center gap-1"
                        >
                            Solutions <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="md:p-4 py-2 text-[#DBDCED] text-base hover:text-sky-300"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/careers"
                            className="md:p-4 py-2 text-[#DBDCED] text-base hover:text-sky-300"
                        >
                            Careers
                        </NavLink>
                    </li>
                </ul>
                <div className="text-[#E9E9E9] flex gap-4 items-center">
                    <Link to="/" className="border border-[#3F404C] py-2 px-3.5 rounded-full">
                        <FontAwesomeIcon icon={Faceceb} className="text-lg" />
                    </Link>
                    <Link to="/" className="border border-[#3F404C] py-2 px-3 rounded-full">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link to="/" className="border border-[#3F404C] py-2 px-3 rounded-full">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                    <Link to="/" className="border border-[#3F404C] py-2 px-3.5 rounded-full">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
            </div>
            <div className="text-[#DBDCED] border-t border-[#3F404C] flex flex-col md:flex-row items-center justify-between pt-5">
                <p className="text-center">© 2024 RiverCode. All Rights Reserved.</p>
                <div>
                    <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;