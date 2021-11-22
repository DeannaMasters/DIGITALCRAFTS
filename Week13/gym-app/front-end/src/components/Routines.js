import React from 'react';
import './Routines.css';
import RoutineItem from './RoutineItem';
import Floor from './video/floor.mp4';
import Pommel from './video/pommel.mp4';
import Rings from './video/rings.mp4';
import Vault from './video/vault.mp4';
import Pbar from './video/pbar.mp4';
import Hibar from './video/hibar.mp4';

function Routines() {
  return (
    <div className='routines'>
      <h1>Watch these AMAZING routines!</h1>
        <div className='routines_container'>
            <div className='routines_videos'>
                {/* <ul className='routines_items'> */}
                <div className="videos"> 
                    <video autoPlay loop muted>
                        <source src={Floor} type= "video/mp4"/>
                    </video>
                    </div>
                <div className="videos">
                    <video autoPlay loop muted>
                        <source src={Pommel} type= "video/mp4" />
                    </video>
                    </div>
                <div className="videos">
                    <video autoPlay loop muted>
                        <source src={Rings} type= "video/mp4" />
                    </video>
                    </div>
                <div className="videos">
                    <video autoPlay loop muted>
                        <source src={Vault} type= "video/mp4" />
                    </video>
                    </div>
                <div className="videos">
                    <video autoPlay loop muted>
                        <source src={Pbar} type= "video/mp4" />
                    </video>
                    </div>
                <div className="videos">
                    <videos autoPlay loop muted>
                        <source src={Hibar} type= "video/mp4" />
                    </videos>
                    </div>
                {/* </ul> */}
            </div> 
            </div> 
        <div className='routines__container'>
            <div className='routines__wrapper'>
                <ul className='routines__items'>
                    <RoutineItem
                    src='images/floor.jpg'
                    text='Floor'
                    label='Skill'
                    path='/routines'
                    />
                    <RoutineItem
                    src='images/pommel.jpg'
                    text='Pommel'
                    label='Stamina'
                    path='/routines'
                    />
                </ul>
                <ul className='routines__items'>
                    <RoutineItem
                    src='images/rings.jpg'
                    text='Rings'
                    label='Strength'
                    path='/routines'
                    />
                    <RoutineItem
                    src='images/vault.jpg'
                    text='Vault'
                    label='Power'
                    path='/routines'
                    />
                    <RoutineItem
                    src='images/pbar.jpg'
                    text='Parallel Bars'
                    label='Focus'
                    path='/routines'
                    />
                    <RoutineItem
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

export default Routines;