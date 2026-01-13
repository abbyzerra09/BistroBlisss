import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="bg-stone-800 text-white text-sm w-full">
        <div className="max-w-9xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="md:mx-20 flex gap-4">
            <span><i className="fa-solid fa-phone"></i> (414) 857 - 0107</span>
            <span className='hidden lg:flex'><i className="py-1 fa-regular fa-envelope"></i> yummy@bistrobliss</span>
          </div>

          <div className="flex md:mx-20 justify-end md:gap-3 gap-1">
            <span className='p-1 px-1.5 bg-gray-600 hover:bg-gray-100/30 transition rounded-4xl'><i className="fa-brands fa-twitter"></i></span>
            <span className='p-1 px-1.5 bg-gray-600 hover:bg-gray-100/30 transition rounded-4xl'><i className="fa-brands fa-instagram"></i></span>
            <span className='p-1 px-1.5 bg-gray-600 hover:bg-gray-100/30 transition rounded-4xl'><i className="fa-brands fa-facebook"></i></span>
            <span className='p-1 px-1.5 bg-gray-600 hover:bg-gray-100/30 transition rounded-4xl'><i className="fa-brands fa-github"></i></span>
          </div>
            
        </div>
      </div>

      <div className='sticky top-0 z-50'>
      <nav className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          <img className="w-30  md:w-45 " src={logo}></img>

          {/* desktop menu */}

          <ul className="hidden min-[860px]:flex gap-8 text-gray-700 font-medium">
            <li className="px-1 py-1 hover:text-black/250 hover:px-1 Hover:py-1 hover:bg-gray-300 rounded-2xl hover:scale-105 transition-all cursor-pointer">
            <Link to="/" className="px-3 py-1 block">Home</Link>
            </li>
            <li className="px-1 py-1 hover:text-black/250 hover:px-1 Hover:py-1 hover:bg-gray-300 rounded-2xl hover:scale-105 transition-all cursor-pointer">
            <Link to="/about" className="px-3 py-1 block">About</Link>
            </li>
            <li className="px-1 py-1 hover:text-black/250 hover:px-1 Hover:py-1 hover:bg-gray-300 rounded-2xl hover:scale-105 transition-all cursor-pointer">
            <Link to="/menu" className="px-3 py-1 block">Menu</Link>
            </li>
            <li className="px-1 py-1 hover:text-black/250 hover:px-1 Hover:py-1 hover:bg-gray-300 rounded-2xl hover:scale-105 transition-all cursor-pointer">
            <Link to="/delivery" className='px-3 py-1 block'>Delivery</Link>
            </li>
            <li className="px-1 py-1 hover:text-black/250 hover:px-1 Hover:py-1 hover:bg-gray-300 rounded-2xl hover:scale-105 transition-all cursor-pointer">
            <Link to="/contacts" className='px-3 py-1 block'>Contacts</Link>
            </li>
          </ul>

          <button className="hidden min-[860px]:flex border border-black px-6 py-2 font-semibold rounded-full hover:bg-red-700 hover:border-red-700 hover:text-white transition">
            Book A Table
          </button>


          <div className="hamburger min-[860px]:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <i className="text-2xl fa-solid fa-bars"></i>
          </div>
        </div>
      

          {/* mobile menu */}
        {isOpen && (
        <div className="min-[860px]:hidden absolute top-full left-0 w-full bg-white shadow-xl z-999">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <li className='hover:text-red-700 transition duration-150'>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className='hover:text-red-700 transition duration-150'>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className='hover:text-red-700 transition duration-150'>
              <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
            </li>
            <li className='hover:text-red-700 transition duration-150'>
              <Link to="/delivery" onClick={() => setIsOpen(false)}>Delivery</Link>
            </li>
            <li className='hover:text-red-700 transition duration-150'>
              <Link to="/contacts" onClick={() => setIsOpen(false)}>Contacts</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </div>
        </>
    );
}

export default Header