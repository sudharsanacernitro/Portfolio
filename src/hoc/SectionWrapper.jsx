import {motion} from 'framer-motion';

import {styles} from '../styles';

import {staggerContainer} from '../utils/motion';


const SectionWrapper = (Component,idName)=> function hoc(){

    return(
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className={`${styles.padding} max-w-7xl max-auto relative z-0 sm:ml-[20%] ml-[0%] `}
        >
            {/* <span className='hash-span' id={idName}> 
                &nbsp;
            </span> */}
            <Component/>
        </motion.section>
    )
};


export default SectionWrapper;