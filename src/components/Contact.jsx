import React from 'react'
import { SectionWrapper } from '../hoc'
import {motion} from 'framer-motion';
import {styles} from '../styles';

import {fadeIn,textVariant} from '../utils/motion';

const Contact = () => {
  return (<>

     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Lets connect 
      </p>
      <h2 className={styles.sectionHeadText}>
        Contact
      </h2>
     </motion.div>

    <div className='w-full flex justify-center'>
            <form className='sm:w-[50%] w-[100%] h-[620px]  bg-[#1d1836] p-10 rounded-xl '>
                <div className='mt-5'>
                <label className={` text-white  mt-5`}>Name </label><br/>
                <input type="text" className='bg-violet-200 rounded-[20px] h-10 w-[90%] sm:w-[80%] text-black font-bold  ml-7 mt-4 p-3' placeholder='Your name'/>
                </div>

                <div className='mt-10'>
                <label className={` text-white mt-5`}>Email </label><br/>
                <input type="text" className='bg-violet-200 rounded-[20px] h-10 w-[90%] sm:w-[80%] text-black font-bold  ml-7 mt-4 p-3' placeholder='Your emailid'/>
                </div>

                <div className='mt-10'>
                <label className={` text-white  mt-5`}>your message </label><br/>
                <input type="text" className='bg-violet-200 rounded-[20px] h-[200px] w-[90%] sm:w-[80%] text-black font-bold  ml-7 mt-4 p-3' placeholder='Your message'/>
                </div>

                <input type="submit" className='cursor-pointer bg-violet-200 text-black rounded-xl p-2 mt-4'></input>
            </form>
    </div>

    </>)
}

export default SectionWrapper(Contact,"contact")