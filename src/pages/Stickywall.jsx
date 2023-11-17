import React from 'react';
import Nav from '../components/Nav';

function Stickywall() {
  return (
    <div>
      <Nav />
      <div className="max-w-[90%] mx-auto mt-[150px] p-6 flex flex-col justify-center text-center">
        <div className="text-3xl sm:text-5xl font-semibold mb-4">Working on this!</div>
        <div className="animate-spin text-3xl sm:text-5xl">⚙️</div>
      </div>
    </div>
  );
}

export default Stickywall;
