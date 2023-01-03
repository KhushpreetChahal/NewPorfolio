import React from 'react'
import './Services.css'
import heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf'
import {themeContext} from "../../Context"
import { useContext } from "react";
import {motion} from 'framer-motion'


const Services = () => {
    const transition={duration:2.2,type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
   
        
        <div className="services"  id='Services'>
            {/*left side */}
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsa! Veritatis, vitae repellat officia error 
                    <br />aliquam hic nesciunt adipisci dolore impedit pariatur quia, magnam fuga . Labore, quas?</span>
                <a href={Resume} download><button className="button s-button">Download Cv</button></a>
            
               
            </div>
            <div className="blur s-blur02"  style={{background:"#C1F5FF"}}>
            
                </div>                








            {/*right*/}
            <div className="cards">

                {/*1st card*/}
                <motion.div
                    
                    initial={{ top: '-4%', left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    
                    
                    style={{ left: '11rem' }}>
                  <Card  
                        emoji={heartemoji}
                        heading={'Design'}
                    detail={"Figma,Sketch,Photoshop,Adobe,  Adobe xd"}

                      />
            </motion.div>
            
                
                {/*2nd card*/}

                
                <motion.div
                    
                    
                    initial={{ top: '12rem', left: '-4rem' }}
                    whileInView={{ left: '-2rem' }}
                    transition={transition}

                    style={{ top: "12rem", left: '-4rem' }}>
                  <Card  
                        emoji={Glasses}
                        heading={'Developer'}
                    detail={"Html,Css,JavaScript,React,  Adobe xd"}

                      />
                </motion.div>
                

                 
                {/*3rdd card*/}

                
                <motion.div
                    
                    initial={{ top: '19rem', left: '-12rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}

                    
                    style={{ top: "19rem", left: '12rem' }}>
                  <Card  
                        emoji={Humble}
                        heading={'UI/UX'}
                    detail={"Html,Css,JavaScript,React,  Adobe xd"}

                      />
            </motion.div>
                <div className="blur s-blur2"  style={{background:"var(--purple)"}}>
                
                
                
                </div>                


                

            </div>
            </div>
            
    )


}

export default Services