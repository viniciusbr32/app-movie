import axios from 'axios';
import { useEffect, useState } from 'react';
import Movies from './components/movies';
import { Movie, MoviePages } from './types/movie';
import { useNavigate } from 'react-router-dom';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from './components/ui/pagination';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [pagesMovies, setPagesMovies] = useState<MoviePages>();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: 'a0ef49e706577a96426767d29a7e956c',
            language: 'pt-BR',
            page: page,
          },
        });
        console.log(data);
        setPagesMovies(data);
        setMovies(data.results);
      } catch (error) {
        console.error('Erro ao buscar filme', error);
      }
    };
    getMovies();
  }, [page]);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handleClickPage = () => {
    if (page < (pagesMovies?.total_pages ?? 1)) {
      setPage(page + 1);
    }
  };

  const handleClickBackPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      return;
    }
  };

  return (
    <>
      <header className="bg-sky-950 ">
        <h1 className="py-5 text-2xl font-bold text-center text-white">Filmes</h1>
      </header>

      <div className="grid grid-cols-2 grid-rows-3 gap-3 p-5 md:grid-cols-5">
        {movies.map((movie) => (
          <button onClick={() => handleClick(movie.id)} key={movie.id}>
            <Movies movie={movie} />
          </button>
        ))}
      </div>

      <div className="flex justify-center p-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handleClickBackPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleClickPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default App;
