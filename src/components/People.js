import React from 'react';
import star3 from '../assets/Group 1604.png';
import star2 from '../assets/Group 1605.png';
import star1 from '../assets/Group 1606.png';
import star0 from '../assets/Group 1608.png';

import point from '../assets/Vector-3.png';

function People({ people }) {
  const stars = [star0, star1, star2, star3];

  return (
    <div className='people py-2 px-5 flex relative'>
      <div style={{ width: '47.4px' }}>
        <img className='h-5 mt-6 mx-auto' src={stars[people.stars]} alt={stars[people.stars]} />
      </div>
      <div className='user-info flex items-center basis-3/5 ml-3'>
        <img className='h-12 m-2' src={people.avatar} alt={people.avatar} />
        <div className='name'>
          <h2>{people.name}</h2>
          <h2 className='text-slate-600'>{people.sub}</h2>
        </div>
      </div>
      <div className='score-cont flex items-center'>
        <img className='-mt-5' src={point} alt={point} />
        <div className='score ml-2'>
          <div className='head text-xl font-medium'>{people.points}</div>
          <div className='sub text-slate-600'>Reward Points</div>
        </div>
      </div>
    </div>
  );
}

export default People;
