import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ERROR_404 from "./pages/error/ERROR_404";
import NavBar from "./components/NavBar";
import Login from "./pages/authentification/Login";
import Register from "./pages/authentification/Signup";
import Favoris from "./pages/Favoris";
import Voyages from "./pages/Voyages";
import Account from "./pages/Account";
import ShopingCard from "./pages/ShopingCard";
import EventView from "./pages/EventView";
import Event from "./pages/Event";

function App() {
  // const title = window.location.pathname.split('/')
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/Accueil", element: <Home /> },
    { path: "/Favoris", element: <Favoris /> },
    { path: "/Voyages", element: <Voyages /> },
    { path: "/Evenements", element: <EventView /> },
    { path: "/test", element: <Event /> },
    { path: "/Connexion", element: <Login /> },
    { path: "/Inscription", element: <Register /> },
    { path: "/Compte", element: <Account /> },
    { path: "/Panier", element: <ShopingCard /> },
    { path: "/*", element: <ERROR_404 /> },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
