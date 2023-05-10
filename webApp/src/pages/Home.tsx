import React from "react";
import Header from "../components/Header";
import "../assets/scss/pages/_home.scss";
import { Search } from "lucide-react";
import imgConcert from "../assets/images/concert.png";
import imgEvent from "../assets/images/hobbie.png";

const Home = () => {
  return (
    <>
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
