import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { EventResult } from '../interfaces/ticketMaster';

const Event = () => {

    const [eventResults, setEventResults] = useState<EventResult[]>([]);

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
                <div key={eventResult.id}>
                    <div>{eventResult.name}</div>
                    <div>{eventResult.description}</div>
                    <div>{eventResult.url}</div>
                </div>
            ))}
        </div>
    );
};

export default Event;
