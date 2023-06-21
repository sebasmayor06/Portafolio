"use client"
import Card from "./Card";
import { motion } from 'framer-motion'

export default function Cards({ obras}) {
  
  return (
   

    <div className=" font-sans max-w-[1320px]  grid lg:grid-cols-8 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  px-[20px] container my-32">
    {/* <motion.div ref={ref} 
      style={{scaleY:scrollYProgress}}
      className='absolude left-8 top-0 w-[4px] h-full bg-white origin-top'
      
      /> */}
      {obras.map(({ img,name }, index) => {
        return <Card key={index} img={img} name={name} />;
      })}
      </div>
    
  );
}