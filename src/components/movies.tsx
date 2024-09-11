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
        className="w-full rounded-lg"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute bottom-0 left-0 w-full pb-2 pl-1 text-sm text-white bg-black rounded-b-lg text-start bg-opacity-80">
        <p className="font-bold truncate">{movie.title}</p>
        <div className="flex items-center ">
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
