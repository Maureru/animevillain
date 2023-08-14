import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
  search: string;
  searchOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchSubmit: (e: React.KeyboardEvent) => void;
}

const Search: React.FC<SearchProps> = ({
  search,
  searchOnChangeHandler,
  searchSubmit,
}) => {
  return (
    <div className="min-w-[250px] sm:min-w-[500px] flex items-center gap-2 py-1 px-2 rounded-md bg-[#212121]">
      <AiOutlineSearch />
      <input
        value={search}
        onChange={searchOnChangeHandler}
        onKeyDown={searchSubmit}
        type="text"
        className="bg-transparent outline-none grow"
        placeholder="search Anime"
      />
    </div>
  );
};
export default Search;
