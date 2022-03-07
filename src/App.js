import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <div className="main" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
