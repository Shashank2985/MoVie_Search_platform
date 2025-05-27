import { NavLink } from "react-router-dom";
import { Home, Tv, Film, User } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t flex justify-around items-center py-2 lg:hidden z-40">
      <a
        href="/"
        className="flex flex-col items-center p-2 hover:bg-gray-100 rounded transition-colors"
      >
        <Home size={20} />
        <span className="text-xs mt-1">Movies</span>
      </a>
      <a
        href="/tvshows"
        className="flex flex-col items-center p-2 hover:bg-gray-100 rounded transition-colors"
      >
        <Tv size={20} />
        <span className="text-xs mt-1">TV</span>
      </a>
      <a
        href="/webseries"
        className="flex flex-col items-center p-2 hover:bg-gray-100 rounded transition-colors"
      >
        <Film size={20} />
        <span className="text-xs mt-1">Web</span>
      </a>
      <a
        href="/myspace"
        className="flex flex-col items-center p-2 hover:bg-gray-100 rounded transition-colors"
      >
        <User size={20} />
        <span className="text-xs mt-1">MySpace</span>
      </a>
    </div>
  );
};

export default BottomNav;
