import React from 'react'

export default function footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-red-600 font-medium text-lg text-gray-500'>
      <div className="py-4 flex items-center justify-around">

      <span >{new Date().getFullYear()} &copy; All Rights Reserved. </span>
      <span>Coding With Passion <span>&#11088;</span> </span>
      </div>

    </footer>
  )
}

