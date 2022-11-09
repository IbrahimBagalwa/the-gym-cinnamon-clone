import React from 'react';
export default function Button({ children, styles }) {
  return (
    <button
      className={`w-fit btn outline-none bg-primary hover:text-primary border-2 border-primary text-white px-8 flex items-center justify-center relative overflow-hidden shadow-white transition-all z-10 h-12 ${styles}`}
    >
      <div className='btn__shadow shadow-btn absolute w-[120%] z-0 pt-[120%] top-2/4 left-2/4 rounded-full -translate-x-2/4 -translate-y-2/4 transition-transform duration-500'></div>
      <span className='relative z-10'>{children}</span>
    </button>
  );
}
