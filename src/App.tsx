import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Weddings from "./pages/Weddings";
import Gallery from "./pages/Gallery";
import Lifestyle from "./pages/Lifestyle";
import Portrait from "./pages/Portrait";
import Studio from "./pages/Studio";

// Wrapper component to access location
function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/blog"; // Add more paths as needed

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}
      <main className={`flex-grow ${!hideLayout ? "pt-16" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </main>
      {/* {!hideLayout && <Footer />} */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
