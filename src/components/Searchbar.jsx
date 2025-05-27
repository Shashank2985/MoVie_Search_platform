const SearchBar = ({ onSearch, value }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onSearch && onSearch(e.target.value)}
      className="w-full px-3 py-2 text-sm border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
    />
  );
};
export default SearchBar;
