import { NavLink, Link } from 'react-router-dom'; 

import Search from '../../utility/Search';
import Select from "../../utility/Select";

import { AiFillAmazonCircle } from "react-icons/ai";


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
    url: "#",
    text: "Marketplace",
    icon: <></>,
  }
];

const selectOptions = [
  "Dehradun", "Audi", "BMW", "Citroen", "Ford", "Honda", "Jaguar", 
  "Land Rover", "Mercedes", "Mini", "Nissan", "Toyota", "Volvo"
];


export default function Header() {

  return (
    <header className="flex justify-around items-center gap-5 py-5 bg-secondaryLight">
      
      <div className="menu-icon">
        <div className="w-7 h-1 my-1.5 bg-black"/>
        <div className="w-7 h-1 my-1.5 bg-black"/>
        <div className="w-7 h-1 my-1.5 bg-black"/>
      </div>
      
      <div className="app-brand">
        <Link className="text-2xl font-bold"  href="#">
          Address Guru
        </Link>
      </div>

      <form className="flex gap-1" onSubmit={e => e.preventDefault()}>
        <Select options={selectOptions}/>
        <Search/>
      </form>

      <nav className="nav-links flex items-center gap-5">
        {navItems.map(navItem => 
          <NavLink key={navItem.id} to={navItem.url}>
            {navItem.text}
          </NavLink>
        )}
        <NavLink className="px-4 py-2 rounded font-bold bg-primaryOrange text-white" to="#">
          Post Free Ad +
        </NavLink>
        <NavLink className="px-4 py-2 rounded bg-primaryBlue text-white" to="#">
          Login
        </NavLink>
      </nav>    
    </header>
  );
}
