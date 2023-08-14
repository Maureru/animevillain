import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './layouts/Root';
import Home from './pages/Home';
import AnimeLayout from './layouts/Anime';
import Anime from './pages/Anime';
import AnimeList from './pages/AnimeList';
import animelistLoader from './loaders/animeList';
import homeDataLoader from './loaders/homeData';
import animeLoader from './loaders/Anime';
import Search from './pages/Search';
import searchLoader from './loaders/search';
import Error from './pages/Error';
import AnimeNotFound from './pages/AnimeNotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} loader={homeDataLoader} />
        <Route path="anime" element={<AnimeLayout />}>
          <Route index element={<AnimeList />} loader={animelistLoader} />
          <Route
            path=":id"
            element={<Anime />}
            errorElement={<AnimeNotFound />}
            loader={animeLoader}
          />
          <Route path="search/:q" element={<Search />} loader={searchLoader} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
