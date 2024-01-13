import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
import {FaComputer} from 'react-icons/fa6';
import {SiFirebase} from 'react-icons/si';
const Sidenav = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    console.log('state changed')
  };

  return (
    <div>
      <AiOutlineMenu onClick ={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/40 flex flex-col justify-center items-center z-20'>
            <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-orange-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-orange-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaComputer size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a href="#aboutme" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-orange-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <SiFirebase size={20} />
              <span className='pl-4'>About Me</span>
            </a>


          </div>

        )
        : (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#home" className='rounded-full shadow-lg bg-red-100 shadow-orange-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome size={20} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-red-100 shadow-orange-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaComputer size={20} />
          </a>
          <a href="#aboutme" className='rounded-full shadow-lg bg-red-100 shadow-orange-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <SiFirebase size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav