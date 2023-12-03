// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Bloginput from "./pages/dashboard/Bloginput";
import Dashboard from "./pages/dashboard/Dashboard";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create-blog/" element={<Bloginput />} />
      </Routes>

      {/* <Link to={"./"}>Home</Link>
      <Link to={"./about"}>About</Link> */}
    </>
  );
}

export default App;
