import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image4 from '../assets/image4.jpg'
import image10 from '../assets/image10.jfif'
import image11 from '../assets/image11.jfif'

function Cards() {
  return (
    <div className='cards'>
      <h1>"No better way to connect with people than through the love of music" -many random dudes :&#41; </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image11}
              text='Create an egg to share your music taste with your friends and people across the world'
              label='Create an egg'
              path='/'
            />
            <CardItem
              src={image10}
              text='Discover new beats and experience those you already know and love with people from all over the world'
              label='Join an egg'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image4}
              text='What are you waiting for?! Lets get you started!'
              label= 'get started'
              path='/'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;