
import  { useState } from 'react'
import Button from './Button';
import{GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../Navigation/Navigation';

const Nav = () => {
    let Links =[
      {name:"HOME",link:ROUTES.HOME},
      {name:"SERVICE",link:ROUTES.SERVICES},
      {name:"PRICE",link:ROUTES.PRICE},
      {name:"CONTACT",link:ROUTES.CONTACT},
    ];
    let [open,setOpen]=useState(false);
    const navigate = useNavigate();
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800 '>
        Laundry
        <span className='text-3xl text-indigo-600 mr-1 overflow-hidden '>
        CT
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer z-20 md:hidden'>
      <GiHamburgerMenu name={open ? 'close':'menu'} />
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-100 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500 '>{link.name}</Link>
            </li>
          ))
        }
        <Button>
          <span onClick={()=>{return(navigate('/contact'))}}> place order</span>
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav