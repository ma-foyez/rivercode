import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import ScrollToTop from '../../elements/ScrollToTop';

const Layout: React.FC = () => {
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