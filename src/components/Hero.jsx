 import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/index";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Content and icon container */}
      <div className={`${styles.paddingX} absolute  inset-0 top-[120px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5 `}>

        {/* Icon and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div  className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>

        {/*  Content  */} 
        <div className="">
          <h1 className={`${styles.heroHeadText} w-[63%] xs:w-[70%] sm:w-[100%] typing text-white`}>Hi, I&apos;m <span className="text-[#915eff]">
              Mohamed Ibrahim</span></h1>
            <p className={`${styles.heroSubText} slowtyping w-fit  mt-2 text-white-100`}>I develop web applications using React, with </p>
          <span className={`${styles.heroSubText}  slowtyping2`}>some experience in MongoDB and Node.js.</span>
        </div>
      </div>

      {/* 3D  Model */}
      <ComputersCanvas />

    {/* Scroll down button */}
    <div className="absolute bottom-40 xsm:bottom-52 sm:bottom-5 flex items-center justify-center w-full">
      <a href="#about">
        <div className="w-[35px] h-[64px] flex items-start justify-center 
        rounded-3xl border-secondary border-4">
          <motion.div animate={{
            y: [0, 22, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary my-2"
          />
        </div>
      </a>
    </div>

    </section>
  )
}

export default Hero