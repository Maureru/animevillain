/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { BsStars } from 'react-icons/bs';
import hero from '../assets/samplehero.jpg';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import Slider from '../components/Slider/Slider';
import Slide from '../components/Slider/Slide';
import { Link, useLoaderData } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const data = useLoaderData() as object[];

  const season: object[] = [
    {
      mal_id: 31964,
      title: 'My Hero Academia',
      trailer: {
        images: {
          maximum_image_url: hero,
        },
      },
      genres: [
        {
          name: 'Comedy',
        },
        {
          name: 'Super Natural',
        },
      ],
      episodes: 24,
      duration: '23',
      synopsis:
        "The appearance of 'quirks' newly discovered super powers has been steadily increasing over the years with 80 percent of humanity possesing it.",
    },
    ...data,
  ];

  const [trending, setTrending] = useState<object[]>([]);

  // For Slider =====================================
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const lastIndex = season.length;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(1);
    }
  }, [index, season.length]);

  const toogleIndex = (direction: string, num: number) => {
    if (direction === 'back') {
      setIndex((prev) => prev - 1);
    } else if (direction === 'forward') {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(num);
    }
  };

  // ===================================================

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          'https://api.jikan.moe/v4/top/anime?limit=5'
        );
        setTrending(data.data);
      } catch (err) {
        console.log('dw');
      }
    };
    getData();
  }, []);

  return (
    <div className="px-3 sm:px-6 xl:px-16 mb-16 mt-28">
      {/* =========== Header ========== */}
      <div className="h-auto lg:h-[35rem] block lg:flex gap-5">
        <div className="h-[35rem] w-full lg:w-[75%]">
          <div className="text-gold text-lg flex gap-2 items-center">
            <BsStars />
            <h1>New</h1>
          </div>
          {/* ===== Hero ======= */}
          <Slider
            index={index}
            slideLength={season.length}
            toogleIndex={toogleIndex}
          >
            {season.map((obj: any, i: number) => {
              let position = 'nextSlide';
              if (i + 1 === index) {
                position = 'activeSlide';
              }
              if (
                i + 1 === index - 1 ||
                (index === 0 && i + 1 === season.length - 1)
              ) {
                position = 'lastSlide';
              }

              return (
                <Slide key={i} position={position}>
                  <Link to={`/anime/${obj.mal_id}`}>
                    <div
                      style={{
                        backgroundImage: `url(${obj.trailer.images.maximum_image_url})`,
                      }}
                      className="flex items-end py-14 px-8 h-full relative rounded-xl bg-cover bg-center "
                    >
                      <div
                        style={{
                          boxShadow: '0px 0px 192px 127px rgba(0,0,0,0.67)',
                        }}
                        className="w-[50%] bg-black/60 z-10"
                      >
                        <h1>Home | TV</h1>
                        <h1 className="text-4xl my-3 font-extrabold">
                          {obj.title}
                        </h1>
                        <h1>
                          EP {obj.episodes} • {obj.duration.slice(0, 2)}m
                        </h1>
                        <div className="flex gap-2 my-2">
                          {obj.genres.map((gen: any, i: number) => (
                            <span
                              key={i}
                              className="py-1 px-2 text-sm bg-green-400 text-black font-semibold uppercase rounded-md"
                            >
                              {gen.name}
                            </span>
                          ))}
                        </div>
                        <h1 className="">
                          {obj.synopsis.length > 138
                            ? `${obj.synopsis.slice(0, 138)} ....More`
                            : obj.synopsis}{' '}
                        </h1>
                      </div>
                    </div>
                  </Link>
                </Slide>
              );
            })}
          </Slider>
        </div>

        {/*  ===== Trending ========= */}
        <div className="grow hidden lg:block">
          <div className="text-gold text-lg flex gap-2 items-center">
            <BsStars />
            <h1>Trending</h1>
          </div>

          <div className="w-full h-full flex flex-col justify-between p-4 rounded-xl bgGray mt-2">
            {/*  ===== Card ===== */}
            {trending.map((obj: any, i: number) => (
              <Link key={i} to={`/anime/${obj.mal_id}`}>
                <div className="flex cursor-pointer hover:bg-gray-800 rounded-xl p-4 items-center gap-4">
                  <p className="text-2xl ">0{i + 1}</p>
                  <div
                    style={{
                      backgroundImage: `url(${obj.images.webp.small_image_url})`,
                    }}
                    className="w-10 h-14 bg-cover bg-center rounded"
                  ></div>
                  <div className="flex grow flex-col gap-1">
                    <h1>
                      {obj.title.length > 20
                        ? `${obj.title.slice(0, 20)} ...`
                        : obj.title}
                    </h1>
                    <div className="flex gap-3">
                      <div className="flex gap-1 items-center">
                        <AiOutlineEye className="text-xl" />
                        <p className="text-[0.6rem] font-bold">
                          {obj.members.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <AiOutlineHeart className="text-xl" />
                        <p className="text-[0.6rem] font-bold">
                          {obj.favorites.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
