import  React from 'react';
import Navd from './nav_3';

export default function Learn() {
    return (
      <div>
        <header className="header">
            <h1> You like to Learn on your Own?? Fine! </h1>
            <h4> TAKE A SEAT and choose a random link to learn what I CHOOSE </h4>
            <hr className='hori'></hr> <hr className='hori'></hr> <hr className='hori'></hr> <hr className='hori'></hr> <hr className='hori'></hr> <hr className='hori'></hr>
            <h6>but don't try to escape or you'll have to start over!</h6>
            <Navd Api1="/learn_1" Api2="/learn_2"/>
        </header>
      </div>
    )
}
