import React from 'react';

export default function Box({ title, item, result }) {
  return (
    <div
      className={`box ${result === 1 ? 'win' : result === 0 ? 'lose' : null}`}
    >
      <div className='title'>{title}</div>
      <img className='item-img' src={item?.img} alt='' />
      <div className='result'>
        {result === 1 ? 'WIN🥰' : result === 0 ? 'LOSE😥' : result}
      </div>
    </div>
  );
}
