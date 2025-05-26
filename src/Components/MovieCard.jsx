import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="group">
      <div className="bg-gradient-to-br from-[#1e1e1e] to-[#111] rounded-xl overflow-hidden shadow-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 border border-transparent hover:border-pink-500/50">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-200">
            {movie.title}
          </h3>
          <p className="text-sm text-pink-200 italic tracking-wide">{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
