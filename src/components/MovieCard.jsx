import { Calendar } from "lucide-react";
const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(movie)}
    >
      {/* Movie poster image */}
      <img
        src={
          movie.i?.imageUrl ||
          "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.l}
        className="w-full h-60 object-cover"
      />

      {/* Movie information container */}
      <div className="p-3">
        <h2 className="font-semibold text-sm lg:text-md truncate">{movie.l}</h2>
        <p className="text-xs lg:text-sm text-gray-600 truncate">{movie.s}</p>
        <p className="text-xs lg:text-sm text-gray-500 flex items-center gap-1">
          <Calendar size={12} />
          {movie.y}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
