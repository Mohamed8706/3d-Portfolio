import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion, spring } from 'framer-motion';
import { services } from "../constants"
import { fadeIn, textVariant } from './../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

  const ServiceCard = ({ index, title, icon }) => {
    return(
  <Tilt 
      className="xs:w-[250px] w-full" 
      tiltMaxAngleX={-25} 
      tiltMaxAngleY={-25} 
      scale={1.05} 
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h1 className="font-bold text-[20px] text-center text-white">{title}</h1>
        </div>
      </motion.div>
    </Tilt>
    )
  }

const About = () => {



  return (
    <>
    
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    
    <motion.p
      variants={fadeIn("", "", 0.1,1)} 
      className='mt-4 text-secondary text-[17px]
      max-w-3xl  leading-[30px]'>
        I'm a skilled software developer with experience in
        JavaScript, and expertise in frameworks
        like React, Node.js, and Three.js. I'm a quick learner
        and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world 
        problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className='flex flex-wrap justify-center gap-10 mt-20'>
      {services.map((service, index) => {
        return(
          <ServiceCard title={service.title} index={index} key={index} {...service} />
        )
      })}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about") 