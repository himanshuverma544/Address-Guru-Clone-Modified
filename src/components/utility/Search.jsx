import React from 'react'

export default function Search() {

  return (
    <div className='input-group flex border'>
      <input className="px-4 py-2" placeholder="Search by Name" name="search"/>
      <button className="px-4 py-2 rounded bg-primaryBlue text-white">
        Search
      </button>
    </div>
  );
}
