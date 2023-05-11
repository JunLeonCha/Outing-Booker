import { useEffect, useState } from "react";
import "../../assets/scss/pages/_eventDetail.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { EventResult } from "../../interfaces/ticketMaster";
import { useAuth } from "../../context/AuthContext";

const EventDetails = () => {
  const { session } = useAuth()
  const location = useLocation();
  const [eventResult, setEventResult] = useState<EventResult>();
  const eventId = location.pathname.split("/")[2]
  const pathname = location.pathname.split("/")[1]

  // const date = (date: any) => {
  //   const newDate = new Date(date)
  //   return newDate
  // }

  const handleSubmitBooking = async () => {
    const res = await axios.post("/Booking/newBooking", {
      id_user: session.id,
      id_event: eventResult?.id
    })
  }

  useEffect(() => {
    const getEvent = async () => {
      const res = await axios.get(`/extern-api/Ticket-Master/getEventById/${eventId}`)
      setEventResult(res.data)
    }

    getEvent()
  }, [pathname, eventId]);
  return (
    <div className="info-event">
      <img src={`${eventResult?.images[2].url}`} alt="" />
      <div className="info-legend">
        <h2>{eventResult?.name}</h2>
        {eventResult?.dates.start.localDate}
        <div>{eventResult?._embedded.venues[0].address.line1} - {eventResult?._embedded.venues[0].postalCode}</div>
        <div>{eventResult?._embedded.venues[0].city.name}</div>
        <div className="references">
          <div>Catégorie: {eventResult?.classifications[0].segment.name}</div>
          <div>Genre: {eventResult?.classifications[0].genre.name}</div>
          <div>{eventResult?._embedded.venues[0].country.name}</div>
        </div>

        {/* -------------------------------------------- */}
        {/* Style brut dans la div suivante à en enlever */}

        <div className="price-event" style={{ display: "flex", flexDirection: 'column' }}>
          {eventResult?.priceRanges[0].min === eventResult?.priceRanges[0].max ?
            <span>Prix:{eventResult?.priceRanges[0].max} {eventResult?.priceRanges[0].currency}</span>
            :
            <>
              <span>Prix:{eventResult?.priceRanges[0].min} {eventResult?.priceRanges[0].currency}</span>
              <span>Prix:{eventResult?.priceRanges[0].max} {eventResult?.priceRanges[0].currency}</span>
            </>
          }


        </div>
        <button onClick={handleSubmitBooking}>Réserver</button>
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
