import { useParams } from "react-router";
import { genreNames } from "../../utils/GenreNames";
import NotFound from "../../components/Sections/NotFound/NotFound";
import MoviesByGenre from "../../components/Sections/MoviesByGenre/MoviesByGenre";

const GenrePage = () => {
  const { genre } = useParams();
  const isValid = genre && genre in genreNames;

  return (
    <main>
      {isValid
        ? <MoviesByGenre genre={genre} />
        : <NotFound />}
    </main>
  )
}

export default GenrePage;