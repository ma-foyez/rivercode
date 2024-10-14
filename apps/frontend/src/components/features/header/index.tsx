
import { useEffect, useState } from 'react';
import MainLoader from '../../elements/loader/MainLoader';
import { NavLink } from 'react-router-dom';
import { navData } from '../../../utils/data/nav_data';
import logo from '../../../assets/images/logo.svg';

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isToggle, setIsToggle] = useState<boolean>(false)
    const [collapseNavbar, setCollapseNavbar] = useState<boolean>(false)
    const [toggleSubmenu, setToggleSubmenu] = useState<boolean>(false);
    const [isHoverMenu, setIsHoverMenu] = useState<boolean>(false);
    const [menuID, setMenuID] = useState<number>(0);
    const [isHoverActive, setIsHoverActive] = useState<boolean>(false)

    // const isActive = (path: string) => {
    //     // Extract the first segment of the path
    //     const firstSegment = router.asPath.split('/')[1];
    //     // Check if it matches the link property of the menu item
    //     return `/${firstSegment}` === path;
    // };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const scrollMenu = () => {
        if (typeof window !== 'undefined' && window.scrollY >= 90) {
            setIsToggle(true);
        } else {
            setIsToggle(false);
        }
    };

    // Add an event listener for scroll
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollMenu);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', scrollMenu);
            }
        };
    }, []);

    const handleToggleSubmenu = (id: number) => {
        if (windowWidth < 991) {
            setToggleSubmenu(!toggleSubmenu);
            setMenuID(id);
        }
    }

    // if (isLoading) {
    //     return (
    //         <MainLoader />
    //     )
    // }


    return (
        <>
            <header className={`relative lg:absolute bg-green header-section ${isToggle === true ? 'sticky' : ''} ${isHoverMenu ? 'bg-white' : 'lg:bg-transparent'}`}>
                <div className="sl-container">
                    <div className="header-area">
                        <div className="header-logo">
                            <NavLink to={`/`}>
                                <img
                                    src={logo}
                                    alt='myInsight.ai'
                                    height={200}
                                    width={200}
                                    className='w-24 lg:w-auto'
                                />
                            </NavLink>
                        </div>
                        <div className='block lg:hidden'>

                            <button onClick={() => setCollapseNavbar(!collapseNavbar)}>
                                {
                                    toggleSubmenu ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="white" />
                                        </svg>
                                }
                            </button>
                        </div>
                        <div className={`main-menu ${toggleSubmenu === true && 'show-menu'}`}>
                            <div className="mobile-logo-area lg:hidden block bg-green">
                                <div className="px-5 py-3 flex justify-between items-center">
                                    <NavLink href={`/`}>
                                        <img
                                            src={logo}
                                            alt='myInsight.ai'
                                            height={200}
                                            width={200}
                                            className='w-32'
                                        />
                                    </NavLink>
                                    <div className="menu-close-btn" onClick={() => setCollapseNavbar(!collapseNavbar)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ul className="menu-list">
                                {
                                    navData && navData.length > 0 && navData.map((nav, idx: number) => (
                                        <li key={idx} className="menu-item" onClick={() => handleToggleSubmenu(idx)} onMouseEnter={() => setIsHoverMenu(true)} onMouseLeave={() => setIsHoverMenu(false)}>

                                            {
                                                nav.subMenu && nav.subMenu.length > 0 ?
                                                    <NavLink
                                                        className={`menu-link drop-down has_sub_menu ${!isHoverActive  ? 'active' : ''} ${(toggleSubmenu && menuID === idx) ? 'active' : ''}`} to={`/`}
                                                        onMouseEnter={() => setIsHoverActive(true)}
                                                        onMouseLeave={() => setIsHoverActive(false)}
                                                    >
                                                        <span> {nav.title} </span>
                                                        <span>
                                                            {
                                                                toggleSubmenu ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                                    </svg>

                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                                    </svg>
                                                            }
                                                        </span>
                                                    </NavLink> :
                                                    <NavLink className={`menu-link drop-down ${(!isHoverActive) ? 'active' : ''}`} to={nav.url}
                                                        onMouseEnter={() => setIsHoverActive(true)}
                                                        onMouseLeave={() => setIsHoverActive(false)}
                                                    > <span> {nav.title} </span> </NavLink>
                                            }

                                            {
                                                windowWidth < 991 ? (
                                                    <ul className={`${nav.subMenu && nav.subMenu.length > 0 ? 'submenu' : ''}`}
                                                        style={(toggleSubmenu === true && menuID === idx) ? { display: 'block', transition: '0.5s ease', overflow: 'hidden', marginTop: '0px', marginBottom: '0px', height: 'auto' } : { display: 'none' }}
                                                    >
                                                        {
                                                            nav.subMenu && nav.subMenu.length > 0 && nav.subMenu.map((subNav, subNavIndex: number) => (
                                                                <li className="sub-item" key={subNavIndex + 1}>
                                                                    <NavLink className="" to={subNav.url}>
                                                                        {subNav.title}
                                                                    </NavLink>
                                                                </li>

                                                            ))
                                                        }
                                                    </ul>
                                                ) : (<div className={`${nav.subMenu && nav.subMenu.length > 0 ? 'submenu' : ''}`}>
                                                    <div className="sl-container">
                                                        <div className="flex justify-between items-start">
                                                            <p className='text-white text-lg lg:text-3xl capitalize'> <span> {nav.subMenu && nav.subMenu.length > 0 && nav.title} </span> </p>
                                                            <ul className='w-3/4'>
                                                                {
                                                                    nav.subMenu && nav.subMenu.length > 0 && nav.subMenu.map((subNav, subNavIndex: number) => (
                                                                        <li className="sub-item" key={subNavIndex + 1}
                                                                            onMouseEnter={() => setIsHoverActive(true)}
                                                                            onMouseLeave={() => setIsHoverActive(false)}
                                                                        >
                                                                            <NavLink className="" to={subNav.url}>
                                                                                {subNav.title}
                                                                            </NavLink>
                                                                        </li>

                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>)
                                            }

                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;