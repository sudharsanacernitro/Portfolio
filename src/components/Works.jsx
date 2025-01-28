import React from 'react'
import {fadeIn,textVariant} from '../utils/motion';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import { SectionWrapper } from '../hoc';

import { projects } from '../constants';

const ProjCards=({index,name,description,tags,image,source_code_link})=>{

    return(
     <Tilt className='xs:w-[350px] w-full'>
        <motion.div
        variants={fadeIn("right","spring",0.5 *index,0.75)}
  
        className='w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card
        '
        >
          <div options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px]   min-h-[440px] sm:min-h-
          flex   flex-col justify-evenly
          '
          >
            <div className='relative w-full h-[230px] px-4'>
                <img src={image} className='w-full h-full object-cover rounded-2xl'/>
            </div>

            <div className='p-2'>
            <h3
              className='text-white text-[20px] font-bold '
            >{name}</h3>
            <p className='text-[12px] text-blue-300'>
              {description}
            </p>
            <p>
              <span>
                stacks
              </span>
            </p>
            </div>
  
          </div>
  
        </motion.div>
  
     </Tilt>
    )
  
  
}

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My works
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects
      </h2>
     </motion.div>
     <div className='flex flex-row flex-wrap justify-center gap-10 w-full mt-[100px]'>
     {
        projects.map((project,index)=>(
          <ProjCards key={project.name} index={index} {...project}/>
        ))
      }
     </div>
    </>
   
  )
}

export default SectionWrapper(Works,"works");