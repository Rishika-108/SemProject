const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="max-w-xl mx-auto mb-8 px-4">
      <input
        type="text"
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
};

export default SearchBar;
