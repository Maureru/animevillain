const homeDataLoader = async () => {
    const res = await fetch('https://api.jikan.moe/v4/seasons/now?limit=5');
  
    const season = await res.json();
  
    return season.data;
  };

export default homeDataLoader