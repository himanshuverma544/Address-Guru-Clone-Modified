export default function List({ list }) {

  return (
    <div className="list flex gap-3 p-3 rounded-lg shadow">
      <div className="img-cont w-[6.25rem] h-[inherit]">
        <img className="size-full object-cover rounded-lg" src={list.image} alt={list.name}/>
      </div>
      <div className="details flex flex-col gap-1">
        <div className="name text-sm">
          {list.name}
        </div>
        <div className="business text-xs font-semibold text-primaryBlue">
          {list.business}
        </div>
        <div className="time text-xs">
          {list.time}
        </div>
      </div>
    </div>
  );
}
