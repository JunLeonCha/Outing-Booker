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
    { path: "/accueil", element: <Layout content={< Home />} title="Accueil" /> },
    { path: "/favoris", element: <Layout content={< Favoris />} title="Favoris" /> },
    { path: "/voyages", element: <Layout content={< Voyages />} title="Voyages" /> },
    { path: "/evenement/:id", element: <Layout content={< EventView />} arrowBack={<ArrowLeft />} /> },
    { path: "/evenements", element: <Layout content={< AllEvent />} title={"Evènements"} /> },
    { path: "/connexion", element: <Login /> },
    { path: "/inscription", element: <Register /> },
    { path: "/compte", element: <Layout content={< Account />} title="Compte" /> },
    { path: "/panier", element: <Layout content={< ShopingCard />} title="Panier" /> },
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
