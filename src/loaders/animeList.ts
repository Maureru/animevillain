// Fetch Initial Anime Array
const animelistLoader = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime');
  
    return await res.json();
  };

export default animelistLoader;