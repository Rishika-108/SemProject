import MovieCard from "./MovieCard";

const RelatedMovies = ({ movies }) => {
  if (!movies.length) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Related Movies</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
