import React from 'react';

export default function Button({ title }) {
  return (
    <button className='w-fit bg-primary text-white py-3 px-8 text-base  hover:ring-2 ring-primary hover:bg-white hover:text-primary transition duration-700'>
      {title}
    </button>
  );
}
