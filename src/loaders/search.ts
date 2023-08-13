import { LoaderFunctionArgs } from "react-router-dom";

const searchLoader = async ({ params }: LoaderFunctionArgs) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${params.q}`);
    return await res.json();
  };

export default searchLoader;
  