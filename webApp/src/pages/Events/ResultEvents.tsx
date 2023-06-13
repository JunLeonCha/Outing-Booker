import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { EventResult } from "../../interfaces/ticketMaster";

const ResultEvents = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [eventsResult, setEventsResult] = useState<EventResult[]>([])

    const handleClickDetails = (id: string) => {
        navigate(`/evenement/${id}`)
    }

    useEffect(() => {
        let eventId = location.pathname.split("/")[2];

        const getEvent = async () => {
            await axios.get(`${process.env.REACT_APP_OUTING_BOOKER}/extern-api/ticket-master/events/query/${eventId}`).then((res) => {
                setEventsResult(res.data)
            })
        }

        getEvent()
    }, [])


    return (
        <div className='events'>
            {eventsResult.map((eventResult: EventResult) => (
                <div className="event" key={eventResult.id}>
                    <h2>{eventResult.name}</h2>
                    <div>Genre: {eventResult.classifications[0].segment.name}</div>
                    <img
                        src={eventResult.images[2].url}
                        style={{ width: 300, borderRadius: 8 }}
                        alt="event-image"
                        onClick={() => handleClickDetails(eventResult.id)}
                    />
                    <div>Adresse: {eventResult._embedded.venues[0].name}</div>
                    <div>Ville: {eventResult._embedded.venues[0].city.name}</div>
                    <div>Pays: {eventResult._embedded.venues[0].country.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ResultEvents;