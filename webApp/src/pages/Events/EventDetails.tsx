import { useEffect, useState } from "react";
import "../../assets/scss/pages/_eventDetail.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { EventResult } from "../../interfaces/ticketMaster";

const EventDetails = () => {
  const location = useLocation();
  const [eventResult, setEventResult] = useState<EventResult>();
  const getMain = document.querySelector("main") as HTMLElement;
  const header = document.querySelector("header") as HTMLElement;
  const eventId = location.pathname.split("/")[2]
  const pathname = location.pathname.split("/")[1]
  console.log(eventId)

  useEffect(() => {
    const getEvent = async () => {
      const res = await axios.get(`/extern-api/Ticket-Master/getEventById/${eventId}`)
      setEventResult(res.data)
    }

    getEvent()
  }, [pathname, eventId]);

  console.log(eventResult)
  return (
    <div className="info-event">
      {/* <img
        src={eventResult?.images()}
        alt=""
      /> */}
      <img src={`${eventResult?.images[2].url}`} alt="" />
      <div className="info-legend">
        <h2>{eventResult?.name}</h2>
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
  );
};

export default EventDetails;
