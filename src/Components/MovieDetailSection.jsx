
const MovieDetailsSection = ({ movie }) => {
  // Helper to convert normal YouTube URLs to embed URLs
  const getYouTubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url; // fallback
    } catch {
      return url;
    }
  };

  return (
    <section className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl text-gray-100">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Poster */}
        <div className="md:w-1/3 flex justify-center items-start">
          <img
            src={movie.poster}
            alt={movie.title}
            className="rounded-xl shadow-xl max-h-[450px] object-cover border border-gray-700"
          />
        </div>

        {/* Details & Trailer */}
        <div className="md:w-2/3 flex flex-col justify-between">
          {/* Title & Description */}
          <div>
            <h1 className="text-4xl font-extrabold mb-4 tracking-wide text-pink-400 drop-shadow-lg">
              {movie.title}
            </h1>
            <p className="text-lg leading-relaxed mb-6 italic text-gray-300 border-l-4 border-pink-500 pl-4">
              {movie.description}
            </p>

            {/* Info List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-300 font-semibold">
              <li>
                <span className="text-pink-400">Genre:</span> {movie.genre}
              </li>
              <li>
                <span className="text-pink-400">Director:</span> {movie.director}
              </li>
              <li>
                <span className="text-pink-400">Cast:</span> {movie.cast.join(", ")}
              </li>
              <li>
                <span className="text-pink-400">Release Date:</span> {movie.releaseDate}
              </li>
              <li>
                <span className="text-pink-400">Duration:</span> {movie.duration}
              </li>
              <li>
                <span className="text-pink-400">Rating:</span> {movie.rating} ⭐
              </li>
            </ul>
          </div>

          {/* Trailer */}
          {movie.trailer && (
            <div className="mt-10 rounded-lg overflow-hidden shadow-lg border border-pink-500">
              <iframe
                src={getYouTubeEmbedUrl(movie.trailer)}
                title={`${movie.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 sm:h-96"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSection;


