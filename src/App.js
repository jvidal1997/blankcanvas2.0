import './css/style.css';
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import LibraryPage from "./pages/LibraryPage";
import ChartingPage from "./pages/ChartingPage";
import InstallPage from "./pages/InstallPage";
import ReferencesPage from "./pages/ReferencesPage";
import AboutPage from "./pages/AboutPage";
import MusicPlayer from "./pages/components/MusicPlayer/MusicPlayer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className='App'>
              <nav>
                  <div>
                      <Link className='nav-item' to='/'>
                          Home
                      </Link>
                      <Link className='nav-item' to='/history'>
                          History
                      </Link>
                      <Link className='nav-item' to='/library'>
                          Library
                      </Link>
                      <Link className='nav-item' to='/charting'>
                          Charting
                      </Link>
                      <Link className='nav-item' to='/install'>
                          Install
                      </Link>
                      <Link className='nav-item' to='/references'>
                          References
                      </Link>
                      <Link className='nav-item' to='/about'>
                          About
                      </Link>
                  </div>
              </nav>
              <Routes>
                  <Route path='/' element={<HomePage />}></Route>
                  <Route path='history' element={<HistoryPage />}></Route>
                  <Route path='library' element={<LibraryPage />}></Route>
                  <Route path='charting' element={<ChartingPage />}></Route>
                  <Route path='install' element={<InstallPage />}></Route>
                  <Route path='references' element={<ReferencesPage />}></Route>
                  <Route path='about' element={<AboutPage />}></Route>
              </Routes>
              <footer className='footer position-absolute bottom-0 start-0'>
                  <MusicPlayer />
              </footer>
          </div>
      </Router>
  );
}

export default App;
