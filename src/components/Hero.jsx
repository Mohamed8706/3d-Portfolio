import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/index";


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
          <h1 className={`${styles.heroHeadText} w-[53%] xs:w-[70%] sm:w-[100%] typing text-white`}>Hi, I&apos;m <span className="text-[#915eff]">
              Mohamed</span></h1>
            <p className={`${styles.heroSubText} slowtyping w-fit  mt-2 text-white-100`}>I develop web applications using React, with </p>
          <span className={`${styles.heroSubText}  slowtyping2`}>some experience in MongoDB and Node.js.</span>
        </div>
      </div>
      
   <ComputersCanvas />
    

    </section>
  )
}

export default Hero