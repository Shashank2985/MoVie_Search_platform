import { X, Calendar } from "lucide-react";
const MovieModal = ({ movie, isOpen, onClose, isMobile }) => {
  // Don't render if modal is not open
  if (!isOpen) return null;

  // Handle backdrop clicks to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isMobile
          ? "bg-white"
          : "bg-black/80 flex items-center justify-center p-4"
      }`}
      onClick={isMobile ? undefined : handleBackdropClick}
    >
      {/* Modal content container */}
      <div
        className={`${
          isMobile
            ? "h-full w-full"
            : "bg-white rounded-lg max-w-2xl w-full max-h-screen"
        } overflow-hidden rounded-lg`}
      >
        {/* Modal header with close button */}
        <div className="flex justify-between items-center p-4 border-b-black bg-black text-amber-400 mb-2">
          <h1 className="text-lg font-bold truncate">Movie Details</h1>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700 rounded-full transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal body with movie details */}
        <div className={`${isMobile ? "flex-1" : ""} overflow-y-auto`}>
          <div className="flex flex-col lg:flex-row lg:mt-4 lg:ml-4 justify-center">
            {/* Movie poster */}
            <div className="lg:w-1/3 flex-shrink-0">
              <img
                src={
                  movie.i?.imageUrl ||
                  "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.l}
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>

            {/* Movie information */}
            <div className="flex-1 p-6">
              <h2 className="text-2xl font-bold mb-4">{movie.l}</h2>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-gray-700">Release Year: {movie.y}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Cast:</h3>
                  <p className="text-gray-600">{movie.s}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Movie ID:
                  </h3>
                  <p className="text-gray-600 font-mono text-sm">{movie.id}</p>
                </div>

                {/* Placeholder for additional movie details */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    About this movie:
                  </h3>
                  <p className="text-gray-600 text-sm">
                    This is a placeholder for additional movie information that
                    would typically come from a more detailed API response. In a
                    real application, this would include plot summary, ratings,
                    genre, director, and other relevant details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
