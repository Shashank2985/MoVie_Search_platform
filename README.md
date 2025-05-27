# MoVie_Search_platform

Description: 🎬 Modern movie search platform built with React and Tailwind CSS. Features real-time API-powered search, responsive design, and interactive modals. Integrates with movie database APIs for comprehensive film information.

# Movie Search Platform

A modern, responsive web application for searching and discovering movies with an intuitive user interface and detailed movie information display.

## 🎬 Features

- **Real-time Movie Search**: Search for movies with instant results and suggestions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive Modal System**: View detailed movie information in elegant modal overlays
- **Movie Details Display**: Comprehensive movie information including:
  - Movie posters and images
  - Release year
  - Cast information
  - Movie ID and metadata
- **Modern UI/UX**: Clean, professional interface with smooth interactions
- **Mobile-First Approach**: Tailored experience for mobile users with adaptive layouts

## 🚀 Technologies Used

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **API Integration**: Movie database API integration
- **Responsive Design**: Mobile-first responsive design principles

## 📱 User Experience

### Desktop Experience

- Modal overlays with backdrop click-to-close functionality
- Centered modal dialogs with elegant animations
- Optimized layout for larger screens

### Mobile Experience

- Full-screen modal views for better mobile interaction
- Touch-optimized interface elements
- Simplified navigation tailored for mobile users

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/movie-search-platform.git
   cd movie-search-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your movie API credentials to the `.env.local` file.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
movie-search-platform/
├── src/
│   ├── components/
│   │   ├── MovieModal.jsx      # Modal component for movie details
│   │   ├── SearchBar.jsx       # Search input component
│   │   └── MovieCard.jsx       # Movie display card component
│   ├── hooks/
│   │   └── useMovieSearch.js   # Custom hook for movie search logic
│   ├── utils/
│   │   └── api.js              # API utility functions
│   ├── styles/
│   │   └── globals.css         # Global styles and Tailwind imports
│   └── App.jsx                 # Main application component
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🎯 Key Components

### MovieModal Component

- Responsive modal system with backdrop click detection
- Conditional rendering based on device type
- Professional layout with movie poster and detailed information
- Accessible close functionality with keyboard and click interactions

### Search Functionality

- Real-time search with debounced input
- API integration for movie data retrieval
- Error handling and loading states

## 🌟 Usage

1. **Search for Movies**: Use the search bar to find movies by title
2. **View Results**: Browse through the search results in an organized grid layout
3. **Movie Details**: Click on any movie to view detailed information in a modal
4. **Close Modal**: Click the X button or click outside the modal (desktop) to close

## 🔧 Configuration

The application supports various configuration options:

- **API Endpoints**: Configure movie database API endpoints
- **Responsive Breakpoints**: Customize mobile/desktop breakpoints
- **Theme Settings**: Modify color schemes and styling variables

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Advanced filtering options (genre, year, rating)
- [ ] User favorites and watchlist functionality
- [ ] Movie recommendations based on viewing history
- [ ] Social sharing features
- [ ] Dark/light theme toggle
- [ ] Offline functionality with service workers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Movie data provided by RapidAPI
- Icons provided by Lucide React
- UI components styled with Tailwind CSS

## 📞 Support

For support, email shashankguptaji45@gmail.com or create an issue in the GitHub repository.

---

\*\*Made with ❤️ by Shashank

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
