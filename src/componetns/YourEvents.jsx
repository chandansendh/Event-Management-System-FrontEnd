import React from 'react';
import EventCard from './EventCard';
import { NavLink } from 'react-router-dom';

const YourEvents=()=>{
    return (
      <>
        <div className="industrie">
          <div className='ce-cont'>
            <button className="ce-btn">
              <NavLink to="/createevent" className="create-btn">Create Event</NavLink>
            </button>
          </div>
          <EventCard event={false} />
        </div>
      </>
    );
}

export default YourEvents;
