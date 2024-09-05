import axios from 'axios';
import { useEffect, useState } from 'react';
import { movies } from './types/movie';

const App = () => {
  const [movies, setMovies] = useState<movies[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: 'a0ef49e706577a96426767d29a7e956c',
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filme', error);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <header className="bg-sky-950 ">
        <h1 className="font-bold text-2xl text-white text-center py-5">Filmes</h1>
      </header>

      <div>
        {movies?.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
