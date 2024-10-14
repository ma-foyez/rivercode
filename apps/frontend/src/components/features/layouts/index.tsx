import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Layout: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;