"use client"
import Image from "next/image";
import { useState } from "react";
import style from './Card.module.css'
import { motion } from "framer-motion";

export default function Card({ name, img, index }) {
 
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // className={`animate-jump-in animate-once animate-duration-[800ms] animate-delay-700 animate-ease-linear animate-normal animate-fill-backwards`}
  return (
    <motion.div  
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay:0.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    key={index}>
              {!isHovered 
              ?

          <div className={` border-2  border-gray-800 border-opacity-60 lg:w-32 lg:h-32 sm:w-32 sm:h-32 rounded-lg overflow-hidden h-28 w-28  transition-transform duration-300 ease-in-out m-10 
            `}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            >
            <Image className="h-full w-full rounded-xl" src={img} alt="" />
          </div>
          :
          <div className={` border-2 text-red-600 font-bold tracking-wider  border-gray-800 border-opacity-60 lg:w-32 lg:h-32 sm:w-32 sm:h-32 rounded-lg overflow-hidden h-28 w-28 flex items-center justify-center m-10`}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          >
              <h1 className="text-[100%] sm:text-[100%] md:text-[100%] lg:text-[100%]" >{name}</h1>
            </div>
          
              }
             
        </motion.div>
      
      
  );
}