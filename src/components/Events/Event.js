import React from 'react';
import './Event.css';
import EventItems from "./EventItems";

class Event  extends React.Component{
  
  render(){
    const styles2 = {
		paperContainer: {
			backgroundImage: `url(${"/images/event.jpg"})`
		}
	};
    return (
      <div className="container event">
		  <h1>UPCOMING EVENTS</h1>
		  <h4> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</h4>
		  <div className="split left figure-img" style={styles2.paperContainer} >  </div>
          <div className="split right">

			  <EventItems
				  path='/services'
				  day='19'
				  month='Apr'
				  name='Noah Henderson'
				  text='Practice Workshop 2018'
				  location='291 South 21th Street, Suite 721 New York NY 10016'
			  />
			  <EventItems
				  path='/services'
				  day='19'
				  month='Apr'
				  name='Noah Henderson'
				  text='Practice Workshop 2018'
				  location='291 South 21th Street, Suite 721 New York NY 10016'
			  />
			  <EventItems
				  path='/services'
				  day='19'
				  month='Apr'
				  name='Noah Henderson'
				  text='Practice Workshop 2018'
				  location='291 South 21th Street, Suite 721 New York NY 10016'
		  		/>

		  </div>
		  <div style={{ height: 110 , clear: "both"}} />

	  </div>
    );
  }
}

export default Event;
