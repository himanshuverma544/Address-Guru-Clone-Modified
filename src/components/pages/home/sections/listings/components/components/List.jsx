import React from 'react'

export default function List({ list }) {

  return (
    <div className="list w-[32%] flex gap-3 p-2 rounded-lg shadow">
      <div className="img-cont w-[80px] h-[inherit]">
        <img className="w-full h-full object-cover rounded-lg" src={list.image} alt={list.name}/>
      </div>
      <div className="details">
        <div className="name">
          {list.name}
        </div>
        <div className="business text-sm font-semibold text-primaryBlue">
          {list.business}
        </div>
        <div className="time text-xs">
          {list.time}
        </div>
      </div>
    </div>
  );
}
