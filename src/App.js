import runner from './assets/🏃🏻‍♂️.png';
import star from './assets/Vector-5.png';
import People from './components/People';

import avatar0 from './assets/Group 1577.png';
import avatar1 from './assets/Group 1578.png';
import avatar2 from './assets/Group 1603.png';

function App() {
  const peopleArray = [
    {
      stars: 3,
      avatar: avatar0,
      name: 'Ashwathi Arun',
      sub: 'First',
      points: 5000,
    },
    {
      stars: 2,
      avatar: avatar2,
      name: 'Swetha Metha',
      sub: 'Second',
      points: 4997,
    },
    {
      stars: 1,
      avatar: avatar1,
      name: 'Vivek T Raj',
      sub: 'Third',
      points: 4800,
    },
    {
      stars: 0,
      avatar: avatar2,
      name: 'Ponnam Reddy',
      sub: 'Fourth',
      points: 4050,
    },
    {
      stars: 0,
      avatar: avatar1,
      name: 'Ameer Johar',
      sub: 'Fifth',
      points: 3999,
    },
  ];

  return (
    <div className='h-max'>
      <div className='container mt-5 mx-auto' style={{ maxWidth: '800px' }}>
        <div className='heading p-5 pb-0'>
          <h1 className='text-2xl font-medium mb-1'>Challenge</h1>
          <h3 className='text-sm text-slate-600'>Complete your daily tasks to fast track your preparation.</h3>
        </div>

        <div className='container p-5'>
          <div className='main p-5 lg:flex justify-between items-center'>
            <div className='container flex items-center'>
              <div className='rounded-full bg-sky-100 inline-block mr-3'>
                <img src={runner} alt={runner} />
              </div>
              <div>
                <h1 className='header-main text-lg'>Your Doing Great! Keep Going</h1>
                <div className='header-sub text-base text-slate-600'>You Are in Second in the Group</div>
              </div>
            </div>
            <div className='container flex items-center max-lg:mt-5 max-lg:ml-16 '>
              <img className='h-5 mr-2' src={star} alt={star} />
              <h2>You Just Need 3 Points to Get First</h2>
            </div>
          </div>
          <div className='body'>
            {peopleArray.map((people, idx) => (
              <People people={people} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
