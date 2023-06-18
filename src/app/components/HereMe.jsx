import React from 'react'
import SVG from './icons/SVG'
import MySvg from '../../../public/image/imagen-sinfondo_adobe_express.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function HereMe() {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden '>
        <div className='w-48 h-auto flex items-center justify-center relative '>
          <SVG className='animate-spin-slow' />

          <Link href='mailto:smdev06@gmail.com' className='flex items-center justify-center absolute left-[50%] top-[50%] -translate-x-[50%]  -translate-y-[50%] bg-black text-white shadow-md border-solid w-28 h-28 rounded-full font-semibold hover:bg-red-600 hover:text-white hover:bg-opacity-50' >
          Hire Me!!!
          </Link>
            
        </div>
    </div>
  )
}
