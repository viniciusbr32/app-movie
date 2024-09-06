import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MovieDetails from './components/movie-details';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
