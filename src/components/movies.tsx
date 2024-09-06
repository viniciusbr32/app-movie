import { IoStarSharp } from 'react-icons/io5';
import { Movie } from '../types/movie';
import { RiStarSLine } from 'react-icons/ri';

interface movieProps {
  movie: Movie;
}

const Movies = ({ movie }: movieProps) => {
  const numStars = Math.round(movie.vote_average / 2);

  return (
    <div className="relative w-full">
      <img
        className="rounded-lg w-full"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute bottom-0 left-0 text-sm  bg-black bg-opacity-80 pl-1 pb-2 text-white w-full rounded-b-lg">
        <p className="truncate font-bold">{movie.title}</p>
        <div className="flex items-center">
          {Array.from({ length: numStars }, (_, index) => (
            <IoStarSharp key={`full-${index}`} fill="yellow" className="text-yellow-400 shadow-md" />
          ))}

          {Array.from({ length: 5 - numStars }, (_, index) => (
            <RiStarSLine key={`empty-${index}`} className="text-gray-400 shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
