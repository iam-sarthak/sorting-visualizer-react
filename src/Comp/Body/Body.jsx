import React from 'react';
import './Body.css';
import { useSelector } from 'react-redux';

const Body = () => {
  const arr = useSelector(state => state.array.array);

  // console.log("Rendering Body with array:", arr);

  return (
    <div className='body'>
      <div className="bars">
        {arr.map((value, id) => (
          <div 
            style={{ height: `${(value.number*3)/4}vh` }} 
            key={id} 
            className={`bar 
              ${value.correct ? 'correct' : ''} 
              ${value.checking ? 'checking' : ''} 
              ${value.swap ? 'swap' : ''}`}
          >
            {value.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
