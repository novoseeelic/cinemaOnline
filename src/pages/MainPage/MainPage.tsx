import RandomMovieSection from '../../components/Sections/MovieSection/RandomMovieSection';
import TopMovies from '../../components/Sections/TopMovies/TopMovies';
import Heading from '../../components/ui/Heading/Heading';

const MainPage = () => {

  return (
    <main>
      <Heading level={1} visual='hidden'>
        Маруся — стриминговый сервис для поиска фильмов
      </Heading>
      <RandomMovieSection />
      <TopMovies />
    </main>
  )
}

export default MainPage;