import React from 'react';

const Current = () => {
  const date = new Date();

  // Get day, month, year
  const day = date.toLocaleString('default', { weekday: 'long' });
  const month = date.toLocaleString('default', { month: 'long' });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return (
    <div>
      <p className='font'>{day}, {month} {dayOfMonth}, {year}</p>
    </div>
  );
};

export default Current;
