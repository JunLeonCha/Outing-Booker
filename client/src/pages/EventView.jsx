import React, { useEffect } from "react";
import Header from "../components/Header";
import "../assets/scss/pages/_eventView.scss";

const EventView = () => {
  useEffect(() => {
    const localPage = window.location.pathname;
    if (localPage === "/Evenements") {
      document.querySelector("header").style.cssText = `
            position: absolute;
            width: 100%;
            color: white;
            background-color: black;
            height: 92px;
          `;
      document.querySelector("main").style.padding = "0";
    }
  }, []);

  return (
    <>
      <Header />
      <div className="info-event">
        <img
          src="http://s1.picswalls.com/wallpapers/2016/06/16/beautiful-earth-wallpaper_033132218_311.jpg"
          alt=""
        />
        <div className="info-legend">
          <h2>Conférence XA12</h2>
          <div>Liège, Belgique</div>
          <div className="references">
            <div>Sciences</div>
            <div>Conférence</div>
            <div>Belgique</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            excepturi alias quidem totam accusantium distinctio voluptate
            expedita recusandae quis reprehenderit vero sit doloribus deserunt
            iste, quo enim magnam natus aut?
          </div>
          <button>Réserver</button>
          <p>
            Etape pour un départ de <span>Angers</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default EventView;
