import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      setMovies([]);
      const data = await fetchMovies(query);
      setMovies(data);
      setHasSearched(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.status_message || err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {movies.length > 0 && <MovieGrid items={movies} />}
      {hasSearched && movies.length === 0 && !loading && !error && (
        <p>No movies found for your request.</p>
      )}
      {error && <ErrorMessage error={error} />}
    </div>
  );
}

export default App;
