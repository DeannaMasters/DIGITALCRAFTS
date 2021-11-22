import React from 'react';
import { Link } from 'react-router-dom';

function RoutineItem(props) {
  return (
    <>
      <li className='routines__item'>
        <Link className='routines__item__link' to={props.path}>
          <figure className='routines__item__pic-wrap' data-category={props.label}>
            <img
              className='routines__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='routines__item__info'>
            <h5 className='routines__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default RoutineItem;