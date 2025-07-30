import ImageComedy from '/src/assets/image/genres/comedy.jpg';
import ImageAdventure from '../../assets/image/genres/adventure.jpg';
import ImageDrama from '../../assets/image/genres/drama.jpg';
import ImageFamily from '../../assets/image/genres/family.jpg';
import ImageFantasy from '../../assets/image/genres/fantasy.jpg';
import ImageHistory from '../../assets/image/genres/history.jpg';
import ImageThriller from '../../assets/image/genres/thriller.jpg';
import ImageHorror from '../../assets/image/genres/horror.jpg';
import ImageScifi from '../../assets/image/genres/sci-fi.jpg';
import ImageStandup from '../../assets/image/genres/standup.jpg';
import ImageMystery from '../../assets/image/genres/mystery.jpg';
import ImageRomance from '../../assets/image/genres/romance.jpg';
import ImageMusic from '../../assets/image/genres/music.jpg';
import ImageCrime from '../../assets/image/genres/crime.jpg';
import ImageTvMovie from '../../assets/image/genres/tvmovie.jpg';
import ImageDocumentary from '../../assets/image/genres/documentary.jpg';
import ImageAction from '../../assets/image/genres/action.jpg';
import ImageWestern from '../../assets/image/genres/western.jpg';
import ImageAnimation from '../../assets/image/genres/animation.jpg';
import ImageWar from '../../assets/image/genres/war.jpg';

export const getGenreCardImage = (genre: string): string | undefined => {
  switch (genre) {
    case 'comedy': return ImageComedy;
    case 'adventure': return ImageAdventure;
    case 'drama': return ImageDrama;
    case 'family': return ImageFamily;
    case 'fantasy': return ImageFantasy;
    case 'history': return ImageHistory;
    case 'thriller': return ImageThriller;
    case 'horror': return ImageHorror;
    case 'scifi': return ImageScifi;
    case 'stand-up': return ImageStandup;
    case 'mystery': return ImageMystery;
    case 'romance': return ImageRomance;
    case 'music': return ImageMusic;
    case 'crime': return ImageCrime;
    case 'tv-movie': return ImageTvMovie;
    case 'documentary': return ImageDocumentary;
    case 'action': return ImageAction;
    case 'western': return ImageWestern;
    case 'animation': return ImageAnimation;
    case 'war': return ImageWar;
  }

  return undefined;
}