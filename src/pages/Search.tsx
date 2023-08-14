import React, { useEffect, useState } from 'react';
import PromoteMe from '../components/Banner/PromoteMe';
import { BsStars } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AnimeType } from '../types';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const { q } = useParams();

  useEffect(() => {
    return () => window.scrollTo({ top: 0, left: 0 });
  }, []);

  const { data } = useLoaderData() as { data: AnimeType[] };

  const [animes, setAnimes] = useState<AnimeType[]>(data);
  const [page, setPage] = useState<number>(1);

  /* ======== Load Data on Scroll =========== */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setAnimes(data);
  }, [data]);

  useEffect(() => {
    const loadMoreData = async () => {
      setIsLoading(true);
      await axios
        .get(`https://api.jikan.moe/v4/anime?q=${q}&page=${page + 1}`)
        .then((res) => {
          setAnimes((prev) => [...prev, ...res.data.data]);
          setPage((prev) => prev + 1);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    if (inView && !isLoading) {
      loadMoreData();
    }
  }, [inView, isLoading, page]);

  return (
    <div className="px-3 sm:px-6 xl:px-24 pt-28">
      <PromoteMe />
      <div className="text-gold text-2xl flex gap-2 items-center">
        <BsStars />
        <h1 className=" font-bold">Search for {q}</h1>
      </div>
      <div className="grid animesWrapper gap-x-4 gap-y-6 mt-4 auto-cols-max">
        {animes.map((obj, i: number) => (
          <Link to={`/anime/${obj.mal_id}`} key={i}>
            <div className="cursor-pointer">
              <div
                style={{
                  backgroundImage: `url(${obj.images.webp.large_image_url})`,
                }}
                className="w-full lg:w-[200px] aspect-[200/250] rounded-md bg-cover bg-center"
              ></div>
              <div className="mt-2">
                <h1 className="font-bold">{obj.title}</h1>
                <h1 className="font-bold text-gold text-[0.7rem]">
                  Rating: <span>{obj.score}/10</span>
                </h1>
              </div>
            </div>
          </Link>
        ))}
        <div ref={ref}></div>
      </div>
    </div>
  );
};
export default Search;
