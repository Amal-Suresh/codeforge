import React from 'react'

const Home = ({setIcon}) => {
  const handleClick = () => {
    console.log("clicked")
    setIcon(false);
  };
  return (
    <div onClick={handleClick} className='font-extrabold text-red-700'>Home</div>
  )
}

export default Home