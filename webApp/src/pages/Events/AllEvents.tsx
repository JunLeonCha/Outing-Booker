import React, { useEffect } from 'react';
import axios from 'axios';
import { useState, ReactNode } from 'react';
import { EventResult } from '../../interfaces/ticketMaster';
import { useNavigate } from 'react-router-dom';

const EventResultView = () => {

    const [eventResults, setEventResults] = useState<EventResult[]>([]);
    const navigate = useNavigate()

    const handleClickDetails = (id: string) => {
        navigate(`/test`)
    }

    useEffect(() => {
        const allEvents = async () => {
            const resultsEvent = await axios.get("/extern-api/Ticket-Master/All-Event/");
            setEventResults(resultsEvent.data);
        }
        allEvents();
    }, []);

    console.log(eventResults);

    return (
        <div>
            {eventResults.map((eventResult: EventResult) => (
                <div key={eventResult.id} onClick={() => handleClickDetails(eventResult.id)}>
                    <div>{eventResult.name}</div>
                    <div>Genre: {eventResult.classifications[0].segment.name}</div>
                    <div><img src={eventResult.images[2].url} style={{ width: 300, borderRadius: 8 }} alt="" /></div>
                    <div>Adresse: {eventResult._embedded.venues[0].name}</div>
                    <div>Ville: {eventResult._embedded.venues[0].city.name}</div>
                    <div>Pays: {eventResult._embedded.venues[0].country.name}</div>
                </div>
            ))}
        </div>
    );
};

export default EventResultView;
