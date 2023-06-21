"use client"
import React from 'react'
import Image from 'next/image'
import foto from '../../../../public/image/logo.png'
import style from './Nav.module.css'
import Link from "next/link";


import { useEffect } from 'react'

export default function Nav() {
  
const cerrarBoton = ()=>{
    const menuButton = document.querySelector('#menu-button')
    const menuItems = document.querySelector('#menu')
    const menuButtonSpam = document.querySelectorAll('#menu-button span')
    const links = document.querySelectorAll('#menu a')
    
    menuButton.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');

        menuButtonSpam.forEach((span)=>{
            span.classList.toggle('animado')
        })
      });
  
      links.forEach((link)=>{
        link.addEventListener('click', ()=>{
            menuItems.classList.add('hidden');
            menuButtonSpam.forEach((span)=>{
                span.classList.remove('animado')
            })
        })
      })

      window.onresize = function (){
        let w = window.outerWidth;
        if(w>768){
            menuItems.classList.add('hidden');
            menuButtonSpam.forEach((span)=>{
                span.classList.remove('animado')
            })
        }
      }

      return () => {
        menuButton.removeEventListener('click', () => {
          menuItems.classList.toggle('hidden');
        });
      };

}


    useEffect(()=>{

        cerrarBoton()
        }, [])

    



  return (
   <nav className='flex justify-between py-10 m-auto px-10 text-lg font-medium tracking-widest md:items-center text-red-500'>
    <a href=""><Image src={foto} alt="" width={100} height={100}/></a>
    <div id='menu' className='p-7 bg-red-500 bg-opacity-10 h-[230px] w-[200px] md:flex flex-col items-start justify-around rounded-lg md:flex-row md:w-full md:py-0 md:h-[50px] md:bg-inherit hidden'>
       <ul className='flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full '>
       <Link href={'/'}><li className='md:px-5 hover:text-gray-400'><h3>INICIO</h3></li> </Link>
        <Link href={'/components/Sobremi'}><li className='md:px-5 hover:text-gray-400'><h3>SOBRE MI</h3></li></Link>
        <Link href={'/components/Proyectos'}><li className='md:px-5 hover:text-gray-400'><h3>PROYECTOS</h3></li></Link>
        <li className='md:px-5 hover:text-gray-400'><h3>CONTACTAME</h3></li>
        </ul> 

    </div>
        <button id='menu-button' className='absolute top-10 right-12 md:hidden overflow-hidden'>
            <span className={'br1 block bg-red-500 my-2 rounded-md h-[3px] w-[28px]'}></span>
            <span className={'br2 block bg-red-500 my-2 rounded-md h-[3px] w-[28px]'}></span>
            <span className={'br3 block bg-red-500 my-2 rounded-md h-[3px] w-[28px]'}></span>
        </button>
   </nav>
  )
}
