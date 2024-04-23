import { Outlet } from 'react-router-dom';

// import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import Work from "./components/Work";
import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = "Julian's portfolio"
  }, [])
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;