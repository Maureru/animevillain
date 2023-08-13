import React from 'react';
import { Outlet } from 'react-router-dom';

interface AnimeProps {}

const AnimeLayout: React.FC<AnimeProps> = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};
export default AnimeLayout;
