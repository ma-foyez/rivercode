import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import ScrollToTop from '../../elements/ScrollToTop';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className="bg-white">
      <Header />
      <main className="">
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;