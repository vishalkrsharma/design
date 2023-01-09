import React from 'react';
import star3 from '../assets/Group 1604.png';
import star2 from '../assets/Group 1605.png';
import star1 from '../assets/Group 1606.png';
import star0 from '../assets/Group 1608.png';

import point from '../assets/Vector-3.png';

function People({ people }) {
  const stars = [star0, star1, star2, star3];
  const aspectRatio = [26 / 25, 26 / 25, 45 / 27, 64 / 27];
  return (
    <div className='people p-2 flex justify-between'>
      <img
        className='w-20'
        // style={{ aspectRatio: `${aspectRatio[people.stars]}` }}
        src={stars[people.stars]}
        alt={stars[people.stars]}
      />
      <div className='user-info flex items-center flex-1'>
        <img className='h-12 m-2' src={people.avatar} alt={people.avatar} />
        <div className='name'>
          <h2>{people.name}</h2>
          <h2 className='text-slate-600'>{people.sub}</h2>
        </div>
      </div>
      <div className='score-cont flex items-center flex-1 relative'>
        <img className='absolute top-3 w-5' src={point} alt={point} />
        <div className='score absolute left-8'>
          <div className='head text-xl font-medium'>{people.points}</div>
          <div className='sub text-slate-600'>Reward Points</div>
        </div>
      </div>
    </div>
  );
}

export default People;
