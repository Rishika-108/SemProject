import { useParams, useNavigate } from "react-router-dom";
import BackButton from  "../Components/BackButton"
import MovieDetailsSection from  "../Components/MovieDetailSection"
import RelatedMovies from  "../Components/RelatedMovie"
import { dummyMovies } from "../assets/assets";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = dummyMovies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p>Movie not found.</p>
        <button
          onClick={() => navigate("/movies")}
          className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded"
        >
          Go back to Movies
        </button>
      </div>
    );
  }

  const related = dummyMovies.filter(
    (m) => m.genre === movie.genre && m.id !== movie.id
  );

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <BackButton />
      <MovieDetailsSection movie={movie} />
      <RelatedMovies movies={related} />
    </section>
  );
};

export default MovieDetails;
