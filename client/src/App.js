import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ERROR_404 from "./pages/error/ERROR_404";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/authentification/Login";
import Register from "./pages/authentification/Signup";
import Favoris from "./pages/Favoris";
import Voyages from "./pages/Voyages";

function App() {
  // const title = window.location.pathname.split('/')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accueil" element={<Home />} />
          <Route path="/Favoris" element={<Favoris />} />
          <Route path="/Voyages" element={<Voyages />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/*" element={<ERROR_404 />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
