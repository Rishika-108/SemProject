import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="text-center py-24 px-6 mt-20 bg-gradient-to-r from-[#111827] via-black to-[#1f2937] shadow-inner rounded-t-3xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400">
        Ready for your next binge?
      </h2>
      <p className="text-lg text-gray-400 mb-10">
        Explore hundreds of cinematic stories that speak your vibe.
      </p>
      <Link to="/movies">
        <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transform transition">
          Explore Now
        </button>
      </Link>
    </section>
  );
};

export default CallToAction;
