import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import "../styles"
import { EarthCanvas } from "./canvas"
import SectionWrapper from './../hoc/SectionWrapper';
import { slideIn, textVariant } from '../utils/motion'
import { styles } from '../styles'


const Contact = () => {
  // States
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '', 
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  // Handling changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setForm({ ...form, [name] : value })
    
  }
  
 const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_yiy38bn",
        "template_2gbyhis",
        {
          from_name: form.name,
          to_name: "Mohamed",
          from_email: form.email,
          to_email: "mohamedkabash102@gmail.com",
          message: form.message,
        },
        'BjrT8xZl-q_28v7TK'
        
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* form */}
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-1 bg-black-100 p-8 rounded-2xl'>
          {/* Head text */}
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

          {/* form */}
          <form ref={formRef}  onSubmit={handleSubmit}
          className='mt-12 flex items-center flex-col gap-8'
          >
            <label className='flex flex-col w-full'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <input type='text' name='name' value={form.name}  onChange={handleChange} 
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
              outline-none border-none font-medium'
              />
            </label>
                  <label className='flex flex-col w-full'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input type='email' name='email'  value={form.email}  onChange={handleChange} 
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
              outline-none border-none font-medium'
              />
            </label>
              <label className='flex flex-col w-full'>
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea rows={7} name='message'  value={form.message}  onChange={handleChange} 
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
              outline-none border-none font-medium'
              />
            </label>
            {/* Submit button */}
            <button 
            type='submit' className='bg-tertiary py-3 px-8 outline-none 
            w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
                {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        {/* Earth model */}
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-350px'>
            <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")