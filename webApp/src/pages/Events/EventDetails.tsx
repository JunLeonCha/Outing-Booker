import React, { useEffect } from "react";
import Header from "../../components/Header";
import "../../assets/scss/pages/_eventDetail.scss";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();

  useEffect(() => {
    const getMain = document.querySelector("main") as HTMLElement;
    const header = document.querySelector("header") as HTMLElement;
    if (location.pathname === "/test") {
      header.style.cssText = `
            position: absolute;
            width: 100%;
            color: white;
            background-color: black;
            height: 92px;
          `;
      getMain.style.padding = "0";
    } else {
      getMain.style.padding = "24px";
    }
    return () => {
      header.style.cssText = `
    `;
      getMain.style.padding = "24px";
    };
  }, [location.pathname]);

  return (
    <>
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
        <div className="info-travels">
          <div className="travel">
            <div className="info">
              <h2>17h36 Train vers Paris</h2>
              <div className="details">
                <div>
                  <span>N°</span>
                  <span>49796</span>
                </div>
                <div>
                  <span>Départ</span>
                  <span>Angers - St Laud</span>
                </div>
                <div>
                  <span>Arrivé</span>
                  <span>Paris - Montpartnasse</span>
                </div>
                <div>
                  <span>Trajet</span>
                  <span>3h27</span>
                </div>
              </div>
              <h2>17h36 Train vers Paris</h2>
              <div className="details">
                <div>
                  <span>N°</span>
                  <span>49796</span>
                </div>
                <div>
                  <span>Départ</span>
                  <span>Angers - St Laud</span>
                </div>
                <div>
                  <span>Arrivé</span>
                  <span>Paris - Montpartnasse</span>
                </div>
                <div>
                  <span>Trajet</span>
                  <span>3h27</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
