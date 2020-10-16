import React from 'react';
import './Teacher.scss';

const Card = (props) => (
  <div className="info">
    <img src={ props.imgUrl }
      alt={ props.alt || 'Image' } />
    <div className="info-content">
      <h5>{ props.title }</h5>
      <p>{ props.content }</p>
    </div>
  </div>
);

const Items = (props) => (
  <div className="info-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);


export default  Items