import useGenres from "../../../hooks/useGenres";
import GenreCardList from "../../GenreCardList/GenreCardList";
import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import NotFound from "../NotFound/NotFound";
import './Genres.scss';

const Genres = () => {
  const { genres, error } = useGenres();

  if (error) {
    return <NotFound title={error.message} />
  }

  return (
    <section className="genres">
      <Container>
        <div className="genres__wrapper">
          <Heading level={1}>Жанры фильмов</Heading>
          <GenreCardList genres={genres} />
        </div>
      </Container>
    </section>
  )
}

export default Genres;