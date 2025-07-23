import actionImg from '@/assets/image/genres/action.jpg'
import adventureImg from '@/assets/image/genres/adventure.jpg'
import animationImg from '@/assets/image/genres/animation.jpg'
import comedyImg from '@/assets/image/genres/comedy.jpg'
import crimeImg from '@/assets/image/genres/crime.jpg'
import documentaryImg from '@/assets/image/genres/documentary.jpg'
import dramaImg from '@/assets/image/genres/drama.jpg'
import familyImg from '@/assets/image/genres/family.jpg'
import fantasyImg from '@/assets/image/genres/fantasy.jpg'
import historyImg from '@/assets/image/genres/history.jpg'
import horrorImg from '@/assets/image/genres/horror.jpg'
import musicImg from '@/assets/image/genres/music.jpg'
import mysteryImg from '@/assets/image/genres/mystery.jpg'
import romanceImg from '@/assets/image/genres/romance.jpg'
import sciFiImg from '@/assets/image/genres/sci-fi.jpg'
import thrillerImg from '@/assets/image/genres/thriller.jpg'
import warImg from '@/assets/image/genres/war.jpg'
import westernImg from '@/assets/image/genres/western.jpg'
import standUpImg from '@/assets/image/genres/standup.jpg'
import tvmovieImg from '@/assets/image/genres/tvmovie.jpg'

// Маппинг жанра из API на изображение
export const genreImageMap: Record<string, string> = {
  action: actionImg,
  adventure: adventureImg,
  animation: animationImg,
  comedy: comedyImg,
  crime: crimeImg,
  documentary: documentaryImg,
  drama: dramaImg,
  family: familyImg,
  fantasy: fantasyImg,
  history: historyImg,
  horror: horrorImg,
  music: musicImg,
  mystery: mysteryImg,
  romance: romanceImg,
  scifi: sciFiImg,
  thriller: thrillerImg,
  war: warImg,
  western: westernImg,
  'stand-up': standUpImg,
  'tv-movie': tvmovieImg 
}

// Функция для получения изображения по названию жанра
export const getGenreImage = (genreName: string): string => {
  return genreImageMap[genreName] || '/images/genres/placeholder.jpg' // fallback
}