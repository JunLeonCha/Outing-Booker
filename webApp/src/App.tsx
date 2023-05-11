import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ERROR_404 from "./pages/error/ERROR_404";
import Login from "./pages/authentification/Login";
import Register from "./pages/authentification/Signup";
import Favoris from "./pages/Favoris";
import Voyages from "./pages/Voyages";
import Account from "./pages/Account";
import ShopingCard from "./pages/ShopingCard";
import EventView from "./pages/Events/EventDetails";
import AllEvent from "./pages/Events/AllEvents";
import Layout from "./pages/Layout";
import { ArrowLeft } from "lucide-react";

function App() {
  // const title = window.location.pathname.split('/')
  const routes = [
    { path: "/", element: <Layout content={< Home />} title="Accueil" /> },
    { path: "/Accueil", element: <Layout content={< Home />} title="Accueil" /> },
    { path: "/Favoris", element: <Layout content={< Favoris />} title="Favoris" /> },
    { path: "/Voyages", element: <Layout content={< Voyages />} title="Voyages" /> },
    { path: "/Evenement/:id", element: <Layout content={< EventView />} arrowBack={<ArrowLeft />} /> },
    { path: "/Evenements", element: <Layout content={< AllEvent />} title={"Evènements"} /> },
    { path: "/Connexion", element: <Login /> },
    { path: "/Inscription", element: <Register /> },
    { path: "/Compte", element: <Layout content={< Account />} title="Compte" /> },
    { path: "/Panier", element: <Layout content={< ShopingCard />} title="Panier" /> },
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
      </BrowserRouter>
    </>
  );
}

export default App;
