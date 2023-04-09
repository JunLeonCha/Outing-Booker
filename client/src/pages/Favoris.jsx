import React from "react";
import imgTest from "../assets/images/nature.png";
import "../assets/scss/pages/_wanderlists.scss";
import Header from "../components/Header";

const Favoris = () => {
  return (
    <>
      <Header />
      <div className="favoris">
        <div className="onglet">
          <div>Évènement</div>
          <div>Organistateurs</div>
        </div>
        <div className="feeds">
          <div className="events">
            <h2>2 Juillet 2023</h2>
            <div className="event">
              <img src={imgTest} alt="" />
              <p>Title</p>
            </div>
          </div>
          <div className="events">
            <h2>2 Juillet 2023</h2>
            <div className="event">
              <img src={imgTest} alt="" />
              <p>Title</p>
            </div>
            <div className="event">
              <img src={imgTest} alt="" />
              <p>Title</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favoris;
