import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logov.png';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  menu: {
    name: string;
    path: string;
  }[];
  pathname: string;
  toogleModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menu,
  pathname,
  toogleModal,
}) => {
  const slideMenuAnimation = {
    initial: {
      opacity: 0,
      x: 500,
      transition: {
        duration: 0.3,
        ease: 'linear',
      },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      variants={slideMenuAnimation}
      initial="initial"
      animate="animate"
      exit="initial"
      className="h-screen w-full fixed top-0 left-0 bg-gray-900/90"
    >
      <h1
        onClick={toogleModal}
        className="absolute cursor-pointer top-4 right-4 text-2xl "
      >
        <IoMdClose className="text-white" />
      </h1>
      <div className="flex flex-col p-14 items-center">
        {menu.map((men, i: number) => (
          <Link onClick={toogleModal} key={i} to={men.path}>
            <p
              className={`cursor-pointer text-2xl mb-8 ${
                pathname === men.path ? 'text-yellow-600' : null
              } hover:text-yellow-600`}
            >
              {men.name}
            </p>
          </Link>
        ))}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo})`,
        }}
        className="w-[300px] mx-auto animate-pulse aspect-[2/1] bg-cover bg-center"
      />
    </motion.div>
  );
};
export default MobileMenu;
