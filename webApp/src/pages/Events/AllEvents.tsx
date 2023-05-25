import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { EventResult } from '../../interfaces/ticketMaster';
import { useNavigate } from 'react-router-dom';
import "../../assets/scss/pages/_allEvents.scss";

const EventResultView = () => {

    const [eventsResult, setEventsResult] = useState<EventResult[]>([]);
    const navigate = useNavigate()

    const handleClickDetails = (id: string) => {
        navigate(`/evenement/${id}`)
    }

    useEffect(() => {
        const allEvents = async () => {
            const resultsEvent = await axios.get("/extern-api/ticket-master/events/");
            setEventsResult(resultsEvent.data);
        }
        allEvents();
    }, []);

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

export default EventResultView;
