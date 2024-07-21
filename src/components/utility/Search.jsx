import React from 'react'

export default function Search({ className }) {

  return (
    <div className={`${className} input-group flex gap-1`}>
      <input className="w-full px-4 py-2 border rounded" placeholder="Search by Name" name="search"/>
      <button className="px-4 py-2 rounded bg-primaryBlue text-white">
        Search
      </button>
    </div>
  );
}
