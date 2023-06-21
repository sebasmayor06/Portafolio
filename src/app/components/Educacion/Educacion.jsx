"use client";
import React, { useState, useEffect } from "react";
import sombrero from "../../../../public/image/sombrero-removebg-preview.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Educacion() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 490); // Puedes ajustar el valor 768 según tus necesidades
    };

    window.addEventListener("resize", handleResize);

    // Limpia el evento de cambio de tamaño cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isSmallScreen);
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="flex justify-center font-bold mb-8 text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest">
          {" "}
          EDUCACIÓN<span className="text-red-600">.</span>
        </h1>
      </div>
      <div className="lg:border-t-2 lg:border-solid lg:border-red-600 "></div>
      <div
        className={`flex flex-col items-center  sm:justify-between gap-14 sm:flex sm:flex-row relative z-0 w-[100%]  font-medium text-lg text-gray-500 border-l-2 border-solid border-red-600 lg:border-t-2 lg:border-solid lg:border-black md:border md:border-solid md:border-black `}
      >
        <div className="flex flex-col items-center gap-5 w-40">
          <Image
            className=" sm:absolute sm:z-50 "
            src={sombrero}
            width={60}
            height={60}
            style={{ top: "-20px", left: "10%", transform: "translateX(-50%)" }}
          ></Image>

          <motion.div
            className=" w-60 border p-2 rounded-xl overflow-hidden "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1 className=" font-bold">Bootcamp Henry</h1>
            <h4 className="font-light">Feb 2023 - Jun 2023</h4>
            <a className="font-bold">Full Stack Developer</a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 w-40 items-center">
          <button>
            <Image
              className="sm:absolute sm:z-50 "
              src={sombrero}
              width={60}
              height={60}
              style={{
                top: "-20px",
                left: "90%",
                transform: "translateX(-50%)",
              }}
            ></Image>
          </button>

          <motion.div
            className=" border w-60 p-2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1 className="font-bold">Universidad Autónoma de Occidente</h1>
            <h4 className="font-light">Jun 2012 - Feb 2021</h4>
            <a className="font-bold">
              Ingenieria Electronica y Telecomunicaciones
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
