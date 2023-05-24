import React from 'react';

const Statistics = ({ keysPressed, accuracy,wpm }) => {
  return (
    <div className='flex justify-center '>

    <div className='flex justify-center gap-9 text-[#394867] font-semibold text-2xl m-6 w-11/12 items-center'>
      <span className='w-[200px]'>Keys Pressed: {keysPressed}</span>
      <span className='w-[200px]'>Accuracy: {accuracy}%</span>
      <span className='w-[150px]'>WPM: {wpm}</span>
       
    </div>
    </div>
  );
};

export default Statistics;
