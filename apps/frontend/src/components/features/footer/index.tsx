import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navData } from '../../../utils/data/nav_data';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-blue">
            <div className="sl-container mx-auto py-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
                <img className="h-8 md:h-10" src="./assets/logo-white.png" alt="logo" />
                <ul className="pt-4 text-base text-center md:flex md:justify-between md:items-center md:pt-0">
                    {
                        navData.map((nav, indexedDB) => (
                            <li key={indexedDB}>
                                {
                                    nav.subMenu && nav.subMenu.length > 0 ?
                                    <div className="md:p-4 py-2 text-[#DBDCED] text-base hover:text-sky-300"> 
                                        <span>{nav.title} <i className="fa-solid fa-chevron-down"></i></span>
                                    </div> :
                                    <NavLink to={nav.url} className="md:p-4 py-2 text-[#DBDCED] text-base hover:text-sky-300"> {nav.title}  </NavLink> 
                                }
                                
                            </li>
                        ))
                    }
                </ul>
                <div className="text-[#E9E9E9] flex gap-4 items-center">
                    <Link to="/" className="border border-[#3F404C] py-2 px-3.5 rounded-full">
                        <i className="fa-brands fa-facebook-f text-lg"></i>
                    </Link>
                    <Link to="/" className="border border-[#3F404C] py-2 px-3 rounded-full">
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="/" className="border border-[#3F404C] py-2 px-3 rounded-full">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link to="/" className="border border-[#3F404C] py-2 px-3.5 rounded-full">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
            </div>
            <div className="text-[#DBDCED] border-t border-[#3F404C] flex flex-col md:flex-row items-center justify-between pt-5">
                <p className="text-center">© 2024 RiverCode. All Rights Reserved.</p>
                <div>
                    <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;