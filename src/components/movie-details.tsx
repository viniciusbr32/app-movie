/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailsProps } from '../types/movie';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  console.log(movie);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: 'a0ef49e706577a96426767d29a7e956c',
            language: 'pt-BR',
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Erro ao buscar filme', error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={movie?.title}
            width="400"
            height="600"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ aspectRatio: '400/600', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold">The Shawshank Redemption</h1>
          <p className="mb-6 text-lg text-justify text-muted-foreground">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
