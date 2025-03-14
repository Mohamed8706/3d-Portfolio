import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { github, live_preview } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

 const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_preview_link }) => {
  return(
      <motion.div>
      <Tilt 
          className="xs:w-[360px] min-h-[470px] w-full bg-tertiary p-5 rounded-2xl" 
          tiltMaxAngleX={-25} 
          tiltMaxAngleY={-25} 
          scale={1.05} 
          transitionSpeed={450}
        >
        <div className="relative w-full h-[230px]">
        {/* Image */}
          <img src={image} alt={name} className="w-full rounded-2xl h-full object-cover" />

        {/* Github Icon */}
        <div className='absolute inset-0 w-full flex justify-end  m-3 card-img_cover'>
          <div onClick={() => {
            window.open(source_code_link, "_blank")
          }}
          className='w-10 h-10 rounded-full black-gradient flex justify-center items-center cursor-pointer'
          >
            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
          {/* Live preview Icon */}
          {live_preview_link &&
            <div className='absolute inset-0 w-1/2 flex justify-start  m-3 card-img_cover'>
          <div onClick={() => {
            window.open(live_preview_link, "_blank")
          }}
          className='w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer'
          >
            <img src={live_preview} alt="Live Preview" className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
        }
 

        </div>
          {/* Content */}
          <div className='mt-2 w-full h-full'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='text-[14px] mt-2 text-secondary'>{description}</p>
          </div>
          {/* Tags */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <p key={index} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>

    </Tilt>
      </motion.div>
    )
  }

const Works = () => {
  return (
    <>
    {/* Header */}
    <motion.div >
      <p className={styles.sectionSubText}>My projects</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    {/* Description */}
    <div className='w-full flex'>
      <motion.p 
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Following projects showcases my skills and experience through
        real-world examples of my work.
        Each project is briefly descriped with links to code 
        repositories and live demo in it. 
        It refelcts my ability to solve complex problems, work
        with different technologies, and manage projects effectively.
      </motion.p>
    </div>
    {/* Project cards */}
    <div className='w-full flex mt-20 justify-center flex-wrap gap-7'>
      {projects.map((project, ind) => (
          <ProjectCard key={ind} index={ind} {...project}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")