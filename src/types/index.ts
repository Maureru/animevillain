type mapObject = {
    obj: object,
    i: number
}

type AnimeType = {
    mal_id: number,
    images: { webp: { large_image_url: string } };
    title: string;
    score: number;
  };

type Loaders = {
    anime: {
      data: {
        trailer: { images: { maximum_image_url: string } };
        images: { webp: { large_image_url: string } };
        title: string;
        episodes: number;
        duration: string;
        genres: { name: string }[];
        synopsis: string;
        licensors: { name: string }[];
        studios: { name: string }[];
        year: number;
        status: string;
      };
    };
    characters: {
      data: {
        character: { images: { webp: { image_url: string } }; name: string };
        voice_actors: { person: { name: string } }[];
      }[];
    };
  };

export type {
    mapObject,
    Loaders,
    AnimeType
}
