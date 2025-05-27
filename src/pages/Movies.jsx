import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

const Movies = () => {
  // State management using React hooks
  const [movies, setMovies] = useState([]); // Stores the list of movies
  const [filteredMovies, setFilteredMovies] = useState([]); // Stores filtered search results
  const [searchTerm, setSearchTerm] = useState("avengers"); // Default value for API
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [selectedMovie, setSelectedMovie] = useState(null); // Currently selected movie for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [isMobile, setIsMobile] = useState(false); // Device type detection
  const [error, setError] = useState(null); // ✅ Add error state

  // Detect if device is mobile on component mount
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };

    // Check initial screen size
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // ✅ Fixed API fetch function
  const fetchMovies = async () => {
    // Don't fetch if search term is empty
    if (!searchTerm.trim()) {
      setMovies([]);
      setFilteredMovies([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null); // Clear previous errors

      // ✅ Debug: Log environment variables (remove in production)
      console.log("API Key exists:", !!import.meta.env.VITE_RAPIDAPI_KEY);
      console.log("API Host:", import.meta.env.VITE_RAPIDAPI_HOST);

      const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(
        searchTerm
      )}`;
      console.log("Fetching URL:", url);

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host":
            import.meta.env.VITE_RAPIDAPI_HOST || "imdb8.p.rapidapi.com",
        },
      });

      // ✅ Check if response is ok
      if (!res.ok) {
        throw new Error(
          `HTTP error! status: ${res.status} - ${res.statusText}`
        );
      }

      const data = await res.json();
      console.log("API Response:", data);

      // ✅ Set movies and filtered movies
      const moviesList = data.d || [];
      setMovies(moviesList);
      setFilteredMovies(moviesList);
    } catch (error) {
      console.error("Error fetching from RapidAPI:", error);
      setError(error.message);
      setMovies([]);
      setFilteredMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Fetch movies when searchTerm changes (with debouncing)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 200); // Wait 500ms after user stops typing

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [searchTerm]); // ✅ Include searchTerm as dependency

  // ✅ Remove the second useEffect for filtering since we're fetching new data
  // The API already filters results based on search term

  // Handle movie card click - opens modal
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  // ✅ Updated search handler
  const handleSearch = (term) => {
    setSearchInput(term); // update input field
    setSearchTerm(term); // fetches from API
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <Navbar searchTerm={searchInput} onSearch={handleSearch} />

      {/* Main content area */}
      <div className="flex-1 pt-16 pb-20 lg:pb-8">
        <div className="px-4 py-4">
          {/* Search results indicator */}
          {searchTerm && (
            <div className="mb-4 text-sm text-gray-600">
              {filteredMovies.length > 0
                ? `Found ${filteredMovies.length} result(s) for "${searchTerm}"`
                : !isLoading && `No results found for "${searchTerm}"`}
            </div>
          )}

          {/* ✅ Error display */}
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <strong>Error:</strong> {error}
              <br />
              <small>
                Please check your API credentials and internet connection.
              </small>
            </div>
          )}

          {/* Loading indicator */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-gray-600">Loading movies...</div>
            </div>
          ) : (
            /* Movie grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={handleMovieClick}
                />
              ))}
            </div>
          )}

          {/* No movies message */}
          {!isLoading &&
            !error &&
            filteredMovies.length === 0 &&
            searchTerm && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-2">
                  No movies found
                </div>
                <div className="text-gray-400 text-sm">
                  Try searching for a different movie title
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Bottom Navigation - Mobile only */}
      <BottomNav />

      {/* Movie Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Movies;
