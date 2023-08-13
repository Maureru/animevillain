import React from 'react';
import avatar from '../../assets/avatar2.png';
import { BsHeadsetVr } from 'react-icons/bs';

interface PromoteMeProps {}

const PromoteMe: React.FC<PromoteMeProps> = () => {
  return (
    <div className="flex mb-4 rounded-xl linearGold">
      <div className="p-8">
        <h1 className="uppercase text-black text-3xl font-extrabold">
          Looking for a Software Developer?
        </h1>
        <p className="text-black my-3">FrontEnd | BackEnd | Full Stack</p>
        <div className="flex items-center gap-4">
          <button className="py-2 px-4 bg-black rounded-lg uppercase">
            <a href="mailto:james.maurels@gmail.com">Hire Me</a>
          </button>
          <a
            href="https://www.maureru.cf"
            target="_blank"
            className=" flex gap-2 items-center font-bold"
          >
            <BsHeadsetVr className="text-4xl" />
            <span className="underline text-black">Portfolio</span>
          </a>
        </div>
      </div>

      <div className="grow relative overflow-hidden bg-cover">
        <img
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '90%',
            minHeight: '90%',
          }}
          src={avatar}
          alt="s"
        />
      </div>
    </div>
  );
};
export default PromoteMe;
