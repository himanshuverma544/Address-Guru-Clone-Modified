import { NavLink, Link } from 'react-router-dom'; 

import Search from '../../utility/Search';
import Select from '../../utility/Select';

import { CATEGORY } from '../../../../routes';


const navItems = [
  {
    id: 1,
    url: "#",
    text: "To Let",
    icon: <></>,
  },
  {
    id: 2,
    url: "#",
    text: "Jobs",
    icon: <></>,
  },
  {
    id: 3,
    url: CATEGORY.pathname,
    text: "Category",
    icon: <></>,
  }
];

const selectOptions = [
  "Dehradun", "Audi", "BMW", "Citroen", "Ford", "Honda", "Jaguar", "Land Rover", "Mercedes", "Mini", "Nissan", "Toyota", "Volvo"
];


export default function Header() {

  return (
    <header className="flex flex-wrap justify-around items-center gap-5 px-5 py-5 bg-secondaryLight">
      
      <div className="parent-wrapper w-full flex justify-between sm:w-auto sm:gap-5 md:w-auto md:grow">
        <div className="menu-app-brand-wrapper flex items-center gap-5 lg:justify-around xl:gap-10">
          <div className="menu-icon flex flex-col gap-[0.4rem]">
            <div className="w-5 h-px bg-black"/>
            <div className="w-5 h-px bg-black"/>
            <div className="w-5 h-px bg-black"/>
          </div> 
          <div className="app-brand">
            <Link className="font-bold sm:text-xl md:text-2xl lg:text-xl xl:text-2xl" href="#">
              Address Guru
            </Link>
          </div>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <Select className="w-fit text-sm lg:text-xs xl:text-sm" options={selectOptions}/>
        </form>
      </div>
      
      <form className="grow md:grow-0" onSubmit={e => e.preventDefault()}>
        <Search className="text-sm lg:text-xs xl:text-sm"/>
      </form>

      <nav className="nav-links w-full flex justify-around items-center gap-5 px-5 py-2 fixed bottom-0 left-0 z-10 text-center text-xs shadow bg-secondaryLight sm:text-sm lg:w-auto lg:static lg:shadow-none lg:text-xs xl:text-sm">
        {navItems.map(navItem => 
          <NavLink key={navItem.id} to={navItem.url}>
            {navItem.text}
          </NavLink>
        )}
        <NavLink className="flex justify-center items-center gap-1 px-3 py-1 rounded font-bold bg-primaryOrange text-white" to="#">
          <div className="text">
            Post <span className="hidden">Free </span>Ad
          </div>
          <div className="icon hidden text-sm font-bold sm:block sm:text-base">
            +
          </div>
        </NavLink>
        <NavLink className="px-3 py-1 rounded bg-primaryBlue text-white lg:py-2" to="#">
          Login
        </NavLink>
      </nav>    
    </header>
  );
}
