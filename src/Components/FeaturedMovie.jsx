import { featured } from "../assets/assets";
import MovieCard from "./MovieCard";

// const featured = [
//   {
//     id: "1",
//     title: "Inception",
//     poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
//     genre: "Sci-Fi",
//   },
//   {
//     id: "2",
//     title: "The Dark Knight",
//     poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     genre: "Action",
//   },
//   {
//     id: "3",
//     title: "Interstellar",
//     poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     genre: "Adventure",
//   },
// ];

const FeaturedMovies = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 animate-text-glow">
        🌟 Featured Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {featured.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
