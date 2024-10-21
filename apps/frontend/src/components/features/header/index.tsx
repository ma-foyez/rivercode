/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from 'react';
import { NavLink , useLocation } from 'react-router-dom';
import { navData } from '../../../utils/data/nav_data';

const Header = () => {
    const location = useLocation();  
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isToggle, setIsToggle] = useState(false);
    const [collapseNavbar, setCollapseNavbar] = useState(false);
    const [toggleSubmenu, setToggleSubmenu] = useState(false);
    const [isHoverMenu, setIsHoverMenu] = useState(false);
    const [menuID, setMenuID] = useState(0);
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        const handleScroll = () => setIsToggle(window.scrollY >= 90);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleSubmenu = (id) => {
        if (windowWidth < 991) {
            setToggleSubmenu(!toggleSubmenu);
            setMenuID(id);
        }
    };

    useEffect(()=>{
        setCollapseNavbar(false);
    }, [location])

    return (
        <header className={`relative lg:absolute header-section ${isToggle ? 'sticky' : ''} ${!isHomePage ? 'bg-white' : 'lg:bg-transparent'}`}>
            <div className="sl-container">
                <div className="header-area">
                    <div className="header-logo">
                        <NavLink to="/">
                            <img src={'./assets/images/logo.svg'} alt='myInsight.ai' className='w-32 lg:w-auto' />
                        </NavLink>
                    </div>
                    <div className='block lg:hidden'>
                        <button onClick={() => setCollapseNavbar(!collapseNavbar)}>
                           
                                                            {
                                    collapseNavbar ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="#424242" />
                                        </svg>
                                }
                        </button>
                    </div>
                    <nav className={`main-menu ${collapseNavbar ? 'show-menu' : ''}`}>
                        <div className="mobile-logo-area lg:hidden block bg-green">
                            <div className="px-5 py-3 flex justify-between items-center">
                                <NavLink to="/">
                                    <img src={'./assets/images/logo-white.png'} alt='myInsight.ai' className='w-32' />
                                </NavLink>
                                <button className="menu-close-btn" onClick={() => setCollapseNavbar(!collapseNavbar)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="menu-list">
                            {navData.map((nav, idx) => (
                                <li key={idx} className="menu-item" onClick={() => handleToggleSubmenu(idx)} onMouseEnter={() => setIsHoverMenu(true)} onMouseLeave={() => setIsHoverMenu(false)}>
                                    {nav.subMenu && nav.subMenu.length > 0 ? (
                                        <NavLink
                                            className={({ isActive }) => `menu-link drop-down has_sub_menu ${isActive ? 'active' : ''} ${(toggleSubmenu && menuID === idx) ? 'active' : ''}`}
                                            to={'/home'}
                                        >
                                            <span>{nav.title}</span>
                                            <span>
                                                {collapseNavbar ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                )}
                                            </span>
                                        </NavLink>
                    ) : (
                        <NavLink
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            to={nav.url}
                        >
                            <span>{nav.title}</span>
                        </NavLink>
                    )}

                    {windowWidth < 991 ? (
                        <ul className={`${nav.subMenu && nav.subMenu.length > 0 ? 'submenu' : ''}`}
                            style={(toggleSubmenu && menuID === idx) ? { display: 'block' } : { display: 'none' }}
                        >
                            {nav.subMenu && nav.subMenu.map((subNav, subNavIndex) => (
                                <li className="sub-item" key={subNavIndex}>
                                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={subNav.url}>
                                        {subNav.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className={`${nav.subMenu && nav.subMenu.length > 0 ? 'submenu' : ''}`}>
                            <div className="sl-container">
                                <div className="flex justify-between items-start">
                                    <p className='text-white text-lg lg:text-3xl capitalize'>
                                        <span>{nav.subMenu && nav.subMenu.length > 0 && nav.title}</span>
                                    </p>
                                    <ul className='w-3/4'>
                                        {nav.subMenu && nav.subMenu.map((subNav, subNavIndex) => (
                                            <li className="sub-item" key={subNavIndex}>
                                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={subNav.url}>
                                                    {subNav.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </nav>
</div>
</div>
</header>
    );
};

export default Header;