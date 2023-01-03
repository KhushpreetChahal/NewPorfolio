import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {themeContext} from "../../Context"
import { useContext } from "react";
import { motion } from 'framer-motion';


const Works = () => {
    const transition={duration:5,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            


            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Work for All these/</span>
             
                <span>Brands & Clients</span>
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing 
                    <br/>Lorem ipsum dolor sit, amet consectetur adipisicing.
                    <br/>Lorem ipsum, dolor sit amet consectetur adipisicing 
                    <br/>Lorem ipsum, dolor sit amet consectetur dipisicing 
                </span>
            <button className="button s-button">Hire Me</button>
            
               
            </div>
            <div className="blur s-blur02" style={{ background: "#C1F5FF" }}></div>    
            

            { /*right side*/}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 90 }}
                    WhileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }
                    }
                    
                    
                    
                    
                    
                    
                    
                    className="w-mainCircle">
                
                    <div className="w-secCircle">
                        <img src={Upwork} />
                         </div> 
                         <div className="w-secCircle">
                        <img src={Fiverr} />
                    </div> 
                    <div className="w-secCircle">
                        <img src={Amazon} />
                    </div> 
                    <div className="w-secCircle">
                        <img src={Shopify} />
                         </div> 
                         <div className="w-secCircle">
                        <img src={Facebook} />
                         </div> 
                    {/*background circles*/}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                
                
                </motion.div> 



      </div>







    </div>



    )


}

export default Works