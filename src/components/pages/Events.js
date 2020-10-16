import React from 'react';
import '../../App.css';  
import EventItems from '../Events/EventItems';
import  Footer from '../Footer/Footer';
import  Subscribe from '../Counter/Subscribe';
import '../Events/Event.css'
function Events() {
  return (
    <div>
      <h1 className=' events'>Events</h1> 
       <div className='event_items' >
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
      <div className='event_items' >
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
        <Subscribe/>
        <Footer/>
       
    </div>
  ) 
  ;
}

export default  Events;