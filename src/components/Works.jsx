import React from 'react'
import {fadeIn,textVariant} from '../utils/motion';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import { SectionWrapper } from '../hoc';

import { projects } from '../constants';
import { github } from "../assets";

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

                <div className='absolute inset-0 flex justify-end mr-5 mt-2 card-img_hover'>
                    <div
                      onClick={() => window.open(source_code_link, "_blank")}
                      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                      <img
                        src={github}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                      />
                    </div>
               </div>


            </div>

            <div className='p-2'>
            <h3
              className='text-white text-[20px] font-bold '
            >{name}</h3>
            <p className='text-[12px] text-blue-300'>
              {description}
            </p>
            <p className='mt-2 flex flex-row gap-2'>
              {
                tags.map((tag,index)=>(
                  <span className={`${tag.color}`} key={index}>#{tag.name} </span>
                ))
              }
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