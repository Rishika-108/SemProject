import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          🎬 MovieMania
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className={`hover:text-yellow-400 transition ${
              isActive("/") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`hover:text-yellow-400 transition ${
              isActive("/movies") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
