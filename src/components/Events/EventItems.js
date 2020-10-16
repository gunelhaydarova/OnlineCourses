import React from 'react';

function EventItems(props) {
    return (
        <>
                <div className="event-entry">
                    <div className="desc">
                        <p className="meta"><span className="day">{props.day}</span><span className="month">{props.month}</span></p>
                        <p className="organizer"><span>Organized by:</span> <span><b>{props.name}</b></span></p>
                        <h2><a href="/">{props.text}</a></h2>
                    </div>
                    <div className="location">
                        <span className="icon"><i className="icon-map"/></span>
                        <p>{props.location}</p>
                    </div>
                </div>
        </>
    );
}

export default EventItems;
