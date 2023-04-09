import React from "react";
import Header from "../components/Header";
import "../asset/scss/pages/_home.scss";
import { Search } from "lucide-react";
import imgConcert from "../asset/images/concert.png";
import imgEvent from "../asset/images/hobbie.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="searchBar">
          <Search color="#475467" size="24" />
          <input type="text" placeholder="Rechercher" />
        </div>
        <div className="events-box">
          <div className="categories">
            <h2>Categories</h2>
            <img src={imgConcert} alt="" />
          </div>
          <div className="events">
            <h2>Évènement</h2>
            <img src={imgEvent} alt="" />   
          </div>
          <div className="events">
            <h2>Évènement</h2>
            <img src={imgConcert} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
