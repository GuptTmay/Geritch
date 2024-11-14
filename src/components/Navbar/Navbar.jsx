import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import { useState } from 'react';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='max-w-full bg-black flex justify-between items-center px-4 sm:px-8 py-4'>
      <div>
        <img className="flex justify-start items-center w-36 sm:w-40 xl:w-56" src={images.gericht} alt="WebApp Logo" />
      </div>
      <ul className='flex-1 justify-center items-center hidden md:flex font-alt'>
        <li className='text-white hover:text-gray cursor-pointer px-2 text-sm transition ease-in duration-500 hover:translate-y-[-5px]'><a href='#Home'>Home</a></li>
        <li className='text-white hover:text-gray cursor-pointer px-2 text-sm transition ease-in duration-500 hover:translate-y-[-5px]'><a href='#About'>About</a></li>
        <li className='text-white hover:text-gray cursor-pointer px-2 text-sm transition ease-in duration-500 hover:translate-y-[-5px]'><a href='#Menu'>Menu</a></li>
        <li className='text-white hover:text-gray cursor-pointer px-2 text-sm transition ease-in duration-500 hover:translate-y-[-5px]'><a href='#Awards'>Awards</a></li>
        <li className='text-white hover:text-gray cursor-pointer px-2 text-sm transition ease-in duration-500 hover:translate-y-[-5px]'><a href='#Contact'>Contact</a></li>
      </ul>

      <div className='hidden sm:flex justify-end items-center'>
        <a className="text-white text-sm m-2 hover:underline decoration-golden hover:underline-offset-[6px] transition ease-in duration-200 hover:translate-y-[-2px]" href="#login">Log In / Registration</a>
        <div className='bg-gray h-[30px] w-[1px]' />
        <a className='text-white text-sm m-2 hover:underline decoration-golden hover:underline-offset-[6px] transition ease-in duration-200 hover:translate-y-[-2px]' href="#book">Book Table</a>
      </div>

      <div className='fixed right-4 top-4 z-20 md:hidden flex-col bg-black border-[1px] border-stone-700 rounded-sm p-1'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} className='cursor-pointer hover:scale-110 transition ease-linear duration-200' />
        {toggleMenu && (
          <div className='fixed bg-black top-0 left-0 z-20 w-screen h-screen animate-slide-bottom'>
            <MdOutlineRestaurantMenu color="#DCCA87" fontSize={27} onClick={() => setToggleMenu(false)} className='cursor-pointer hover:scale-110 transition ease-linear duration-200 absolute top-5 right-5' />
            
            <ul className='flex flex-col justify-center items-center h-full font-base text-[1.75rem] font-medium'>
              <li className='hover:text-white cursor-pointer py-1 text-golden transition ease-in duration-300'><a onClick={() => setToggleMenu(false)} href='#Home'>Home</a></li>
              <li className='hover:text-white cursor-pointer py-1 text-golden transition ease-in duration-300'><a onClick={() => setToggleMenu(false)} href='#About'>About</a></li>
              <li className='hover:text-white cursor-pointer py-1 text-golden transition ease-in duration-300'><a onClick={() => setToggleMenu(false)} href='#Menu'>Menu</a></li>
              <li className='hover:text-white cursor-pointer py-1 text-golden transition ease-in duration-300'><a onClick={() => setToggleMenu(false)} href='#Awards'>Awards</a></li>
              <li className='hover:text-white cursor-pointer py-1 text-golden transition ease-in duration-300'><a onClick={() => setToggleMenu(false)} href='#Contact'>Contact</a></li>
            </ul>
          </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;
