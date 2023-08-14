import { LoaderFunctionArgs } from "react-router-dom";

const animeLoader = async ({ params }: LoaderFunctionArgs) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`);
    const resp = await fetch(
      `https://api.jikan.moe/v4/anime/${params.id}/characters`
    );

    if (!res.ok) {
      throw Error('Anime not found!')
    }
  
    return {
      anime: await res.json(),
      characters: await resp.json(),
    };
  };

export default animeLoader;
  