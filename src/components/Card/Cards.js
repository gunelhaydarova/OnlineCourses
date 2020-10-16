import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>OUR CLASSES</h1>
      <h4>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</h4>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/classes-1.jpg'
              text='Developing Mobile Apps'
              label='Adventure'
              path='/courses'
            />
            <CardItem
              src='images/classes-2.jpg'
              text='Convert PSD to HTML'
              label='Luxury'
              path='/courses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/classes-3.jpg'
              text='Convert HTML to WordPress'
              label='Mystery'
              path='/courses'
            />
            <CardItem
              src='images/classes-4.jpg'
              text='Developing Mobile Apps'
              label='Adventure'
              path='/courses'
            />
            <CardItem
              src='images/classes-5.jpg'
              text='Learned Smoke Effects'
              label='Adrenaline'
              path='/courses'
            />
          </ul>
        </div>
      </div>
      <div style={{ height: 50 }} />

    </div>
  );
}

export default Cards;
