import React from "react";
import "../assets/scss/pages/_wanderlists.scss";
import Header from "../components/Header";
import WanderLists from "../localjsons/testWanderList.json";

const Voyages = () => {
  const eventsByDate = {};

  WanderLists.forEach(({ id, title, img, date }) => {
    if (eventsByDate[date]) {
      // Si la date existe déjà dans l'objet eventsByDate, ajouter l'événement à la liste existante
      eventsByDate[date].push({ id, title, img });
    } else {
      // Sinon, créer une nouvelle liste pour cette date et ajouter l'événement
      eventsByDate[date] = [{ id, title, img }];
    }
  });
  return (
    <>
      <Header title={"Voyages"} />
      <div className="travels">
        <div className="onglet">
          <p>Voyages en cours</p>
        </div>
        <div className="feeds">
          {Object.entries(eventsByDate).map(([date, events]) => (
            <div className="events" key={date}>
              <h2>{date}</h2>
              {events.map(({ id, title, img }) => (
                <div className="event" key={id}>
                  <img src={img} alt="" />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Voyages;
