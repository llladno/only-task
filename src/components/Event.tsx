import React from 'react';
import {eventsDataType} from "../types/event";

interface eventsType {
    event: eventsDataType
}

const Event = ({event}:eventsType) => {
    return (
        <div className='eventbox'>
            <h3>{event.year}</h3>
            <p>{event.event}</p>
        </div>
    );
};

export default Event;