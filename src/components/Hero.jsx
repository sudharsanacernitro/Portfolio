import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
         <div className={`${styles.paddingX} absolute inset-o top-[120px] flex flex-row items-start gap-5`}>

            <div className='flex flex-col justify-center
            items-center mt-5
            '>
                <div className='w-5 h-5 rounded-full bg-[#915eff]'></div> {/* for dot like shape */}
                <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
            </div>

            <div>
              <h1 className={` ${styles.heroHeadText}
              text-white
              `}>
                Hi, I'm <span className='text-[#915eff]'> Sudharsan R </span>
              </h1>
              <p className={`${styles.heroSubText} text-white-100 mt-2`}>
                  I develop mobile and web apps,<br className='sm:block hidden'></br>AI models and backend applications.
              </p>
            </div>
         </div>
         
         <ComputersCanvas/>

      </section>
  )
}

export default Hero