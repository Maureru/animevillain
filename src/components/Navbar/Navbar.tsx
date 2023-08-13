import React, { useEffect, useRef, useState } from 'react';
import Search from './Search';
import { HiBell } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import logo from '../../assets/logov.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimeType } from '../../types';
import { TbRefresh } from 'react-icons/tb';
import axios from 'axios';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { pathname } = useLocation();

  const menu: { name: string; path: string }[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Anime List',
      path: '/anime',
    },
    {
      name: 'New Season',
      path: '/season',
    },
    {
      name: 'Popular',
      path: '/popular',
    },
  ];

  const router = useNavigate();

  const [search, setSearch] = useState<string>('');
  const [searched, setSearched] = useState<AnimeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearchedOpen, setIsSearchedOpen] = useState<boolean>(false);
  const searchedRef = useRef<HTMLDivElement>(null);

  const closeSearchedOnOutsideClick = (e: MouseEvent) => {
    if (!searchedRef.current?.contains(e.target)) {
      setIsSearchedOpen(false);
    }
  };

  useEffect(() => {
    addEventListener('mousedown', closeSearchedOnOutsideClick);

    return () => removeEventListener('mousedown', closeSearchedOnOutsideClick);
  }, []);

  useEffect(() => {
    const getSearch = async () => {
      setIsSearchedOpen(true);
      setIsLoading(true);
      await axios
        .get(`https://api.jikan.moe/v4/anime?q=${search}&limit=5`)
        .then((res) => {
          setSearched(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    if (search) {
      getSearch();
    }
  }, [search]);

  const searchOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      router(`/anime/search/${search}`);
    }
  };

  return (
    <div className="absolute z-50 w-full top-0 left-0 flex justify-between items-center px-16 py-4">
      <div>
        <img width={100} src={logo} />
      </div>
      <div className="relative">
        {search && isSearchedOpen ? (
          <div
            ref={searchedRef}
            className="flex flex-col gap-2 absolute top-[110%] left-2 p-2 w-[300px] h-auto bgGray"
          >
            {isLoading && (
              <TbRefresh className="animate-spin mx-auto text-2xl" />
            )}

            {searched.map((obj, i: number) => (
              <Link key={i} to={`/anime/${obj.mal_id}`}>
                <div className="flex gap-2 p-2 hover:bg-gray-900 cursor-pointer items-center">
                  <div
                    style={{
                      backgroundImage: `url(${obj.images.webp.large_image_url})`,
                    }}
                    className="w-10 h-12 rounded-sm bg-cover bg-center"
                  ></div>
                  <div>
                    <h1 className="font-bold">
                      {obj.title.length > 20
                        ? `${obj.title.slice(0, 20)}...`
                        : obj.title}
                    </h1>
                    <h1 className="text-[0.7rem] text-gold">
                      Rating: {obj.score}/10
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
        <Search
          search={search}
          searchOnChangeHandler={searchOnChangeHandler}
          searchSubmit={searchSubmit}
        />
      </div>
      <div className="flex gap-10">
        {menu.map((men, i: number) => (
          <Link key={i} to={men.path}>
            <p
              className={`cursor-pointer ${
                pathname === men.path ? 'text-yellow-600' : null
              } hover:text-yellow-600`}
            >
              {men.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex gap-6 items-center text-2xl">
        <HiBell className="cursor-pointer" />
        <div className="cursor-pointer border-white border-2 rounded-full w-8 aspect-square overflow-hidden">
          <img src="/op.jpg" />
        </div>
        <BsThreeDots className="cursor-pointer" />
      </div>
    </div>
  );
};
export default Navbar;
