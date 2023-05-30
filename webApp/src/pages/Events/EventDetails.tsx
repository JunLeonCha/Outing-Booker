import { useEffect, useState } from "react";
import "../../assets/scss/pages/_eventDetail.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { EventResult } from "../../interfaces/ticketMaster";
import { useAuth } from "../../context/AuthContext";
import { sncfInterface } from "../../interfaces/SNCF";
import EventFunctions from "../../functions/EventDetails";

const EventDetails = () => {
  const newFunctions = new EventFunctions()
  const { session } = useAuth();
  const location = useLocation();
  const [eventResult, setEventResult] = useState<EventResult>();
  const [journey, setJourneysResults] = useState<sncfInterface>();
  const [messageError, setMessageError] = useState<string>();
  const [messageSuccess, setMessageSuccess] = useState<string>();

  const handleSubmitBooking = async () => {
    if (session) {
      const data = {
        id_user: session.userData[0].id,
        id_event: eventResult?.id,
        event_name: eventResult?.name,
        event_city: eventResult?._embedded.venues[0]?.city?.name,
        event_address: eventResult?._embedded.venues[0]?.address.line1,
        event_postal_code: eventResult?._embedded.venues[0]?.postalCode,
        event_start: newFunctions.convertToTimestampz(eventResult ? eventResult?.dates.start.localTime : ""),
        id_journey: journey?.journeys[0]?.sections[1].id,
        identifier: journey?.journeys[0]?.sections[1].display_informations?.headsign,
        departure_travel: journey ? newFunctions.convertToTimestampz(journey?.journeys[0]?.departure_date_time) : "",
        arrived_travel: journey ? newFunctions.convertToTimestampz(journey?.journeys[0]?.arrival_date_time) : "",
      }
      try {
        axios.post("/booking/make_reservation", data).then(() => {
          setMessageSuccess("La réservation a été enregistrée avec succès");
        })
      } catch (err: any) {
        setMessageError(err)
      }
    } else {
      setMessageError("Une erreur est survenue")
    }
  }

  useEffect(() => {
    let eventId = location.pathname.split("/")[2];

    const getEvent = async () => {
      await axios.get(`/extern-api/Ticket-Master/events/${eventId}`).then((res) => {
        setEventResult(res.data)
      })
    }

    getEvent()

  }, [location.pathname]);


  useEffect(() => {
    if (eventResult && session) {
      const getTrain = async () => {
        axios.get(`/extern-api/sncf/base_departure_arrived?local_city=${session.userData[0].postal_code}&event_city=${eventResult?._embedded.venues[0]?.postalCode}&departure_date=${eventResult?.dates.start.localDate}`).then((res) => {
          setJourneysResults(res.data)
        })
      }
      getTrain()
    } else {
      setJourneysResults(undefined)
    }
  }, [eventResult, session])

  console.log(session)

  return (
    <>
      <img src={`${eventResult?.images[2].url}`} alt="" />
      <div className="eventDetails__content">
        <div className="left">
          <div className="details">
            <div className="details__header">
              <h1>{eventResult?.name}</h1>
              <div className="details__header_localisation">
                {`${eventResult?._embedded.venues[0].name}, 
            ${eventResult?._embedded.venues[0].city.name} 
            ${eventResult?._embedded.venues[0]?.postalCode}
            ${eventResult?._embedded.venues[0].address ? eventResult?._embedded.venues[0].address.line1 : ""}`}
                <span>Le {eventResult ? newFunctions.getFormattedDateEvent(eventResult) : ""}</span>
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
          {messageSuccess && (
            <span>{messageSuccess}</span>
          )}
          {messageError && (
            <span>{messageError}</span>
          )}
          <button type="button" className="book" onClick={handleSubmitBooking}>Réserver</button>
        </div>
        {journey && !journey.error && journey.journeys && (
          <div className="steps">
            <h2>{journey ? newFunctions.messageStepFromLocalCity(session.userData[0].city) : " "}</h2>
            <div className="steps__list">
              <div className="steps__list_step">
                <h3>
                  {journey ? newFunctions.getFormattedJourneyInfo(journey) : ""}
                  <span>
                  </span>
                </h3>

                <div className="steps__list_step_details">
                  <span>N°</span>
                  <span>{journey.journeys[0].sections[1].display_informations.headsign}</span>
                  <span>Départ</span>
                  <span>{journey?.journeys[0].sections[1].from.name}</span>
                  <span>Arrivé</span>
                  <span>{journey?.journeys[0].sections[1].to.name}</span>
                  <span>Trajet</span>
                  <span>{newFunctions.formatHoursFromSeconds(journey.journeys[0].duration)}</span>
                </div>
                {journey && journey.error ? (
                  <div className="steps__list_step steps__list_step--arrived">
                    <h3>
                      <span>23:02</span>
                      <span>Arrivé à destination</span>
                    </h3>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventDetails;
