import React from 'react';

export default function Box({ title, item }) {
  return (
    <div className='box'>
      <div className='title'>{title}</div>
      <img className='item-img' src={item?.img} alt='' />
    </div>
  );
}
