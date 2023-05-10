import React from "react";
import "../assets/scss/pages/_wanderlists.scss";
import Header from "../components/Header";
import WanderLists from "../localjsons/testWanderList.json";
const Favoris = () => {
  return (
    <>
      <div className="favoris">
        <div className="onglet">
          <div>Évènement</div>
          <div>Organistateurs</div>
        </div>
        <div className="feeds">
          <div className="events">
            <h2></h2>
            <div className="event">
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favoris;
