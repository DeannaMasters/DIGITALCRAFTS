import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Watch these AMAZING routines!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/floor.jpg'
              text='Floor'
              label='Skill'
              path='/routines'
            />
            <CardItem
              src='images/pommel.jpg'
              text='Pommel'
              label='Stamina'
              path='/routines'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/rings.jpg'
              text='Rings'
              label='Strength'
              path='/routines'
            />
            <CardItem
              src='images/vault.jpg'
              text='Vault'
              label='Power'
              path='/routines'
            />
            <CardItem
              src='images/pbar.jpg'
              text='Parallel Bars'
              label='Focus'
              path='/routines'
            />
            <CardItem
              src='images/hibar.bmp'
              text='Hibar'
              label='Courage'
              path='/routines'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;