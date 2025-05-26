import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import MovieList from "../Components/MovieList";
import { dummyMovies } from "../assets/assets";

const MoviesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(dummyMovies);

  useEffect(() => {
    const results = dummyMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
  }, [searchTerm]);

  return (
    <section className="py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Browse Upcoming 2024-2025 movies</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <MovieList movies={filteredMovies} />
    </section>
  );
};

export default MoviesList;
