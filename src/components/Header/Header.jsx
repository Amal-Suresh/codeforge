import React, { useState } from 'react'
import Logo from '../../Assets/Logo.png'
import menuIcon from '../../Assets/menu Icon.webp'
import closeIcon from '../../Assets/close icon.jpg'
function Header({data}) {
  const [icon,setIcon] = useState(data)
  return (
    <nav className='flex justify-between border border-red-500 h-12'>
      <div className='w-full md:w-[14rem] lg:min-w-[15rem] justify-between flex items-center'>
        <img src={Logo} alt='' className='w-[16rem] md:w-[14rem] lg:w-[16rem] mt-4 md:ms-3 lg:ms-8' />
        {icon ? <img className="static md:hidden w-[35px] mr-4 cursor-pointer" src={menuIcon} alt='' onClick={()=>setIcon(!icon)}/> :
          <img className="static md:hidden w-[3rem] mr-2 cursor-pointer" src={closeIcon} alt='' onClick={()=>setIcon(!icon)}/>
        }
      </div>
      <div className={`flex w-[65%] absolute h-screen md:h-auto md:w-auto md:items-center md:pb-0 md:items-center bg-red-400 md:bg-white top-[3rem] ${icon?"left-[-100rem]":"left-0"} transition-all duration-500 md:static`}>
        <ul className='flex flex-col gap-7 ms-8 mt-2 md:mt-0 md:flex-row md:gap-7 lg:gap-16 md:mr-12 lg:mr-24' style={{ fontFamily: "Montserrat" }}>
          <li className='cursor-pointer hover:font-semibold'>Home</li>
          <li className='cursor-pointer hover:font-semibold'>Services</li>
          <li className='cursor-pointer hover:font-semibold'>Portfolio</li>
          <li className='cursor-pointer hover:font-semibold'>About Us</li>
          <li className='cursor-pointer hover:font-semibold'>Contact Us</li>
          {/* <img src={Logo}/> */}
        </ul>
      </div>
    </nav>
  )
}

export default Header
