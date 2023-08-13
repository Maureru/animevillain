import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  position?: string;
}

const Slide: React.FC<SlideProps> = ({ children, position }) => {
  return <div className={`slide ${position}`}>{children}</div>;
};
export default Slide;
