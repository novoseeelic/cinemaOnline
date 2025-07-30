import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from './components/ui/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from './api/auth';
import Modals from './components/Modals/Modals';

const LazyNotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const LazyMainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LazyGenresPage = lazy(() => import('./pages/GenresPage/GenresPage'));
const LazyGenrePage = lazy(() => import('./pages/GenrePage/GenrePage'));
const LazyMoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const LazyAccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));

function App() {
  useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  });

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='*' element={<LazyNotFoundPage />} />
          <Route path='/' element={<LazyMainPage />} />
          <Route path='/genres' element={<LazyGenresPage />} />
          <Route path='/genres' element={<LazyGenresPage />} />
          <Route path='/genres/:genre' element={<LazyGenrePage />} />
          <Route path='/movie/:movieId' element={<LazyMoviePage />} />
          <Route path='/account' element={<LazyAccountPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <Modals />
    </>
  )
}

export default App
