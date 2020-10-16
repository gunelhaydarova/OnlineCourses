import React from 'react';
import './Teacher.scss';
import Items from './Items';

class Teachers extends React.Component {
  render () {
    const cardsData = [
      {id: 1, title: 'Olivia Young', content: 'Teacher', imgUrl: 'images/person1.jpg'},
      {id: 2, title: 'Daniel Anderson', content: 'Professor', imgUrl: 'images/person2.jpg'},
      {id: 3, title: 'David Brook', content: 'Teacher', imgUrl: 'images/person3.jpg'},
      {id: 4, title: 'Brigeth Smith', content: 'Teacher', imgUrl: 'images/person4.jpg'},
       
    ]
    
    return(
      <div className="container teachers_info">
        <h1 style={{ 'text-align': 'center' }}>
           OUR EXPERIENCED PROFESSOR
        </h1>
        <p className="subTitle">
           Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
        </p>
        <Items cards={ cardsData } />
      </div>
    );
  }
}

export default Teachers;