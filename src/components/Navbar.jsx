import { useState} from 'react'
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from './../constants/index';
import { logo, menu, close } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} >
    <div className='w-full flex justify-center sm:justify-between items-center max-w-7xl mx-auto'>

      {/* Logo */}
      <Link to="/"  className='flex flex-col sm:flex-row items-center gap-2' onClick={() => {setActive(""); window.scrollTo(0,0);}}>

        <img src={logo} alt='logo' className='h-8 object-contain'/>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>Mohamed &nbsp;| Portfolio</p>
      </Link>

      {/* Navlinks */}
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link) => (
          <li key={link.id} className={`${active === link.title ? "text-white" : "text-gray-400"} 
          hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={()=> setActive(link.title)} >
          <a href={`#${link.id}`}>{link.title}</a>
          </li>))}
      </ul>

        {/* Small screens navbar */}
      <div className='sm:hidden flex items-center flex-1 justify-end cursor-pointer'>
        <img src={toggle ? close : menu} alt='menu' onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient my-2 min-w-[140px] 
          absolute top-20 z-10 right-0 mx-4 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-gray-400"} 
               font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={()=> {
                  setToggle(!toggle);
                  setActive(link.title);}} >
                <a href={`#${link.id}`}>{link.title}</a>
                </li>))}
              </ul>
          </div>
      </div>

    </div>
    </nav>
  )
}

export default Navbar