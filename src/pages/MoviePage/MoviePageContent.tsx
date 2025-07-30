import { FC } from "react";
import { useMovie } from "../../hooks/useMovie";
import MovieSection from "../../components/Sections/MovieSection/MovieSection";
import NotFound from "../../components/Sections/NotFound/NotFound";
import MovieAbout from "../../components/Sections/MovieAbout/MovieAbout";

type MoviePageContentProps = {
  movieId: number;
}

const MoviePageContent: FC<MoviePageContentProps> = ({ movieId }) => {
  const { movie, isFetching, error } = useMovie(movieId);

  if (error) {
    return <NotFound title={error.message} />
  }

  return (
    <>
      <MovieSection movie={movie} isFetching={isFetching} />
      <MovieAbout movie={movie} />
    </>
  )
}

export default MoviePageContent;