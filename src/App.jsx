import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Movies from "./pages/Movies";
import RapidAPIFetch from "./components/RapidAPIFetch";
// import other pages when ready

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Movies />
    </div>
  );
}

export default App;
