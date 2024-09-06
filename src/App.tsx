import axios from 'axios';
import { useEffect, useState } from 'react';
import Movies from './components/movies';
import { Movie } from './types/movie';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: 'a0ef49e706577a96426767d29a7e956c',
            language: 'pt-BR',
          },
        });
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error('Erro ao buscar filme', error);
      }
    };
    getMovies();
  }, []);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <header className="bg-sky-950 ">
        <h1 className="font-bold text-2xl text-white text-center py-5">Filmes</h1>
      </header>

      <div className=" grid p-5 grid-cols-2 gap-3  grid-rows-3">
        {movies.map((movie) => (
          <button onClick={() => handleClick(movie.id)}>
            <Movies movie={movie} key={movie.id} />
          </button>
        ))}
      </div>
    </>
  );
};

export default App;
