import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';

interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-4xl">
        <FaRegSadCry className="mx-auto" />
        <h1 className="uppercase mt-2">Error</h1>
      </div>
    </div>
  );
};
export default Error;
