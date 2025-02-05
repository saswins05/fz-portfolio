import React from 'react';
import Navbar from '../components/partials/Navbar';
import Footer from '../components/partials/Footer';
import { Outlet } from 'react-router-dom';  

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#173c4c] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
