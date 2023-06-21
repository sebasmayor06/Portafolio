"use client"
import React from 'react'
import {motion} from "framer-motion"


export default function Transition() {
  return (
    <>
    <motion.div className='fixed  top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-r from-gray-700 via-gray-900 to-black'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    exit={{x:["0%", "100%"], width:["0%", "100%"]}}
    transition={{delay:0, duration:0.8, ease:"easeInOut"}}
    />
      <motion.div className='fixed  top-0 bottom-0 right-full w-screen h-screen z-20 bg-red-800 '
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{delay:0.1, duration:0.8, ease:"easeInOut"}}
    />
      <motion.div className='fixed  top-0 bottom-0 right-full w-screen h-screen z-10 bg-slate-500'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{delay:0.2, duration:0.8, ease:"easeInOut"}}
    />
    </>
  )
}
