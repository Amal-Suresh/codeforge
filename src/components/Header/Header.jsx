import React from 'react'

function Header() {
  return (
    <nav className='flex justify-between border border-red-500 h-12'>
        <img src='https://repository-images.githubusercontent.com/182089533/6cd221f7-3721-4c71-af83-ea883b72a53a' className='w-32 ms-10'/>
        <div className='flex items-center'>
            <ul className='flex md:gap-14 lg:gap-20 mr-24 items-center' style={{fontFamily:"Montserrat"}}>
              <li className='cursor-pointer hover:font-semibold'>Home</li>
              <li className='cursor-pointer hover:font-semibold'>Services</li>
              <li className='cursor-pointer hover:font-semibold'>Portfolio</li>
              <li className='cursor-pointer hover:font-semibold'>About Us</li>
              <li className='cursor-pointer hover:font-semibold'>Contact Us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
