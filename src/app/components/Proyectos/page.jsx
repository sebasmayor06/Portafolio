"use client";
import React from "react";
import { motion } from "framer-motion";
import Transition from "../Transition/Transition";
import { proyectos2 } from "../proyectos2/proyectos";
import Image from "next/image";
import internet from "../../../../public/image/4c910ee68a0f4fe8029f72e40bc10fe6-icono-de-navegacion-por-internet-trazo-rosa.png"
import Footer2 from "../Name/footer";

export default function proyectos() {
  const array = ["PROYECTOS."];

  return (
    <div className="flex min-h-screen flex-col justify-between items-center gap-20">
      <Transition></Transition>
      <div className="flex justify-center font-bold text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest">
        {array[0].split("").map((e, index) => (
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={index}
            className={`${index % 2 !== 0 ? "hover:text-red-600" : ""} ${
              index === 9 ? "text-red-600" : ""
            }`}
          >
            {e}
          </motion.h1>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1  rounded-xl">
        {/* className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1" */}
        {proyectos2.map((e, index) => (
          // <div className="border-2 border-solid border-gray-500 rounded-xl m-5">
          //   <Image className="overflow-hidden" src={e.image} width={600} height={600}></Image>
          //   <h1 key={index} className="text-red-500 font-normal tracking-wider text-center">
          //     {e.name}
          //   </h1>
          //   <div className="flex flex-row overflow-hidden mt-6">
          //     <h1 className="mr-5">TECNOLOGIAS:</h1>
          //     {e.tecno.map((f, index2) => (
          //       <div>
          //         <Image key={index2} src={f} width={40} height={40} alt=""></Image>
          //       </div>
          //     ))}
          //   </div>
          //   <a href={e.deploy}>DEPLOY</a>
          // </div>
          <div className="w-[300px] h-[280px] lg:w-[450px] lg:h-[300px] bg-transparent  rounded-xl m-5 group perspective">
            
            <div className="relative preseve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000  rounded-xl">
              <div className="absolute backface-hidden border-2 w-full h-full rounded-xl ">
                <Image
                  className="overflow-hidden w-full  h-full cursor-pointer rounded-xl"
                  src={e.image}
                ></Image>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-black rounded-xl">
                <div className="text-center flex flex-col items-center justify-center h-auto">
                    <h1 className=" text-red-600 font-bold text-xl lg:text-2xl">{e.name}</h1>
                    <p className="text-gray-400  text-sm lg:text-sm">{e.parrafo}</p>
                    <div className="flex flex-row overflow-hidden mt-6">
               <h1 className="mr-5 text-red-600 font-bold text-sm lg:text-xl">TECNOLOGIAS:</h1>
               {e.tecno.map((f, index2) => (
                 <div>
                   <Image key={index2} src={f} width={40} height={40} alt=""></Image>
                 </div>
               ))}
            </div>
            <a className="  rounded-xl hover:animate-wiggle-more hover:animate-infinite text-gray-400 font-bold mt-6" href={e.deploy} target="_blank" >
              <Image src={internet} width={40} height={40}></Image>
            </a>
                </div>
            
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-10">

      <Footer2></Footer2>
      </div>
    </div>
  );
}
