import React from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

interface SliderProps {
  children: React.ReactNode;
  toogleIndex: (direction: string, num: number) => void;
  index: number;
  slideLength: number;
}

const Slider: React.FC<SliderProps> = ({
  children,
  toogleIndex,
  index,
  slideLength,
}) => {
  return (
    <div className="slider-container">
      {children}
      <div className="absolute flex flex-col gap-3 top-[50%] -translate-y-[50%] right-4">
        {index === 1 ? null : (
          <BsFillArrowLeftCircleFill
            onClick={() => toogleIndex('back', index)}
            className=" text-4xl cursor-pointer"
          />
        )}
        {index === slideLength ? null : (
          <BsFillArrowRightCircleFill
            onClick={() => toogleIndex('forward', index)}
            className="text-4xl cursor-pointer"
          />
        )}
      </div>

      {/* ====== Slide Navigator ==== */}
      <div className="flex items-center gap-2 absolute bottom-3 z-20 left-[50%] -translate-x-[50%]">
        {Array.from({ length: slideLength }).map((_, i) => (
          <span
            onClick={() => toogleIndex('custom', i + 1)}
            key={i}
            className={`cursor-pointer ${index === i + 1 ? 'text-4xl' : null}`}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
};
export default Slider;
