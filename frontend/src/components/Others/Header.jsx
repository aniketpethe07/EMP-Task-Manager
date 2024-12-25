import React from 'react'

const Header = () => {
  return (
    <div
     className='flex items-end justify-between'
    >
        <h1 className='text-2xl'>Hello <br/> Aniket👋🏻</h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-full'>Log out</button>
    </div>
  )
}

export default Header