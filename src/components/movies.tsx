import { IoStarSharp } from 'react-icons/io5';
import { Movie } from '../types/movie';
import { RiStarSLine } from 'react-icons/ri';

interface movieProps {
  movie: Movie;
}

const Movies = ({ movie }: movieProps) => {
  const numStars = Math.round(movie.vote_average / 2);

  return (
    <div className="w-full ">
      <img className="rounded-lg" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <div className="pl-2">
        <p className="truncate text-white font-bold">{movie.title}</p>
        <div className="flex items-center">
          {/* Renderiza estrelas cheias */}
          {Array.from({ length: numStars }, (_, index) => (
            <IoStarSharp key={`full-${index}`} fill="yellow" />
          ))}
          {/* Renderiza estrelas vazias */}
          {Array.from({ length: 5 - numStars }, (_, index) => (
            <RiStarSLine key={`empty-${index}`} />
          ))}
        </div>
        <p className="font-bold text-white">{movie.vote_count} avaliaçoes</p>
      </div>
    </div>
  );
};

export default Movies;
