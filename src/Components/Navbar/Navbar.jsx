import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
             <div className="n-name">Khushpreet</div>
             <Toggle/>
     
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                        <li> Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                        <li> Services</li>
                        </Link>
                        <Link spy={true} to='Experince' smooth={true} >
                        <li> Experince</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} >
                        <li> Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials'smooth={true} >
                        <li> Testimonials</li>
                            </Link>
                     
                
                      
               

                    
                    </ul>
                    </div>
                       <button className="button n-buttons">Contact</button> 
          </div>
</div>

            





 
    )


}

export default Navbar