
import { featured } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedMovies = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide relative inline-block">
          Featured Movies
          <span className="block h-1 w-24 bg-pink-500 rounded mt-2 mx-auto"></span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Discover this season’s most talked-about titles, handpicked for your cinematic pleasure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {featured.map((movie) => (
          <div
            key={movie.id}
            className="transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-xl"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
