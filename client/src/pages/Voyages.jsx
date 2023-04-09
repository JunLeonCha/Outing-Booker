import React from "react";
import imgTest from "../asset/images/nature.png";
import "../asset/scss/pages/_wanderlists.scss";
import Header from "../components/Header";

const Voyages = () => {
  return (
    <>
      <Header />
      <div className="travels">
        <div className="onglet">
          <p>Voyages en cours</p>
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

export default Voyages;
