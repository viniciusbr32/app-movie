/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailsProps } from '../types/movie';
import { IoStarSharp } from 'react-icons/io5';
import { RiStarSLine } from 'react-icons/ri';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  const numStars: number = Math.round((movie?.vote_average ?? 0) / 2);

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
          <h1 className="mb-4 text-3xl font-bold">{movie?.title}</h1>
          <p className="mb-6 text-lg text-justify text-muted-foreground">{movie?.overview}</p>
          <div>
            <div className="flex items-center py-5 ">
              {Array.from({ length: numStars }, (_, index) => (
                <IoStarSharp key={`full-${index}`} fill="yellow" className="text-yellow-400 shadow-md" />
              ))}

              {Array.from({ length: 5 - numStars }, (_, index) => (
                <RiStarSLine key={`empty-${index}`} className="text-gray-400 shadow-md" />
              ))}
            </div>
            <h2 className="text-2xl font-semibold">Gêneros</h2>
            <ul className="flex gap-3">
              {movie?.genres.map((genre) => (
                <li className="text-xl" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Data de Lançamento:{movie?.release_date}</p>
            {movie?.production_countries.map((companie) => (
              <p>{companie.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
