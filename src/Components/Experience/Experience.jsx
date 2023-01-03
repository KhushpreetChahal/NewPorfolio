import React from 'react'
import  './Experience.css'
import { motion } from 'framer-motion'


const Experince = () => {
    const transition={duration:2.2,type:'spring'}
    return (
        <div className="experience" id='Experience'>

            <div className="achievement">
                <motion.div
                initial={{ top: '-4%', left: '25rem' }}
                whileInView={{ left: '-8px' }}
                transition={transition}
                    
                    
                    className="circle">8+</motion.div>
                <span>years</span>
                <span>Experience</span>
            </div>

            <div className="achievement">
                <motion.div
                initial={{ top: '-4%', left: '25rem' }}
                whileInView={{ left: '-8px' }}
                transition={transition}
                    
                    className="circle">1+</motion.div>
                <span>Companies</span>
                <span>Experience</span>
            </div>

            <div className="achievement">
            <div className="circle">20+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            

        </div>
      
    )


}

export default Experince