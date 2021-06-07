import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import About from "./pages/About"
// import Contact from "./pages/Contact"
import ProjectGallery from "./pages/ProjectGallery"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        
        <Route exact path="/projectgallery" component={ProjectGallery} />
       

        <Footer />
      </div>
    </Router>
  );
}

export default App;
