import { useParams } from "react-router";
import MoviePageContent from "./MoviePageContent";
import NotFound from "../../components/Sections/NotFound/NotFound";

const MoviePage = () => {
  const { movieId } = useParams();
  const isValid = movieId && !isNaN(+movieId);

  return (
    <main>
      {isValid
        ? <MoviePageContent movieId={+movieId} />
        : <NotFound title='Фильм не найден' />}
    </main>
  )
}

export default MoviePage;