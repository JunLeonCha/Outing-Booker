import { useEffect, useState } from "react";
import "../../assets/scss/pages/_eventDetail.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { EventResult } from "../../interfaces/ticketMaster";
import { useAuth } from "../../context/AuthContext";

const EventDetails = () => {
  const { session } = useAuth();
  const location = useLocation();
  const [eventResult, setEventResult] = useState<EventResult>();
  const [journey, setJourneysResults] = useState([]);
  const [messageError, setMessageError] = useState("");


  const handleSubmitBooking = async () => {
    if (session) {
      await axios.post("/booking/new-booking", {
        id_user: session.id,
        id_event: eventResult?.id
      })
    } else {
      setMessageError("Une erreur est survenue")
    }
  }

  console.log(session)

  useEffect(() => {
    let eventId = location.pathname.split("/")[2];
    // let pathname = location.pathname.split("/")[1];

    const getEvent = async () => {
      await axios.get(`/extern-api/Ticket-Master/getEventById/${eventId}`).then((res) => {
        setEventResult(res.data)
      })
    }
    getEvent()
  }, []);

  const dateStart = eventResult?.dates.start.dateTime.replace("Z", "").split('T')[0];
  console.log(dateStart)
  return (
    <>
      <img src={`${eventResult?.images[2].url}`} alt="" />
      <div className="details">
        <div className="details__header">
          <h1>{eventResult?.name}</h1>
          <div className="details__header_localisation">
            {`${eventResult?._embedded.venues[0].name}, 
            ${eventResult?._embedded.venues[0].city.name} 
            ${eventResult?._embedded.venues[0].address ? eventResult?._embedded.venues[0].address.line1 : ""}`}
          </div>
        </div>
        <div className="details__tags">
          <div className="details__tags_tag">{eventResult?.classifications[0].segment.name}</div>
          <div className="details__tags_tag">{eventResult?.classifications[0].genre.name}</div>
          <div className="details__tags_tag">{eventResult?._embedded.venues[0].country.name}</div>
        </div>
        <div className="details__description">{eventResult?.description}
        </div>
      </div>
      <button type="button" className="book" onClick={handleSubmitBooking}>Réserver</button>
      <span>{messageError}</span>
      <div className="steps">
        <h2>Étapes pour un départ de <span>Angers</span></h2>
        <div className="steps__list">
          <div className="steps__list_step">
            <h3>
              <span>17 : 36</span>
              <span>Train vers Paris</span>
            </h3>
            <div className="steps__list_step_details">
              <span>N°</span>
              <span>49796</span>
              <span>Départ</span>
              <span>Angers - St Laud</span>
              <span>Arrivé</span>
              <span>Paris - Montpartnasse</span>
              <span>Trajet</span>
              <span>3h27</span>
            </div>
          </div>
          <div className="steps__list_step steps__list_step--arrived">
            <h3>
              <span>23 : 02</span>
              <span>Arrivé à destination</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
