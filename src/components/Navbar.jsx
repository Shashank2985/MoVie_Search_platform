import SearchBar from "./Searchbar";

const Navbar = ({ searchTerm, onSearch }) => {
  return (
    <div className="w-full bg-black fixed top-0 z-50 border-b">
      {/* Main navbar container with responsive padding */}
      <div className="px-3 py-2 lg:px-4 lg:py-3 flex justify-between items-center">
        {/* Logo - smaller on mobile, larger on desktop */}
        <div className="text-lg lg:text-2xl font-bold text-white flex-shrink-0">
          🎬 Flixify
        </div>

        {/* Search bar - takes remaining space */}
        <div className="mx-3 lg:mx-6 flex-1 max-w-md">
          <SearchBar value={searchTerm} onSearch={onSearch} />
        </div>

        {/* Desktop navigation links - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
          <a
            className="bg-amber-400 px-3 py-2 rounded-lg text-center hover:bg-amber-500 transition-colors"
            href="/"
          >
            Movies
          </a>
          <a
            className="bg-amber-400 px-3 py-2 rounded-lg text-center hover:bg-amber-500 transition-colors"
            href="/tvshows"
          >
            TV Shows
          </a>
          <a
            className="bg-amber-400 px-3 py-2 rounded-lg text-center hover:bg-amber-500 transition-colors"
            href="/webseries"
          >
            Web Series
          </a>
          <a
            className="bg-amber-400 px-3 py-2 rounded-lg text-center hover:bg-amber-500 transition-colors"
            href="/myspace"
          >
            MySpace
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
