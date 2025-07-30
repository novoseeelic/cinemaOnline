import { useRandomMovie } from "../../../hooks/useRandomMovie";
import MovieSection from "./MovieSection"

const RandomMovieSection = () => {
  const { movie, isFetching } = useRandomMovie();

  return (
    <MovieSection random movie={movie} isFetching={isFetching} />
  )
}

export default RandomMovieSection;