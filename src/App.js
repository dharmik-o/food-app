import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Places } from "./Components/Places";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
