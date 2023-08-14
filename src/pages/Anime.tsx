import React, { useEffect } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';
import { Loaders } from '../types';

interface AnimeProps {}

const Anime: React.FC<AnimeProps> = () => {
  const { anime, characters } = useLoaderData() as Loaders;

  useEffect(() => {
    return () => window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="mb-4">
      <div className="px-3 sm:px-6 xl:px-24 relative h-auto xl:h-screen pb-2 pt-28 ">
        <div
          style={{
            backgroundImage: `url(${anime.data.trailer.images.maximum_image_url})`,
          }}
          className="absolute faded-div h-full w-full top-0 left-0 z-0 bg-cover bg-center "
        >
          <div className="w-full h-full absolute top-0 left-0 z-10 bg-black/90" />
        </div>

        <div className="h-auto xl:h-[38rem] relative z-20 lg:flex gap-8">
          <div
            style={{
              backgroundImage: `url(${anime.data.images.webp.large_image_url})`,
            }}
            className="hidden md:block h-[42rem] xl:h-full flex-shrink-0 w-full lg:w-[26rem] xl:w-[32rem] bg-cover bg-center rounded-xl "
          ></div>
          <div className=" md:mt-4 lg:mt-0">
            <h1>Home | TV</h1>
            <h1 className="text-4xl font-extrabold my-5">{anime.data.title}</h1>
            <h1>
              EP {anime.data.episodes} • {anime.data.duration.slice(0, 2)}m
            </h1>
            <div className="flex gap-2 my-4">
              {anime.data.genres.map((gen, i: number) => (
                <span
                  key={i}
                  className="py-1 px-2 text-sm bg-green-400 text-black font-semibold uppercase rounded-md"
                >
                  {gen.name}
                </span>
              ))}
            </div>
            <h1>{anime.data.synopsis.slice(0, 250)}... More</h1>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div>
                <h1 className="font-bold">Licensed</h1>
                <h1>{anime.data.licensors[0]?.name}</h1>
              </div>
              <div>
                <h1 className="font-bold">Released</h1>
                <h1>{anime.data.studios[0].name}</h1>
              </div>
              <div>
                <h1 className="font-bold">Year</h1>
                <h1>{anime.data.year}</h1>
              </div>
              <div>
                <h1 className="font-bold">Status</h1>
                <h1>{anime.data.status}</h1>
              </div>
            </div>
            <div className="py-6 px-8  bgGray rounded-md cursor-pointer">
              <div className="flex gap-3 items-center">
                <h1 className="text-3xl">
                  <BsFillPlayCircleFill />
                </h1>
                <h1 className="font-bold text-gold">Watch trailer</h1>
              </div>
              <h1 className="my-1">
                EP {anime.data.episodes} | {anime.data.duration.slice(0, 2)}m
              </h1>
              <h1>{anime.data.synopsis.slice(0, 250)}... More</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-3 sm:px-6 xl:px-24">
        <h1 className="text-gold my-4 font-extrabold">
          Characters and Voice Actors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {characters.data.map((char, i: number) => (
            <div key={i} className="flex gap-4 p-3 bgGray rounded-md">
              <div
                style={{
                  backgroundImage: `url(${char.character.images.webp.image_url})`,
                }}
                className="h-16 aspect-square rounded-full bg-cover bg-center"
              ></div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-gold">{char.character.name}</h1>
                <h1 className="text-[0.8rem]">
                  {char.voice_actors[0]?.person.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Anime;
