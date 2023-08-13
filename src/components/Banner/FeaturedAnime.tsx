import React from 'react';
import OnePiece from '../../assets/OnePiece.png';

interface FeaturedAnimeProps {}

const FeaturedAnime: React.FC<FeaturedAnimeProps> = () => {
  return (
    <div className="flex mb-4 rounded-xl linearGold">
      <div className="p-8">
        <h1 className="uppercase text-black text-3xl font-extrabold">
          Read One Piece Manga Online
        </h1>
        <p className="text-black my-3">Highest Quality | No signups | No Ads</p>
        <div className="flex items-center gap-4">
          <button className="py-2 px-4 bg-black rounded-lg">Read Now</button>
          <a className="text-black underline cursor-pointer">Go to website</a>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${OnePiece})`,
        }}
        className="grow bg-cover"
      ></div>
    </div>
  );
};
export default FeaturedAnime;
