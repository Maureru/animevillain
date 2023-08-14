import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import FeaturedAnime from '../components/Banner/FeaturedAnime';
import { Outlet } from 'react-router-dom';

interface RootProps {}

const Root: React.FC<RootProps> = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="px-3 sm:px-6 xl:px-16 pt-4 pb-4">
        <FeaturedAnime />
      </div>
    </div>
  );
};
export default Root;
