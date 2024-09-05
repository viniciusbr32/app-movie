import { Movie } from '../types/movie';

interface movieProps {
  movie: Movie;
}

const Movies = ({ movie }: movieProps) => {
  return (
    <div className="w-full ">
      <img className="rounded-lg" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <p className="truncate">{movie.title}</p>
    </div>
  );
};

export default Movies;
