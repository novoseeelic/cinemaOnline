import { genreNames } from "./GenreNames";

export default class MovieHelper {
  public static getRuntimeString(runtime: number): string {
    if (runtime < 60) {
      return `${runtime} мин`;
    }
  
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    if (minutes < 1) {
      return `${hours} ч`;
    }
  
    return `${hours} ч ${minutes} мин`;
  }

  public static getLocalizedGenre(genre: string): string {
    return genre in genreNames
      ? genreNames[genre]
      : genre;
  }

  public static getLocalizedGenres(genres: string[]): string {
    return genres.map(genre => MovieHelper.getLocalizedGenre(genre)).join(' ');
  }
}







