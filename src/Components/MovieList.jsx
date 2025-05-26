import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies.length) {
    return <p className="text-center text-gray-600">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
