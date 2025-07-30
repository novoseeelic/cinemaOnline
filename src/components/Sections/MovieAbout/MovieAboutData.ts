import { Movie } from "../../../api/movie";
import LanguageHelper from "../../../utils/LanguageHelper";
import StringHelper from "../../../utils/StringHelper";

export interface MovieAboutData {
  param: string;
  value: string | null | undefined;
}

export const prepareAboutData = (movie?: Movie): MovieAboutData[] => {
  return [
    {
      param: 'Язык оригинала',
      value: movie?.language ? LanguageHelper.getLanguageName(movie.language) : undefined
    },
    {
      param: 'Бюджет',
      value: movie?.budget ? StringHelper.toUsd(+movie.budget) : undefined
    },
    {
      param: 'Выручка',
      value: movie?.revenue ? StringHelper.toUsd(+movie.revenue) : undefined
    },
    {
      param: 'Режиссёр',
      value: movie?.director
    },
    {
      param: 'Продакшен',
      value: movie?.production
    },
    {
      param: 'Награды',
      value: movie?.awardsSummary
    },
  ]
}