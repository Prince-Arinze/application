import React, { useState } from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import DIA from "../../images/defence.jfif";
import { FaAlignRight } from 'react-icons/fa'

const Navbar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = ()  => setIsOpen(!isOpen);

           return (<nav className="navbar">
           <div className="nav-center">
             <div className="nav-header">      
               
               <Link to="/" ><img src={DIA} style={{height: "100px", width: "100px"}} alt="logo"/></Link>
               <button type="button" id="nav-btn" onClick={handleToggle}><FaAlignRight /></button>
             </div>
             <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                  <li><Link to="/archives" className="navbar-items " id="text-center">Military Archives</Link></li> 
                  <li className="group"><Link to="/login" className="navbar-items">Login</Link> <span style={{color:"rgb(158, 106, 9)"}}>|</span><Link to="/glossary" className="navbar-items">Glossary</Link></li> 
                  <li></li> 
                 
             </ul>
           </div>
       </nav>)
       }
   

export default Navbar;