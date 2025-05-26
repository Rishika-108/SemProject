const MovieDetailsSection = ({ movie }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full md:w-1/3 rounded shadow"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-600 mb-4">{movie.description}</p>

        <ul className="text-gray-800 text-sm space-y-1">
          <li><strong>Genre:</strong> {movie.genre}</li>
          <li><strong>Director:</strong> {movie.director}</li>
          <li><strong>Cast:</strong> {movie.cast.join(", ")}</li>
          <li><strong>Release Date:</strong> {movie.releaseDate}</li>
          <li><strong>Duration:</strong> {movie.duration}</li>
          <li><strong>Rating:</strong> {movie.rating} ⭐</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsSection;
